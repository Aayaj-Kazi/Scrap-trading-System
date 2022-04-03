package com.cars.models;

import org.springframework.beans.BeanUtils;

import com.cars.entities.Company;


public class Companydto {
	private int id;
	private String name;
	
	
	
	public Companydto(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "Companydto [id=" + id + ", name=" + name + "]";
	}
	public static Company toCompanyEntity(Companydto cdto) {
		Company c=new Company();
		// Copy from Companydto POJO to Company c POJO
		//Using BeanUtils.copyProperties of Springframework.bean
		//Separate Entity and dto
		BeanUtils.copyProperties(cdto, c);
		return c;
	}
	
}
