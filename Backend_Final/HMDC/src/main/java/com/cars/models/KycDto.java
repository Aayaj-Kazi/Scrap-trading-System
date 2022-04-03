package com.cars.models;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.cars.entities.Kyc;

public class KycDto {
	
	private MultipartFile idcard;
	private MultipartFile rcbook;
	private MultipartFile carinsurance;
	private MultipartFile drivinglicense;
	private String carnumber;
	
	public KycDto() {
		// TODO Auto-generated constructor stub
	}

	public KycDto(MultipartFile idcard, MultipartFile rcbook, MultipartFile carinsurance, MultipartFile drivinglicense,
			String carnumber) {
		super();
		this.idcard = idcard;
		this.rcbook = rcbook;
		this.carinsurance = carinsurance;
		this.drivinglicense = drivinglicense;
		this.carnumber = carnumber;
	}

	public MultipartFile getIdcard() {
		return idcard;
	}

	public void setIdcard(MultipartFile idcard) {
		this.idcard = idcard;
	}

	public MultipartFile getRcbook() {
		return rcbook;
	}

	public void setRcbook(MultipartFile rcbook) {
		this.rcbook = rcbook;
	}

	public MultipartFile getCarinsurance() {
		return carinsurance;
	}

	public void setCarinsurance(MultipartFile carinsurance) {
		this.carinsurance = carinsurance;
	}

	public MultipartFile getDrivinglicense() {
		return drivinglicense;
	}

	public void setDrivinglicense(MultipartFile drivinglicense) {
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
		return "KycDto [idcard=" + idcard + ", rcbook=" + rcbook + ", carinsurance=" + carinsurance
				+ ", drivinglicense=" + drivinglicense + ", carnumber=" + carnumber + "]";
	}

	public static Kyc toEntity(KycDto kdto) {
		Kyc k=new Kyc();
		BeanUtils.copyProperties(kdto, k);
		return k;
	}
	
	
	
}
