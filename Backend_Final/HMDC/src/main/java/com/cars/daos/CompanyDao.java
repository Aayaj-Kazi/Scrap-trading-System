package com.cars.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.entities.Company;

public interface CompanyDao extends JpaRepository<Company, Integer> {

}
