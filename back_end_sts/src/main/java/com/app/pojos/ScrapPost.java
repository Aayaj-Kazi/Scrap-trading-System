package com.app.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.ManyToAny;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//+----------------+--------------+------+-----+---------+-------+
//| Field          | Type         | Null | Key | Default | Extra |
//+----------------+--------------+------+-----+---------+-------+
//| scrap_id       | int          | NO   | PRI | NULL    |       |
//| user_id        | int          | NO   | MUL | NULL    |       |
//| weight         | decimal(2,0) | NO   |     | NULL    |       |
//| material_type  | varchar(45)  | NO   |     | NULL    |       |
//| uploading_date | date         | NO   |     | NULL    |       |
//| scrap_image    | varchar(100) | NO   |     | NULL    |       |
//+----------------+--------------+------+-----+---------+-------+



@Entity
@Table(name = "scrap_post")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ScrapPost extends _ScrapPostId{

	
	@NotEmpty()
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id",nullable = false)
	private User user_id;
	
	@Column
	@NotEmpty(message = "Weight can't be empty")
	private Double weight;
	
	@Column
	@NotEmpty(message = "material_type can't be empty")
	//private String material_type;
	private String material_type;
	
	@Column
	@NotEmpty()
	private Date uploading_date;
	
	
	@OneToMany(mappedBy = "scrap_id")
	//@JoinColumn(name ="bid_id",nullable = false)
	//private BidDetails bid;
	private List<BidDetails> bid_id = new ArrayList<>();
}
