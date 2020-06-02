package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.UserResponse;
import com.codesquad.airbnb.service.LoginService;
import com.codesquad.airbnb.utils.GithubLogin;
import com.codesquad.airbnb.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@RequiredArgsConstructor
@RestController
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/github-login")
    public ResponseEntity<Object> redirectGithub() {
        URI redirectUri;
        try {
            redirectUri = new URI(GithubLogin.REDIRECT_GITHUB);
        } catch (URISyntaxException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(redirectUri);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }

    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestParam("code") String code, HttpServletResponse response) {
        UserResponse loginUser = loginService.responseUser(code);
        String jwt = JwtUtils.jwtCreate(loginUser);
        response.setHeader("Authorization", "Bearer " + jwt);
        response.setHeader("Location", GithubLogin.REDIRECT_MAIN);
        return new ResponseEntity<>("Login-Success", HttpStatus.FOUND);
    }
}
