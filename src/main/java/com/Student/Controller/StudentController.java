package com.Student.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Student.Entity.Student;
import com.Student.service.StudentService;

@RestController
@RequestMapping("api/student")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	@PostMapping()
	public Student addStudent(@RequestBody Student stu) {
		return service.save(stu);
	}
	@GetMapping()
	public List<Student> getAll(){
		return service.getAll();
	}
	@GetMapping("/{id}")
	public Optional<Student> getStudent(@PathVariable Long id) {
		return service.getById(id);
		
	}
	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable Long id,@RequestBody Student updateStudent){
		updateStudent.setId(id);
		return service.update(id,updateStudent);
		
	}
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable Long id) {
		service.delete(id);
		
	}

}
