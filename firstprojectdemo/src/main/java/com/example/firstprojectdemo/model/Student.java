package com.example.firstprojectdemo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//Entity annotation automatically generate table
@Entity
//@Table(name="student")
public class Student {
    @Id
    // ID annotation to make id auto incremented
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String name;
    private String address;
    private String email;

    //default constructor
    public Student() {
    }

    //Getter Method for ID
    public int getId() {
        return id;
    }

    //setter method for ID
    public void setId(int id) {
        this.id = id;
    }

    //getter method for username
    public String getUsername() {
        return username;
    }

    //setter method for username
    public void setUsername(String username) {
        this.username = username;
    }

    //getter method for email
    public String getEmail() {
        return email;
    }

    //setter method for string
    public void setEmail(String email) {
        this.email = email;
    }

    //Getter Method for Name
    public String getName() {
        return name;
    }

    //setter method for name
    public void setName(String name) {
        this.name = name;
    }

    //Getter Method for Address
    public String getAddress() {
        return address;
    }

    //setter method for address
    public void setAddress(String address) {
        this.address = address;
    }
}
