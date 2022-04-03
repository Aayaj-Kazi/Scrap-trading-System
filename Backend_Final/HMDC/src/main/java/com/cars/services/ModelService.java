package com.cars.services;

import java.util.List;

import com.cars.entities.Model;

public interface ModelService {
	Model getByModelId(int modelId);
	List<Model> findAllModels(int id);
	List<Model> getAllModels();
	Model save(Model modelEntity);
}
