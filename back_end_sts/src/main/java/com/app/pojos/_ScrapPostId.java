package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class _ScrapPostId {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer scrap_id;
	
}
