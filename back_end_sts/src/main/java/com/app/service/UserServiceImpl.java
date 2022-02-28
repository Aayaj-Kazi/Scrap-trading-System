package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ScrapRepository;
import com.app.dao.UserRepository;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private  ScrapRepository scrapRepo;
	
	@Autowired
	private UserRepository userRepo;
	
		
	@Override
	public List<ScrapPost> getAllScrappost() {
		
		return scrapRepo.findAll();    // to get all scrapPost
	}

	@Override
	public String deletePost(Integer Id) {
		scrapRepo.deleteById(Id);
		return "ScrapPost of ID "+Id +"Deleted Succesfully" ;    //delete post uploaded by same user
	}

	@Override
	public User adduser(User tuser) {				//transient user=tuser
		return userRepo.save(tuser);
	}

	

	@Override
	public List<ScrapPost> getcitySP(String city) {
		return scrapRepo.findByCity(city);
	}

	@Override
	public List<ScrapPost> getweightSP(Double weight) {
		
		return scrapRepo.findByWeight(weight);
	}

	@Override
	public User findByUsername(String username) {
		
		return  userRepo.findByUsername(username);
	}

	

}
