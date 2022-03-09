<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%--importing spring supplied JSP Tag lib --%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
<head>
<meta charset="UTF-8">
<title>Exam Practice Employee</title>
</head>
<body>
<spring:url var="url" value="/api/employee"/>
<form action="${url}" method="post">
<table>
	<tr>	<td>Name: 		</td> <td><input type="text" value="name" Name="name"/></td> </tr>
	<tr>	<td>Category:	</td> <td><input type="text" value="category" Name="category"/></td> </tr>
	<tr>	<td>DoB:		</td> <td><input type="text" value="dob" Name="dob"/></td> </tr>
	<tr>	<td>Address: 	</td> <td><input type="text" value="address" Name="address"/></td> </tr>
	<tr> Register<input type="submit" value="submit" Name="submit"/> <tr>
</table>
</form>
</body>
</html>