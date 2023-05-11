package com.example.firstprojectdemo.controller;

import com.example.firstprojectdemo.exception.StudentNotFoundException;
import com.example.firstprojectdemo.model.Student;
import com.example.firstprojectdemo.repository.StudentRepository;
import com.example.firstprojectdemo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:3000")

public class StudentController {

    @Autowired
    private StudentService studentService;

    //API to add insert data in database api mapping:"localhost:8056/student/add"
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student is added";
    }

    //API to fetch data from database api mapping:"localhost:8056/student/getAll"
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){

        return studentService.getAllStudents();
    }

    //API to Update data from database api mapping:"localhost:8056/student/students/{id}"
    @PutMapping("/students/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable("id") Integer id, @RequestBody Student student) {
        studentService.updateStudent(student, id);
        return ResponseEntity.ok("Student updated successfully.");
    }


    //API to delete data from database api mapping:localhost:8056/student/delete/{id}
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Integer id) {
        studentService.deleteStudByID(id); // call the deleteStudByID method on the instance
        return ResponseEntity.ok("Student deleted successfully.");
    }


    //API to get student with specific api mapping: id localhost:8056/student/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
        Optional<Student> student = studentService.getStudentById(id);
        if (student.isPresent()) {
            return new ResponseEntity<Student>(student.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }


}
