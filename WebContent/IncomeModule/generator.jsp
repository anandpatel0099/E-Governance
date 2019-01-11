<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%
	String token="";
	String app="";
	String applicant="";
	if(request.getAttribute("tn")!=null)
	{
		token=request.getAttribute("tn").toString();
	}
	if(request.getAttribute("app")!=null)
	{
		app=request.getAttribute("app").toString();
	}
	if(request.getAttribute("an")!=null)
	{
		applicant=request.getAttribute("an").toString();
	}
%>
<script type="text/javascript">
	function backtoLoggedin()
	{
		
	}
</script>
</head>
<body>
<h2 align="left"><b>Your request for <%=app %> has been Registered with : </b></h2>
<table>
	<tr>
		<td>Token Number</td>
		<td>:</td>
		<td><%=token %></td>
	</tr>
	<tr>
		<td>Application Name</td>
		<td>:</td>
		<td><%=app %></td>
	</tr>
	<tr>
		<td>Applicant Name</td>
		<td>:</td>
		<td><%=applicant %></td>
	</tr>
</table>
<font colour="red">Please note down the Token Number for future Use</font><br/>
<input type="button" name="OK" id="OK" value="OK" onclick="backtoLoggedin();" />
</body>
</html>