package com.cars.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="user")
public class User {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private int userId;
	@Column(name = "first_name",length=20)
	private String firstName;
	@Column(name = "last_name",length=20)
	private String lastName;
	
	
	@Size(max = 10,min=10)
	@Column(name = "mobile_no",length=10)
	private String mobileNo;
	@Column(length=30)
	private String email;
	
	@Size(min=8)
	@Column(length=50)
	private String password;
	@Column(length=100)
	private String address;
	@Column(length=20)
	private String city;
	private int pincode;
	@Column(name="security_code",length=10)
	private String security;
	//by  default set static value 
	@Column (length=10)
	private String role="customer";
	//Change role="admin" to save the user as Admin in dB.
	@Column(name = "is_user_active")
	private byte status=1;
	
	@JsonManagedReference
	@OneToMany(mappedBy="user", cascade = CascadeType.ALL)
	private List<Car> carList;
	
	public User() {
		carList=new ArrayList<Car>();
	}


	public User(int userId, String firstName, String lastName, String mobileNo, String email, String password,
			String address, String city, int pincode, String security, String role, byte status) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
		this.security = security;
		this.role = role;
		this.status = status;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
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


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public byte getStatus() {
		return status;
	}


	public void setStatus(byte status) {
		this.status = status;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", mobileNo="
				+ mobileNo + ", email=" + email + ", password=" + password + ", address=" + address + ", city=" + city
				+ ", pincode=" + pincode + ", security=" + security + ", role=" + role + ", status=" + status
				+ ", carList=" + carList + "]";
	}


}
