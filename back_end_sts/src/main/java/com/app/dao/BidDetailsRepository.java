package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.BidDetails;



public interface BidDetailsRepository extends JpaRepository<BidDetails, Integer>{

	//BidDetails addbid(BidDetails biddetails);
}