<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Scrap Treading System</title>
</head>
<body>
	<h3>in Index.jsp</h3>
	<h3>
		<a href="<spring:url value='/user/login'/>">User Login</a>
	</h3>
	<h3>
		<a href="<spring:url value='/products'/>">Test ResponseBody Annotation</a>
	</h3>
	<h3>
		<a href="<spring:url value='/products/123/oil/200/2022-05-12'/>">Test PathVariable Annotation</a>
	</h3>

</body>
</html>