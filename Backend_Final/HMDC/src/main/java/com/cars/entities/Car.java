package com.cars.entities;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="car")
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="car_id")
	private int carId;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="companyId")
	private Company company;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	@Column(name="model_id")
	private int modelId;
	
	@Column(name="car_fuel_type",length = 20)
	private String fuelType;
	
	@Column(name="car_kilometer_driven")
	private int kmDriven;
	
	@Column(name="car_price")
	private double price;
	
	@Column(name="car_color",length = 20)
	private String color;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date;
	
	@Column(name="city",length = 20)
	private String city;
	
	@Column(name="is_car_active")
	private byte status=1;
	
	@Column(name="car_image",length = 100)
	private String carImage;
	
	public Car() {
		this.company=new Company();
		this.user=new User();
	}

	

	public Car(int carId, Company company, int modelId, String fuelType, int kmDriven, double price, String color,
			Date date, String city, byte status, String carImage) {
		super();
		this.carId = carId;
		this.company = company;
		this.modelId = modelId;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		this.status = status;
		this.carImage = carImage;
	}



	public Car(String city, String fuelType, int kmDriven, double price, String color, Date date) {
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		
		// To avoid Null pointer exception.
		
	}



	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
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

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public String getCarImage() {
		return carImage;
	}

	public void setCarImage(String carImage) {
		this.carImage = carImage;
	}
	
	public int getModelId() {
		return modelId;
	}



	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Car [carId=" + carId + ", company=" + company + ", modelId=" + modelId + ", fuelType=" + fuelType
				+ ", kmDriven=" + kmDriven + ", price=" + price + ", color=" + color + ", date=" + date + ", city="
				+ city + ", status=" + status + ", carImage=" + carImage + "]";
	}

	
	
	
	
}
