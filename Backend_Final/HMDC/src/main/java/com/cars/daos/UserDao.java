package com.cars.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.entities.User;

public interface UserDao extends JpaRepository<User,Integer>  {
	User findByEmail(String email);
}
