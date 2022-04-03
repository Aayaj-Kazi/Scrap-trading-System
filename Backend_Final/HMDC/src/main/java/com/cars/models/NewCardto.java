package com.cars.models;

import java.util.Date;
import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import com.cars.entities.Car;

public class NewCardto {
	
//	private String companyName;
	private int modelId;
	private int companyId;
	private int userId;
	private String fuelType;
	private int kmDriven;
	private double price;
	private String color;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private String city;
	private MultipartFile carImage;
	
	public NewCardto() {
	}

	public NewCardto(int userId,int modelId, int companyId, String fuelType, int kmDriven, double price, String color, Date date,
			String city, MultipartFile carImage) {
		super();
		this.userId=userId;
		this.modelId = modelId;
		this.companyId = companyId;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		this.carImage = carImage;
	}
	
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
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

	public MultipartFile getCarImage() {
		return carImage;
	}

	public void setCarImage(MultipartFile carImage) {
		this.carImage = carImage;
	}
	
	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	
	@Override
	public String toString() {
		return "NewCardto [modelId=" + modelId + ", companyId=" + companyId + ", userId=" + userId + ", fuelType="
				+ fuelType + ", kmDriven=" + kmDriven + ", price=" + price + ", color=" + color + ", date=" + date
				+ ", city=" + city + ", carImage=" + carImage + "]";
	}

	public static Car toCarEntity(NewCardto cardto) {
		Car c=new Car();
		BeanUtils.copyProperties(cardto, c ,"carImage");
		return c;
	}



}
