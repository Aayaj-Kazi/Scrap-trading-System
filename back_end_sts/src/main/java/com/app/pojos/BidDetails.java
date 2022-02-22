package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;



//+----------+--------------+------+-----+---------+-------+
//| Field    | Type         | Null | Key | Default | Extra |
//+----------+--------------+------+-----+---------+-------+
//| scrap_id | int          | NO   | PRI | NULL    |       |
//| user_id  | int          | YES  | MUL | NULL    |       |
//| bid_amt  | decimal(5,0) | YES  |     | NULL    |       |
//+----------+--------------+------+-----+---------+-------+
// bid_id

@Entity
@Table(name = "bid_details")
public class BidDetails extends BaseEntity {

	@Column
	@JoinColumn(name = "scrap_id", nullable = false)
	private ScrapPost scrap;
	
	@Column
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column
	private Double bid_amt;
}
