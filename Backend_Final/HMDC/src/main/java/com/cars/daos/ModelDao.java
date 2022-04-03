package com.cars.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.entities.Model;

public interface ModelDao extends JpaRepository<Model, Integer> {

	List<Model> findByCompanyId(int id);

	Model findByCompanyIdAndModelId(int id, int modelId);
	
}
