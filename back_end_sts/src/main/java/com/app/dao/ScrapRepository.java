package com.app.dao;

import java.time.LocalDate;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.ScrapPost;
@Repository
public interface ScrapRepository extends JpaRepository<ScrapPost, Integer> {

		//find all scrapost by specific weight
		List<ScrapPost> findByWeight(Double weight);
	
		//find all scrapost by specific material
		List<ScrapPost> findByMaterialType(String materialType);
		
		//find all scrapost by uploading date	
		List<ScrapPost> findByUploadingDate(LocalDate uploadingDate);
		
		//find all scrapost by location/city
		List<ScrapPost> findByCity(String city);
		
		//		//Sort all scrap from specific dept as per salary
//		List<ScrapPost> findByDeptOrderBySalary(String deptId);

//		//Display name n lastName of scrap from a specific dept. : custom query with constr expression\
//		@Query("select new com.app.pojos.ScrapPost(name,lastName)  from ScrapPost e where e.dept=?1")
//		List<ScrapPost> getEmpFullNamesByDept(String department);//method name can be any thing since it's custom query method
//	
		}

