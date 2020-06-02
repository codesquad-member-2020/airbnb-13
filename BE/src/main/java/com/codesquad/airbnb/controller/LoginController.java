package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.utils.GithubLogin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class LoginController {

    @GetMapping("/github-login")
    public ResponseEntity<String> redirectGithub(HttpServletResponse response) {
        response.setHeader("Location", GithubLogin.REDIRECT_GITHUB);

        return new ResponseEntity<>("Redirect-Github", HttpStatus.FOUND);
    }
}
