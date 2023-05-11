package com.example.firstprojectdemo.service;

import com.example.firstprojectdemo.model.Student;
import com.example.firstprojectdemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();

    //update student
    void updateStudent(Student student, Integer id);

     void deleteStudByID(Integer id);



    public Optional<Student> getStudentById(Integer id);




}
