<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="javascript/CommonValidation.js" type="text/javascript"></script>
<script type="text/javascript">
	function MainUserScreen()
	{
		alert("press ok to continue");
		var md5pwd = MD5(document.getElementById("pwd").value);
		
		alert("1 ------>" + md5pwd);
		document.getElementById("pwd").value=md5pwd;
		alert("2");
		document.getElementById("conpwd").value=md5pwd;
		
		document.getElementById("actionval").value="MainUserScreen";
		document.getElementById("form6").submit();
	}
</script>
<%
	String msg="";
	if(request.getAttribute("message")!=null)
	{
		msg=request.getAttribute("message").toString();
	}
	String un="";
	if(request.getAttribute("un")!=null)
	{
		un=request.getAttribute("un").toString();
	}
%>
</head>

<body>
<form action="login" method="post" name="form6" id="form6">
	<input type="hidden" name="actionval" id="actionval" value="actionval" />
	<input type="hidden" name="un" id="un" value=<%=un %> />
	<%=msg %><br/>
	<table>
	<tr>
		<td>User Name</td>
		<td> : </td>
		<td><%=un %></td>
	</tr>
	<tr>
		<td>New Password</td>
		<td> : </td>
		<td><input type="text" name="pwd" id="pwd" /></td>
	</tr>
	<tr>
		<td>Confirm Password</td> 
		<td> : </td>
		<td><input type="text" name="conpwd" id="conpwd" /></td>
	</tr>
	</table>
	<input type="button" name="OK" id="OK" value="OK" onclick="MainUserScreen();" />
</form>

</body>
</html>