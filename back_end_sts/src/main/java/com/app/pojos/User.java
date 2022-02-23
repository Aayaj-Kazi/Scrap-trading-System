package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//+-------------+--------------+------+-----+---------+-------+
//| Field       | Type         | Null | Key | Default | Extra |
//+-------------+--------------+------+-----+---------+-------+
//| user_id     | int          | NO   | PRI | NULL    |       |
//| fullname_us | varchar(45)  | NO   |     | NULL    |       |
//| email_us    | varchar(45)  | NO   |     | NULL    |       |
//| contact_us  | int          | NO   |     | NULL    |       |
//| addressl    | varchar(100) | NO   |     | NULL    |       |
//| login_id    | int          | NO   | MUL | NULL    |       |
//+-------------+--------------+------+-----+---------+-------+
//  scrap_id       int

@Entity
@Table (name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User extends _UserId{

	@NotEmpty (message = "Full Name can't be Empty!!!")
	@Length(min = 5,max = 40, message = "Invalid Name Lenght" )
	@Column
	private String fullname_us;
	
	@NotEmpty (message = "Email can't be Empty!!!")
	@Length(min = 5,max = 40, message = "Invalid Email Lenght" )
	@Column
	private String email_us;
	
	@NotEmpty (message = "Mobile number can't be Empty!!!")
	@Length(min = 10, max = 15,message = "Enter valid mobile number")
	private Integer contact_us;
	
	@NotEmpty (message = "Address can't be Empty!!!")
	@Length(min = 5,max = 100, message = "Enter full address" )
	@Column
	private String address;
	
	@OneToMany(mappedBy = "user_id",cascade = CascadeType.ALL)
	//@JoinColumn(name = "scrap_id")
	//private ScrapPost scrap;
	private List<ScrapPost> scrap_id =new ArrayList<>();
	
	@OneToMany(mappedBy = "user_id" )
	//@JoinColumn(name ="bid_id")
	//private BidDetails bid;
	private List<BidDetails> bid_id = new ArrayList<>();
	
	
	@OneToOne				//(mappedBy = "user" )
	@JoinColumn(name ="login_id")
	private Login login_id;
}
