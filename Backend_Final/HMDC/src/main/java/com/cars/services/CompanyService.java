package com.cars.services;

import java.util.List;

import com.cars.entities.Company;
public interface CompanyService {
	List<Company> findAllCompanies();
	Company save(Company Company);
	Company findById(int id);
	Company getByCompanyId(int companyId);
}
