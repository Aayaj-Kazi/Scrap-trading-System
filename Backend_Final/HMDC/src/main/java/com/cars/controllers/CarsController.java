package com.cars.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cars.entities.Car;
import com.cars.entities.Company;
import com.cars.entities.Kyc;
import com.cars.entities.Model;
import com.cars.entities.User;
import com.cars.models.Cardto;
import com.cars.models.Cardto2;
import com.cars.models.Companydto;
import com.cars.models.KycDto;
import com.cars.models.Modeldto;
import com.cars.models.NewCardto;
import com.cars.models.Response;
import com.cars.services.CompanyService;
import com.cars.services.KycService;
import com.cars.services.ModelService;
import com.cars.services.UserService;
import com.cars.services.CarService;


@CrossOrigin 	
@RestController
@RequestMapping("/")
public class CarsController {
	@Autowired
	private CarService carservice;
	
	@Autowired
	private CompanyService companyservice;
	
	@Autowired 
	private ModelService modelservice;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private KycService kservice;
	
	@GetMapping("/getcars")
	public ResponseEntity<?> getCars(){
		List<Car> list=carservice.findAll();
		List<Cardto> result = new ArrayList<Cardto>();
		for (Car c : list) {
			Cardto dto=Cardto.ToDto(c);
			dto.setCompanyName(c.getCompany().getName());
			dto.setUserId(c.getUser().getUserId());
			Model model = modelservice.getByModelId(c.getModelId());
			dto.setModelName(model.getModelName());
			result.add( dto );
			System.out.println(dto);
		}
		return Response.success(result);	
	}



	
	
	//this is post car by id 
	@PostMapping("/postcar")
	public ResponseEntity<?> registerCar(NewCardto cdto){
		System.out.println(cdto);
		
		Car carEnitity=NewCardto.toCarEntity(cdto);
		
		Company company=companyservice.getByCompanyId(cdto.getCompanyId());
		Model model=modelservice.getByModelId(cdto.getModelId());
		User user=userservice.findUser(cdto.getUserId());
		
		System.out.println(company);
		System.out.println(model);
		System.out.println(cdto.getUserId());
		
		carEnitity.setCompany(company);
		carEnitity.setModelId(model.getModelId());
		carEnitity.setUser(user);
		
		Car carResponse = carservice.save(carEnitity,cdto.getCarImage());
		HashMap<String, Object> map = new HashMap<>();
		//if company and response is not found then show error msg
		if(company == null && carResponse == null) {
			map.put("status", "error");
			ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
			return ResponseEntity.ok(map);
		}else {
			map.put("status", "success");
			return ResponseEntity.ok(map);
		}
		
	}
	
		
	@GetMapping("/getcar/{id}")
	public ResponseEntity<?> getAllCars(@PathVariable("id") int id){
		List<Car> list=carservice.findByCompany1(id);
		list.forEach(System.out::println);
		return Response.success(list);
	}
	
	

	@GetMapping("/getcarbyuserid/{id}")
	public ResponseEntity<?> getAllCarsOfUser(@PathVariable("id") int id){
		User u=userservice.findUser(id);
		List<Car> list=carservice.findCarsByuser(u);
		List<Cardto2> carlist=new ArrayList<Cardto2>();
		for(Car c:list) {
			Cardto2 car=new Cardto2(c.getCarId(),c.getFuelType(),c.getKmDriven(),c.getPrice(),c.getColor(),c.getDate(),c.getCity());
			car.setCompanyName(c.getCompany().getName());
			Model m=modelservice.getByModelId(c.getModelId());
			car.setModelName(m.getModelName());
			carlist.add(car);
		}
		return Response.success(carlist);
	}
	
//	
//	@GetMapping("/getcarbyuserid/{id}")
//	public ResponseEntity<?> getAllCarsOfUser(@PathVariable("id") int id){
//		User u=userservice.findUser(id);
//		List<Car> list=carservice.findCarsByuser(u);
//		List<Cardto> carlist=new ArrayList<Cardto>();
//		for(Car c:list) {
//			Cardto car=new Cardto(c.getFuelType(),c.getKmDriven(),c.getPrice(),c.getColor(),c.getDate(),c.getCity());
//			car.setCompanyName(c.getCompany().getName());
//			Model m=modelservice.getByModelId(c.getModelId());
//			car.setModelName(m.getModelName());
//			carlist.add(car);
//		}
//		return Response.success(carlist);
//	}
	
	@PostMapping("/postcompany")
	public ResponseEntity<?> registerCompany(Company cdto){
//		System.out.println(cdto);
//		Company cEntity=Companydto.toCompanyEntity(cdto);
		Company c=companyservice.save(cdto);
		return Response.success(c);
	}
	
	@PostMapping("/postmodel")
	public ResponseEntity<?> registerModel(Modeldto mdto){
		Model m=new Model();
		m.setCompany(companyservice.findById(mdto.getCompanyId()));
		m.setModelName(mdto.getModelname());
		return Response.success(modelservice.save(m));
	}
	
	
	@GetMapping("/getcompanies")
	public ResponseEntity<?> getAllCompanies(){
		List<Company> list=companyservice.findAllCompanies();
		List<Companydto> companylist=new ArrayList<Companydto>();
		for(Company c:list) {
			companylist.add(new Companydto(c.getId(),c.getName()));
		}
		return Response.success(companylist);
	}
	
	@GetMapping("/getmodels/{id}")
	public ResponseEntity<?> getAllModels(@PathVariable("id") int id){
		List<Model> list=modelservice.findAllModels(id);
		list.forEach(System.out::println);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getmodels")
	public ResponseEntity<?> allModels(){
		List<Model> list=modelservice.getAllModels();
		List<Modeldto> modellist=new ArrayList<Modeldto>();
		for(Model m:list) {
			Modeldto MM = new Modeldto(m.getModelId(),m.getModelName(),m.getCompany().getId());
			modellist.add(MM);
			System.out.println(MM);
		}
		return Response.success(modellist);
	}
	
	@DeleteMapping("/deletecar/{id}")
	public ResponseEntity<?> deleteCar(@PathVariable("id") int id){
		Car car=carservice.deleteCar(id);
		System.out.println(car);
		return Response.success(car);
	}
	
	@PostMapping("/postkyc")
	public ResponseEntity<?> postKyc(KycDto kdto){
		Kyc k=kservice.postKyc(kdto);
		return Response.success(k);
	} 
	
//	@GetMapping("/getAllKyc")
//	public ResponseEntity<?> getKyc(){
//		List<Kyc>=kservice.getKyc();
//		System.out.println(car);
//		return Response.success(car);
//	} 
	
}
