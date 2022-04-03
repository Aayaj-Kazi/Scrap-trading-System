package com.cars.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.entities.Kyc;
import com.cars.models.KycDto;

public interface KycDao extends JpaRepository<Kyc,Integer> {
}
