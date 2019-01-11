<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript">
	function BackToHomePage()
	{
		alert("BackToHomePage");
		document.getElementById("actionval").value="BackToHomePage";
		alert("2");
		document.getElementById("form5").submit();
		alert("3");
	}
</script>

<%
	String newpwd="";
	if(request.getAttribute("newpwd")!=null)
	{
		newpwd = request.getAttribute("newpwd").toString();
	}
%>
</head>
<body>
	<form action="login" method="post" name="form5" id="form5">
		<input type="hidden" name="actionval" id="actionval" value="actionval" />
		your new password is : <b><%=newpwd %></b><br/>
		<input type="button" name="OK" value="OK" id="OK" onclick="BackToHomePage();" />
	</form>
</body>
</html>