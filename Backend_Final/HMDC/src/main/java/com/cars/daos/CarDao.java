package com.cars.daos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.entities.Car;
import com.cars.entities.User;
public interface CarDao extends JpaRepository<Car,Integer>   {
	List<Car> findByCompanyId(int id);
	List<Car> findByUser(User u);
}
