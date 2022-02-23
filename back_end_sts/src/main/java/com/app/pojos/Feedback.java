package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//+-------------+--------------+------+-----+---------+-------+
//| Field       | Type         | Null | Key | Default | Extra |
//+-------------+--------------+------+-----+---------+-------+
//| feedback_id | int          | NO   | PRI | NULL    |       |
//| user_id      | int          | NO   | MUL | NULL    |       |
//| description | varchar(150) | NO   |     | NULL    |       |
//+-------------+--------------+------+-----+---------+-------+

//@Entity
@Table(name = "feedback")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Feedback extends _FeedbackId{

	@JoinColumn(name = "user_id",nullable = false)
	private User user;
	
	@Column(length = 150)
	private String description;
}
