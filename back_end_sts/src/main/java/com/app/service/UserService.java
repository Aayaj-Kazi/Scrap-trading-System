package com.app.service;

import java.util.List;

import com.app.pojos.ScrapPost;
import com.app.pojos.User;


public interface UserService {

	User adduser(User transientuser);
	
	
	//to get all scrappost
	 List<ScrapPost> getAllScrappost();
	 
	 //to delete post 
	 String deletePost(Integer Id);
	 
	 List<ScrapPost> getcitySP(String city);
	 
	 List<ScrapPost> getweightSP(Double weight);
	 
	 User findByUsername(String username);
}
