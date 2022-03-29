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
<h3>Hello , ${sessionScope.user_info.fullname} , Login Successful !</h3>
	<h3>in getAllScrapPost.jsp</h3>
	<h3>
		<a href="<spring:url value='/user/addBid'/>">Bid</a>
		<a href="<spring:url value='/user/logout'/>">Logout</a>
	</h3>
	

</body>
</html>