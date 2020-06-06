package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.GithubToken;
import com.codesquad.airbnb.dto.User;
import com.codesquad.airbnb.dto.UserResponse;
import com.codesquad.airbnb.repository.UserDao;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class LoginService {

    private final String CLIENT_ID = "4946b46078dcaa5adfa6";
    private final String CLIENT_SECRET = "144c1939474d892d8b6f74c06304139d616dcf99";
    private final String GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private final String GITHUB_API_URL = "https://api.github.com/user";

    private final UserDao userDao;

    public UserResponse responseUser(String code) {
        UserResponse userResponse = getUserEmail(code);
        try {
            findUserByEmail(userResponse.getEmail());
        } catch (RuntimeException e) {
            userDao.saveUserDao(userResponse);
        }
        return userResponse;
    }

    public User findUserByEmail(String email) {
        return userDao.findByEmail(email);
    }

    private MultiValueMap<String, String> requestAccess() {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json");
        headers.setAll(header);
        return headers;
    }

    private GithubToken getGithubAccessToken(String code) {
        MultiValueMap<String, String> requestHeaders = new LinkedMultiValueMap<>();
        Map<String, String> requestHeader = new HashMap<>();
        requestHeader.put("client_id", CLIENT_ID);
        requestHeader.put("client_secret", CLIENT_SECRET);
        requestHeader.put("code", code);
        requestHeaders.setAll(requestHeader);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(requestHeaders, requestAccess());
        ResponseEntity<GithubToken> response = new RestTemplate().
                postForEntity(GITHUB_TOKEN_URL, request, GithubToken.class);
        return response.getBody();
    }

    private UserResponse getUserEmail(String code) {
        GithubToken githubToken = getGithubAccessToken(code);
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", getAuthorizationValue(githubToken));
        ResponseEntity<UserResponse> responseEntity = new RestTemplate().exchange(GITHUB_API_URL, HttpMethod.GET,
                new HttpEntity<>(headers), UserResponse.class);

        return responseEntity.getBody();
    }

    private String getAuthorizationValue(GithubToken githubToken) {
        StringBuilder sb = new StringBuilder();
        sb.append(githubToken.getTokenType());
        sb.append(" ");
        sb.append(githubToken.getAccessToken());
        return sb.toString();
    }
}
