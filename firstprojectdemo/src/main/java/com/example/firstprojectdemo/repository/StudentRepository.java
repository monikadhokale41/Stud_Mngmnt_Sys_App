package com.example.firstprojectdemo.repository;

import com.example.firstprojectdemo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Integer is datatype of primary key (id)
@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

}
