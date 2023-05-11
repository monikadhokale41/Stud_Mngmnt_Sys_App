package com.example.firstprojectdemo.service;

import java.util.List;
import java.util.Optional;

import com.example.firstprojectdemo.model.Student;
import com.example.firstprojectdemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.firstprojectdemo.exception.StudentNotFoundException;


@Service
public class StudentServiceImplementation implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    //So save data in database
    @Override
    public Student saveStudent(Student student) {

        return studentRepository.save(student);
    }

    //to fetch data from database
    @Override
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }

    //to update data in database
    @Override
    public void updateStudent(Student student, Integer id) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException("Student not found with id: " + id));
        existingStudent.setUsername(student.getUsername());
        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setAddress(student.getAddress());
        studentRepository.save(existingStudent);
    }

    //to delete data from database
    @Override
    public void deleteStudByID(Integer id) {

        studentRepository.deleteById(id);
    }

//get student with specific id
    public Optional<Student> getStudentById(Integer id) {
        return studentRepository.findById(id);
    }



}
