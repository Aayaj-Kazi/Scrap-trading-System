package com.app.service;

import java.util.List;

import com.app.pojos.ScrapPost;


public interface UserService {

	//to get all scrappost
	 List<ScrapPost> getAllScrappost();
	 
	 //to delete post 
	 String deletePost(Integer Id);
	 
	 
}
