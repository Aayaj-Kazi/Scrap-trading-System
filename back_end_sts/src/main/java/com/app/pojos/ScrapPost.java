package com.app.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.ManyToAny;

//+----------------+--------------+------+-----+---------+-------+
//| Field          | Type         | Null | Key | Default | Extra |
//+----------------+--------------+------+-----+---------+-------+
//| scrap_id       | int          | NO   | PRI | NULL    |       |
//| user_id        | int          | YES  | MUL | NULL    |       |
//| weight         | decimal(2,0) | YES  |     | NULL    |       |
//| material_type  | varchar(45)  | YES  |     | NULL    |       |
//| uploading_date | date         | YES  |     | NULL    |       |
//+----------------+--------------+------+-----+---------+-------+



@Entity
@Table(name = "scrap_post")
public class ScrapPost extends BaseEntity{

	
	@NotEmpty()
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column
	@NotEmpty(message = "Weight can't be empty")
	private Double weight;
	
	@Column
	@NotEmpty(message = "material_type can't be empty")
	private String material_type;
	
	@Column
	@NotEmpty()
	private Date uploading_date;
	
	//maybe bid id forengmn key to add later idk not sure
}
