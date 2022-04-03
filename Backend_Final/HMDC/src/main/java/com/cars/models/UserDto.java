package com.cars.models;


import org.springframework.beans.BeanUtils;

import com.cars.entities.User;

public class UserDto {
	
	private int id;
	private String firstName;
	private String lastName;
	private String mobileNo;
	private String email;
	private String password;
	private String address;
	private String city;
	private int pincode;
	private String security;
	
	public UserDto() {
		
	}
	
	public UserDto(int id, String firstName, String lastName, String mobileNo, String email, String password,
			String address, String city, int pincode, String security) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
		this.security = security;
	}


	public UserDto( String firstName, String lastName, String mobileNo, String email, String password,
			String address, String city, int pincode, String security) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
		this.security = security;
	}



	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getPincode() {
		return pincode;
	}


	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public String getSecurity() {
		return security;
	}


	public void setSecurity(String security) {
		this.security = security;
	}
	
	

	@Override
	public String toString() {
		return "CustomerDto [firstName=" + firstName + ", lastName=" + lastName + ", mobileNo=" + mobileNo + ", email="
				+ email + ", password=" + password + ", address=" + address + ", city=" + city + ", pincode=" + pincode
				+ ", security=" + security + "]";
	}


	public static User toEntity(UserDto dto) {
		User c=new User();
		BeanUtils.copyProperties(dto, c);
		return c;
	}

	public static UserDto fromEntity(User newCust) {
		UserDto dto=new UserDto();
		BeanUtils.copyProperties(newCust, dto);
		return dto;
	}
}
