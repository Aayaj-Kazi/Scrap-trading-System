package com.app.service;

import java.util.List;

import com.app.pojos.ScrapPost;


public interface UserService {

	//to get all scrappost
	 List<ScrapPost> getallScrappost();
	 
	 //to delete post 
	 void deletepost(Integer Id);
	 
	 
}
