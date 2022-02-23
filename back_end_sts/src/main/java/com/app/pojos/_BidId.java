package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class _BidId {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Bid_id;
	
}
