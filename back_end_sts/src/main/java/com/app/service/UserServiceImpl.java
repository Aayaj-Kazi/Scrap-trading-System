package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ScrapRepository;
import com.app.pojos.ScrapPost;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private  ScrapRepository scrapRepo;
	
	@Override
	public List<ScrapPost> getAllScrappost() {
		
		return scrapRepo.findAll();    // to get all scrapPost
	}

	@Override
	public String deletePost(Integer Id) {
		scrapRepo.deleteById(Id);
		return "ScrapPost of ID "+Id +"Deleted Succesfully" ;    //delete post uploaded by same user
	}

}
