package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

	@NoArgsConstructor
	@AllArgsConstructor
	@Data

	public class Bank extends BaseEntity {

	    @Column(length=30)
	    private String bank_name;
	    @Column(length=30)
	    private String branch;
	    @OneToMany(cascade = { CascadeType.MERGE,CascadeType.REFRESH,CascadeType.PERSIST,CascadeType.DETACH})
	    @JoinColumn(name="bank_id")
	    private List<Bank> customer;
}
