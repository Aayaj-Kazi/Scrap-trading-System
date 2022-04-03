package com.cars.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="kyc")
public class Kyc {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="kyc_id")
	private int kycId;
	
	@Column(name="id_card")
	private String idcard;
	@Column(name="rc_book")
	private String rcbook;
	@Column(name="car_insurance")
	private String carinsurance;
	@Column(name="driving_license")
	private String drivinglicense;
	@Column(name="car_number")
	private String carnumber;
	
	public Kyc() {
	}
	
	
	public Kyc(int kycId, String idcard, String rcbook, String carinsurance, String drivinglicense, String carnumber) {
		super();
		this.kycId = kycId;
		this.idcard = idcard;
		this.rcbook = rcbook;
		this.carinsurance = carinsurance;
		this.drivinglicense = drivinglicense;
		this.carnumber = carnumber;
	}


	public Kyc( String idcard, String rcbook, String carinsurance, String drivinglicense, String carnumber) {
		
		this.idcard = idcard;
		this.rcbook = rcbook;
		this.carinsurance = carinsurance;
		this.drivinglicense = drivinglicense;
		this.carnumber = carnumber;
	}


	public int getKycId() {
		return kycId;
	}


	public void setKycId(int kycId) {
		this.kycId = kycId;
	}


	public String getIdcard() {
		return idcard;
	}


	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}


	public String getRcbook() {
		return rcbook;
	}


	public void setRcbook(String rcbook) {
		this.rcbook = rcbook;
	}


	public String getCarinsurance() {
		return carinsurance;
	}


	public void setCarinsurance(String carinsurance) {
		this.carinsurance = carinsurance;
	}


	public String getDrivinglicense() {
		return drivinglicense;
	}


	public void setDrivinglicense(String drivinglicense) {
		this.drivinglicense = drivinglicense;
	}


	public String getCarnumber() {
		return carnumber;
	}


	public void setCarnumber(String carnumber) {
		this.carnumber = carnumber;
	}


	@Override
	public String toString() {
		return "Kyc [kycId=" + kycId + ", idcard=" + idcard + ", rcbook=" + rcbook + ", carinsurance=" + carinsurance
				+ ", drivinglicense=" + drivinglicense + ", carnumber=" + carnumber + "]";
	}
	
	
	
	
}
