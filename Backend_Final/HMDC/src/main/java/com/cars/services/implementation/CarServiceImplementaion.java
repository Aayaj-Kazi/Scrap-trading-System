package com.cars.services.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.cars.daos.CarDao;
import com.cars.entities.Car;
import com.cars.entities.User;
import com.cars.services.CarService;
import com.cars.utils.StorageService;


@Service
@Transactional
public class CarServiceImplementaion implements CarService  {
	
	@Autowired
	private CarDao cardao;
	
	@Autowired
	private StorageService storageService;
	
	@Override
	public List<Car> findAll() {
		return cardao.findAll();
	}

	@Override
	public Car save(Car carEnitity, MultipartFile carImage) {
		String fileName = storageService.store(carImage);
		carEnitity.setCarImage(fileName);
		return cardao.save(carEnitity);
	}

	@Override
	public List<Car> findByCompany1(int id) {
		// TODO Auto-generated method stub
		return cardao.findByCompanyId(id);
	}

	@Override
	public List<Car> findCarsByuser(User u) {
		// TODO Auto-generated method stub
		return cardao.findByUser(u);
	}

	@Override
	public Car deleteCar(int id) {
		Optional<Car> c = cardao.findById(id);
		Car cc=c.orElse(null);
		cardao.delete(cc);
		return cc;
	}

	@Override
	public Car getCar(int id) {
		Optional<Car> c=cardao.findById(id);
		return c.orElse(null);
	}

}
