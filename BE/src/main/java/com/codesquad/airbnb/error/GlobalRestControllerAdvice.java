package com.codesquad.airbnb.error;

import com.codesquad.airbnb.error.exception.AlreadyBookedException;
import com.codesquad.airbnb.error.exception.ReservationInvalidFormException;
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

    @ExceptionHandler(ReservationInvalidFormException.class)
    protected ResponseEntity<String> reservationInvalidFormExceptionHandler(ReservationInvalidFormException e) {
        log.error("Handle ReservationInvalidFormException:", e);
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AlreadyBookedException.class)
    ResponseEntity<String> AlreadyBookedExceptionHandler(AlreadyBookedException e) {
        log.error("Handle AlreadyBookedException:", e);
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
