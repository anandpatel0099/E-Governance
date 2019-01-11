<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%
	String un="";
	if(request.getAttribute("un")!=null)
	{
		un=request.getAttribute("un").toString();
	}
%>
<script type="text/javascript">
	function BackToHomePage()
	{
		alert("BackToHomePage");
		document.getElementById("actionval").value="BackToHomePage";
		document.getElementById("form4").submit();
	}
</script>
</head>
<body>
	<form action="login" method = "post" name="form4" id="form4">
	<input type="hidden" name="actionval" id="actionval" value="actionval" />
	Registration Sucessfull with username : <b><%=un %></b><br/>
	
	<input type="button" name="OK" id="OK" value="OK" onclick="BackToHomePage();" />
	</form>
</body>
</html>