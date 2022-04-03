package com.cars.services.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cars.daos.CompanyDao;
import com.cars.entities.Company;
import com.cars.services.CompanyService;


@Service
@Transactional
public class CompanyServiceImplementation implements CompanyService {
	
	@Autowired
	private CompanyDao dao;
	
	@Override
	public Company save(Company company) {
		return dao.save(company);
	}

	@Override
	public List<Company> findAllCompanies() {
		return dao.findAll();
	}

	

	@Override
	public Company findById(int id) {
		// TODO Auto-generated method stub
		Optional<Company> c=dao.findById(id);
		return c.orElse(null);
	}

	@Override
	public Company getByCompanyId(int companyId) {
		 Optional<Company> c = dao.findById(companyId);
		 return c.orElse(null);
	}

	

	
}
