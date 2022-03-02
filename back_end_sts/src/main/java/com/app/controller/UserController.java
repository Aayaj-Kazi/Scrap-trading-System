package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.BidDetails;
import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;
import com.app.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userservice;
	
	
	
	public UserController() {				//constructor
		System.out.println("In UserController's Constructor");
	}
	
	@GetMapping("/getAllScrapPost")
	public ResponseEntity<?>  getAllScrapPostDetails(){
		System.out.println("In getAllScrapPostDetails()");
		return new ResponseEntity<> (userservice.getAllScrappost(), HttpStatus.OK);
	}
	
	@PostMapping("/addUser")
	public User adduser(@RequestBody @Valid User user) {
		return userservice.adduser(user);
	}
	
	@PostMapping("/addScrapPost")
	public ScrapPost addscrappost(@RequestBody @Valid ScrapPost scrappost) {
		return userservice.addscrappost(scrappost);
	}
	
	@PostMapping("/addBid")
	public BidDetails addbid(@RequestBody @Valid BidDetails biddetails) {
		return userservice.addbid(biddetails);
		}
	
	@PostMapping("/sendFeedback")
	public Feedback sendfeedback(@RequestBody @Valid Feedback feedback) {
		return userservice.sendfeedback(feedback);
		}
		
	@PostMapping("/sendReport")
	public Report sendreport(@RequestBody @Valid Report report) {
		return userservice.sendreport(report);
		}
	
	@DeleteMapping("/deletePost/{scrap_id}")
	public String deleteScrapPost(@PathVariable int scrap_id) {
		System.out.println("In deleteScrapPost()");
		return userservice.deletePost(scrap_id);
	}
	
//	@PostMapping("/signin")
//	public /* @ResponseBody */ ResponseEntity<?> authenticateCustomer(@RequestBody LoginRequest request) {
//		System.out.println("in auth cust " + request);
//		return ResponseEntity.ok(service.authenticateCustomer(request.getCustomerId(), request.getPassword()));
//	}
//	@PostMapping("/signin")
//	public /* @ResponseBody */ ResponseEntity<?> authenticateCustomer(@RequestBody LoginRequest request) {
//		System.out.println("in auth cust " + request);
//		return ResponseEntity.ok(userservice.authenticateUser(request.getUsername(), request.getPassword()));
//	}
//	
	
}