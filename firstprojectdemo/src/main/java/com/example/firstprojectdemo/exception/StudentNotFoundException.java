package com.example.firstprojectdemo.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class StudentNotFoundException extends RuntimeException{
//    public StudentNotFoundException(Integer id){
//        super("Could not found student with id"+ id);
//    }
    private static final long serialVersionUID = 1L;

    public StudentNotFoundException(String message) {

        super(message);
    }
}


