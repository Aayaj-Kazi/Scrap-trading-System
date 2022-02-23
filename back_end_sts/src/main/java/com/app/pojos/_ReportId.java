package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class _ReportId {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer report_id;
	
}
