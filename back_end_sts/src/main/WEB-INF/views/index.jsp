<%@ page language="Java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<html>
<head>
<meta charset="UTF-8">
<title>Exam Practice</title>
</head>
<body>
	
	<h2>
		<a href="<spring:url value='/api/category/addCategory'/>">Create Category</a>
	</h2>
	<h2>
		<a href="<spring:url value='/api/employee'/>">Add employee</a>
	</h2>
	

</body>
</html>
