package com.cars.models;

public class ForgotPassworddto {
	private String email; // must be same as req param
	private String password; // must be same as req param
	private String security; // must be same as req param
	
	public ForgotPassworddto() {
	}

	public ForgotPassworddto(String email, String password, String security) {
		this.email = email;
		this.password = password;
		this.security= security;
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
	
	public String getSecurity() {
		return security;
	}

	public void setSecurity(String security) {
		this.security = security;
	}

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + "]";
	}
	
	
}