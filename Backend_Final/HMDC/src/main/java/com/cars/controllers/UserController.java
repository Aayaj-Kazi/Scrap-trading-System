package com.cars.controllers;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cars.entities.User;
import com.cars.models.ForgotPassworddto;
import com.cars.models.Response;
import com.cars.models.UserDto;
import com.cars.models.UserNewDto;
import com.cars.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/")
public class UserController {
	
	@Autowired
	private UserService service;
	
	
	
	@PostMapping("/register")
	public ResponseEntity<?> register(UserDto dto){
		System.out.println(dto);
		User cust=UserDto.toEntity(dto);
		service.save(cust);
		UserDto cdto=UserDto.fromEntity(cust);
		return Response.success(cdto);
		
	}
	

	@PostMapping("/login")
	public ResponseEntity<?> signin( UserDto cred){
		User user=service.authenticate(cred.getEmail(), cred.getPassword());
		System.out.println(user);
		return Response.success(user);
	}
	
	@PostMapping("/forgotpassword")
	public ResponseEntity<?> forgotPassWord(ForgotPassworddto cred){
		User cust = service.forgotPassword(cred.getEmail(),cred.getPassword(),cred.getSecurity());
		return Response.success(cust);
	}
	
	@GetMapping("/getusers")
	public ResponseEntity<?> getAllUsers(){
		List<User> list=service.finAllUsers();
		return Response.success(list);
	}
	
	@GetMapping("/getuser/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") int id){
		User u=service.findUser( id);
		
		UserDto dto=new UserDto();
		dto.setAddress(u.getAddress());
		dto.setCity(u.getCity());
		dto.setEmail(u.getEmail());
		dto.setFirstName(u.getFirstName());
		dto.setLastName(u.getLastName());
		dto.setMobileNo(u.getMobileNo());
		dto.setPincode(u.getPincode());
		return Response.success(u);
	}
	
	//get phone no from user or nick name and then allow hi to change password
		@PutMapping("/editprofile")
		public ResponseEntity<?> edit(UserNewDto cred){
			User cust = service.findByEmail(cred.getEmail());
			HashMap<String, Object> map = new HashMap<>();
			if(cust == null) {
				map.put("status", "error");
				map.put("data", "");
				ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
				return ResponseEntity.ok(map);
			}else {
				cust.setFirstName(cred.getFirstName());
				cust.setLastName(cred.getLastName());
				cust.setMobileNo(cred.getMobileNo());
				cust.setAddress(cred.getAddress());
				cust.setCity(cred.getCity());
				cust.setPincode(cred.getPincode());
				cust.setSecurity(cred.getSecurity());
				service.save(cust);
				map.put("status", "success");
				map.put("data", cust);
				return ResponseEntity.ok(map);
			}
		}	
		
		@DeleteMapping("/deleteuser/{id}")
		public ResponseEntity<?> deleteUser(@PathVariable("id") int id){
			User user=service.deleteUser(id);
			System.out.println(user);
			return Response.success(user);
		}
}
