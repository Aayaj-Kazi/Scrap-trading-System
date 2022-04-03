package com.cars.services;

import com.cars.entities.Kyc;
import com.cars.models.KycDto;

public interface KycService {
	Kyc postKyc(KycDto kdto);

	int getKyc();
}
