package com.cars.controllers;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.cars.utils.StorageService;

@CrossOrigin
@Controller
public class FileControllerImpl {
	@Autowired
	private StorageService storageService;
	
	
	@RequestMapping("/upload")
	public String upload(@RequestParam("uploadFile") MultipartFile file, Model model) {
		String name = file.getOriginalFilename();
		model.addAttribute("name", name);
		model.addAttribute("size", file.getSize());
		model.addAttribute("type", file.getContentType());
		//file.getBytes() or file.getInputStream()
		try(FileOutputStream out = new FileOutputStream("C:/Users/Shubham/Desktop/uploads/destination/"+name)) {
			FileCopyUtils.copy(file.getInputStream(), out);
			model.addAttribute("status", "Success");
		}catch (Exception e) {
			e.printStackTrace();
			model.addAttribute("status", "Failed");
		}
		return "info";
	}
	
	
	@RequestMapping(value="/{fileName}", produces = "image/*")
	public void download(@PathVariable("fileName") String fileName, HttpServletResponse resp) {
		System.out.println("Loading file: " + fileName);
		Resource resource = storageService.load(fileName);
		if(resource != null) {
			try(InputStream in = resource.getInputStream()) {
				ServletOutputStream out = resp.getOutputStream();
				FileCopyUtils.copy(in, out);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}

