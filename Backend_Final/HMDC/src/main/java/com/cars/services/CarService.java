package com.cars.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cars.entities.Car;
import com.cars.entities.Kyc;
import com.cars.entities.User;
import com.cars.models.KycDto;

public interface CarService {
	List<Car> findAll();
	Car save(Car carEnitity, MultipartFile carImage);
	List<Car> findByCompany1(int id);
	List<Car> findCarsByuser(User u);
	Car deleteCar(int id);
	//Car findCar()
	Car getCar(int id);
	
}
