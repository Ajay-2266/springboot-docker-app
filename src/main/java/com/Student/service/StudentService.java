package com.Student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Student.Entity.Student;
import com.Student.Repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository repository;
	public Student save(Student stu) {
		return repository.save(stu);	
	}
	
	public List<Student> getAll(){
		return repository.findAll();
	}
	
	public Optional<Student> getById(Long id){
		return repository.findById(id);
		
	}
	
	public Student update(Long id,Student updatestudent) {
		return repository.findById(id).map(stu->{
			stu.setName(updatestudent.getName());
			stu.setEmail(updatestudent.getEmail());
			stu.setDepartment(updatestudent.getDepartment());
			return repository.save(stu);
		}).orElseThrow();
	}
	
	public void delete(Long id) {
		if(!repository.existsById(id)) {
			throw new IllegalArgumentException();

		}
		repository.deleteById(id);
	}

}
