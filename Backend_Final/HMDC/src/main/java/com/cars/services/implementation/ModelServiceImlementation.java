package com.cars.services.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cars.daos.ModelDao;
import com.cars.entities.Model;
import com.cars.services.ModelService;

@Transactional
@Service
public class ModelServiceImlementation implements ModelService {
	
	@Autowired
	private ModelDao dao;
	
	@Override
	public Model getByModelId(int modelId) {
		Optional<Model> m=dao.findById(modelId);
		return m.orElse(null);
	}

	@Override
	public List<Model> findAllModels(int id) {
		return dao.findByCompanyId(id);
	}

	@Override
	public List<Model> getAllModels() {
		return dao.findAll();
	}

	@Override
	public Model save(Model modelEntity) {
		return dao.save(modelEntity);
	}
	
	
}
