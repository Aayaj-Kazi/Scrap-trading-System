package com.cars.services.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cars.daos.UserDao;
import com.cars.entities.User;
import com.cars.services.UserService;

@Service
@Transactional
public class UserServiceImplementation implements UserService {	
	@Autowired
	private UserDao dao;
	
	@Override
	public User findByEmail(String email) {
		return dao.findByEmail(email);
	}

	@Override
	public User save(User user) {
//		String encPassword = passwordEncoder.encode(user.getPassword());
//		user.setPassword(encPassword);
		return dao.save(user);
	}

	@Override
	public User authenticate(String email, String password) {
		
//		User user = findByEmail(email);
//		if(user != null && passwordEncoder.matches(password, user.getPassword()))
//			return user;
//		return null;
		
		User user=this.findByEmail(email);
		System.out.println(user);
		if(user!=null) {
			if(user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
	}
	
	@Override
	public User forgotPassword(String email,String password,String security) {
		
//		User user=dao.findByEmail(email);
//		System.out.println("forgot object "+user);
//		if(user.getSecurity().equals(security)) {
//			
//			String encPassword = passwordEncoder.encode(user.getPassword());
//			user.setPassword(encPassword);
//			dao.save(user);
//			return user;
//		}			
//		else
//			return null;	
		
		
		User user=dao.findByEmail(email);
		System.out.println("forgot object "+user);
		if(user.getSecurity().equals(security)) {
			user.setPassword(password);
			dao.save(user);
			return user;
		}			
		else
			return null;	
	}

	@Override
	public User findUser(int userId) {
		// TODO Auto-generated method stub
		Optional<User> user = dao.findById(userId);
		return user.orElse(null);
	}

	@Override
	public List<User> finAllUsers() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public User deleteUser(int id) {
		User u=this.findUser(id);
		dao.deleteById(id);
		return u;
	}
}
