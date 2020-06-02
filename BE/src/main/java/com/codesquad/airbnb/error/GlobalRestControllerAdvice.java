package com.codesquad.airbnb.error;

import com.codesquad.airbnb.error.exception.UserNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalRestControllerAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    protected ResponseEntity<String> userNotFoundExceptionHandler(UserNotFoundException e) {
        log.error("Handle UserNotFoundException:", e);
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }
}