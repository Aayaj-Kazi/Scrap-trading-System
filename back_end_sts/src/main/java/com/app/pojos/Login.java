package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//+----------+-------------+------+-----+---------+-------+
//| Field    | Type        | Null | Key | Default | Extra |
//+----------+-------------+------+-----+---------+-------+
//| login_id | int         | NO   | PRI | NULL    |       |
//| username | varchar(45) | NO   |     | NULL    |       |
//| password | varchar(45) | NO   |     | NULL    |       |
//+----------+-------------+------+-----+---------+-------+

@Entity
@Table (name ="login")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Login extends _LoginId{

	@Column
	@NotEmpty(message = "username can't be empty!!!")
	@Length(min = 5,max = 45,message = "Invalid username Length input")
	private String username;
	
	@Column
	@Length(min = 5,max = 45,message = "Invalid password Length input")
	@NotEmpty(message = "password can't be empty!!!")
	private String password;
}
