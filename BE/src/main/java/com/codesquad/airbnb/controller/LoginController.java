package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.UserResponse;
import com.codesquad.airbnb.service.LoginService;
import com.codesquad.airbnb.utils.GithubLogin;
import com.codesquad.airbnb.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.net.URISyntaxException;

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
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(redirectUri);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }

    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestParam("code") String code, HttpServletResponse response) {
        UserResponse loginUser = loginService.responseUser(code);
        String jwt = JwtUtils.jwtCreate(loginUser);

        Cookie cookie = new Cookie("jwt", jwt);
        cookie.setMaxAge(24 * 60 * 60);
        cookie.setPath("/");

        response.addCookie(cookie);
        response.setHeader("Authorization", "Bearer " + jwt);
        response.setHeader("Location", GithubLogin.REDIRECT_MAIN);
        return new ResponseEntity<>("Login-Success", HttpStatus.FOUND);
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logOut(HttpServletResponse response) {
        Cookie cookie = new Cookie("jwt", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");

        response.addCookie(cookie);
        response.setHeader("Location", GithubLogin.REDIRECT_MAIN);
        return new ResponseEntity<>("LogOut", HttpStatus.FOUND);
    }
}
