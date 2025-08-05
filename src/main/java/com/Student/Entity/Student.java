package com.Student.Entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="necstudent")
public class Student {
	
	@Id
	
	private long id;
	
	private String name;
	
	private String department;
	
	private String Email;
	
	public Student() {}

	public Student(long id, String name, String department, String email) {
		
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		Email = email;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}
		

}
