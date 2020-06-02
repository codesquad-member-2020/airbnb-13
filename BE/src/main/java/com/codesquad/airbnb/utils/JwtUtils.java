package com.codesquad.airbnb.utils;

import com.codesquad.airbnb.dto.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.HashMap;
import java.util.Map;

public class JwtUtils {
    private static final String JWT_KEY = "user";

    private JwtUtils() {
    }

    public static String jwtCreate(User user) {
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("userEmail", user.getEmail());

        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(SignatureAlgorithm.HS256, JWT_KEY.getBytes())
                .compact();
    }

    public static String jwtParsing(String jwt) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_KEY.getBytes())
                .parseClaimsJws(jwt)
                .getBody();
        return claims.get("userEmail", String.class);
    }
}
