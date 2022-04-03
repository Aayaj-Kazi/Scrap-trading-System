package com.cars.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="car_model")
public class Model {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int modelId;
	
	@Column(name="model_name",length=20)
	private String modelName;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="companyId")
	private Company company;
	
	public Model() {
	
	}

	public Model(int modelId, String modelName) {
		super();
		this.modelId = modelId;
		this.modelName = modelName;
	}

	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Model [modelId=" + modelId + ", modelName=" + modelName + ", company=" + company + "]";
	}

	
	
	
	
}
