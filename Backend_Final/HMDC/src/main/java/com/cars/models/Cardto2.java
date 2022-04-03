package com.cars.models;
import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.cars.entities.Car;

public class Cardto2 {
	private int carId;
	private int userId;
	private String modelName;
	private String companyName;
	private String fuelType;
	private int kmDriven;
	private double price;
	private String color;
	private Date date;
	private String city;
	private String carImage;
	private String status;
	
	public Cardto2() {
	}

	public Cardto2(int carId,int userId, String modelName, String companyName, String fuelType, int kmDriven, double price,
			String color, Date date, String city, String carImage, String status) {
		super();
		this.carId=carId;
		this.userId = userId;
		this.modelName = modelName;
		this.companyName = companyName;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		this.carImage = carImage;
		this.status = status;
	}
	
	public Cardto2(int carId, String fuelType, int kmDriven, double price,String color, Date date, String city) {
		this.carId=carId;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
	}
	
	public int getUserId() {
		return userId;
	}







	public void setUserId(int userId) {
		this.userId = userId;
	}







	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getModelName() {
		return modelName;
	}



	public void setModelName(String modelName) {
		this.modelName = modelName;
	}



	public String getCompanyName() {
		return companyName;
	}



	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}



	public String getFuelType() {
		return fuelType;
	}



	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}



	public int getKmDriven() {
		return kmDriven;
	}



	public void setKmDriven(int kmDriven) {
		this.kmDriven = kmDriven;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public String getColor() {
		return color;
	}



	public void setColor(String color) {
		this.color = color;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getCarImage() {
		return carImage;
	}



	public void setCarImage(String carImage) {
		this.carImage = carImage;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public static Cardto2 ToDto(Car c) {
		Cardto2 cardto=new Cardto2();
		int var=c.getStatus();
		
		if (var==1)
			cardto.setStatus("Available");
		else
			cardto.setStatus("Unavailable");
		
		BeanUtils.copyProperties(c, cardto);
		return cardto;
	}







	@Override
	public String toString() {
		return "Cardto2 [carId=" + carId + ", userId=" + userId + ", modelName=" + modelName + ", companyName="
				+ companyName + ", fuelType=" + fuelType + ", kmDriven=" + kmDriven + ", price=" + price + ", color="
				+ color + ", date=" + date + ", city=" + city + ", carImage=" + carImage + ", status=" + status + "]";
	}
	
	
}
