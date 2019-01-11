<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript">
function ForgotPwd()
{
	alert("1");
	document.getElementById("actionval").value="ForgotPwd";	
	alert("2");
	document.getElementById("form3").submit();
	alert("3");
}
</script>
<%
String error="";
if(request.getAttribute("msg3")!=null)
{
	error=request.getAttribute("msg3").toString();
}
if(request.getAttribute("error")!=null)
{
	error=request.getAttribute("error").toString();
}
if(request.getAttribute("msg1")!=null)
{
	error=request.getAttribute("msg1").toString();
}
%>

<title>Insert title here</title>
</head>
<body>
<form action="login" method="post" name="form3" id="form3">
<input type="hidden" name="actionval" id="actionval" value="actionval" />
<%=error %>
	<table>
			<tr>
				<td>Username</td>
				<td>:</td>
				<td><input type="text" name="un" id="un"/></td>
			</tr>
			<tr>
				<td>Date of Birth</td>
				<td>:</td>
				<td><input type="text" name="dob" id="dob"/></td>
			</tr>
			<tr>
				<td>Security question</td>
				<td>:</td>
     			<td><select id="secque" name="secque" type="select-one">
       				<option value="-1">-- Select --</option>
      				<option value="2978">Which place do you like the most?</option>
       				<option value="1628">What is your Lucky No.?</option>
       				<option value="2564">Who is your favorite actor? </option>
       				<option value="2102">What was your primary school?</option>
       				<option value="2103">What is your pet name? </option>
     				</select></td>
   			</tr>
			<tr>
				<td>Answer</td>
				<td>:</td>
				<td><input type="text" name="ans" id="ans"/></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="button" name="Submit" id="Submit" value="Submit" onclick="ForgotPwd();"/></td>
				<td></td>
			</tr>
			
	</table>
</form>
</body>
</html>