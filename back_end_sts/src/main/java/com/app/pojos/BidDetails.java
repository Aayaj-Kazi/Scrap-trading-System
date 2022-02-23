package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



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
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BidDetails extends _BidId {

	@Column
	@JoinColumn(name = "scrap_id", nullable = false)
	private ScrapPost scrap_id;
	
	@Column
	@JoinColumn(name = "user_id", nullable = false)
	private User user_id;
	
	@Column
	private Double bid_amt;
}
