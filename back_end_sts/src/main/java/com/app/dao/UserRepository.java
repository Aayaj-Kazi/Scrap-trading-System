package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;



public interface UserRepository extends JpaRepository<User, Integer> {

	//find all users by email
	List<User> findByEmail(String email);
	
	//find all users by name
	List<User> findByFullname(String fullname);
	
}
