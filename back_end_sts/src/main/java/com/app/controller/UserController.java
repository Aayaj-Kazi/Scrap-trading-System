package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.app.pojos.BidDetails;
import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.Response;
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
	
	@PostMapping("/login") 
	public ResponseEntity<?> processLoginForm(User user) {
		//System.out.println("in process login form " + username + " " + password +" "+map) ;
		try {
			//@RequestParam(name="username") String username, @RequestParam(name="password") String password, Model map
			userservice.authenticateUser(user.getUsername(), user.getPassword());
			//map.addAttribute("user_info", user);	
			return Response.success(user);
			

		} catch (RuntimeException e) {
			System.out.println("err in class " + getClass() + "in  process login form " + e);
			return null; 
		}

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
	
//	@GetMapping("/getcar/{id}")
//    public ResponseEntity<?> getAllCars(@PathVariable("id") int id){
//        List<Car> list=carservice.findByCompany1(id);
//        list.forEach(System.out::println);
//        return Response.success(list);
//    }
	
	
@GetMapping("/getScrapPostById/{scrap_id}")
	public ResponseEntity<?> getScrapPostById(@PathVariable int scrap_id) {
		System.out.println("In getScrapPostById()");
		Optional<ScrapPost> post= userservice.findById(scrap_id);
		return Response.success(post);
		}
	

	@GetMapping("/logout")
	public String userLogout(HttpSession session, Model map, HttpServletRequest request, HttpServletResponse resp) {
		System.out.println("in user logout");
		map.addAttribute("user_info", session.getAttribute("user_info"));
		session.invalidate();
		resp.setHeader("refresh", "3;url="+request.getContextPath());
		return "Logged Out";
	}
	
}
