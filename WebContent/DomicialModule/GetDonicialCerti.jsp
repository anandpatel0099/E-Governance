<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Domicial Registration</title>
<script src="javascript/CommonValidation.js" type="text/javascript"></script>
<script type="text/javascript">
</script>
<%
	String sal="";
	String gen="";
	String fn="";
	String mn="";
	String ln="";
	String dob="";
	String ph="";
	String age="";
	String mob="";
	String email="";
	String add1="";
	String add2="";
	String con="";
	String st="";
	String dis="";
	String pin="";
	
	if(request.getAttribute("sal")!=null)
	{
		sal=request.getAttribute("sal").toString();
	}
	if(request.getAttribute("gen")!=null)
	{
		gen=request.getAttribute("gen").toString();
	}
	if(request.getAttribute("fn")!=null)
	{
		fn=request.getAttribute("fn").toString();
	}
	if(request.getAttribute("mn")!=null)
	{
		mn=request.getAttribute("mn").toString();
	}
	if(request.getAttribute("ln")!=null)
	{
		ln=request.getAttribute("ln").toString();
	}
	if(request.getAttribute("dob")!=null)
	{
		dob=request.getAttribute("dob").toString();
	}
	if(request.getAttribute("ph")!=null)
	{
		ph=request.getAttribute("ph").toString();
	}
	if(request.getAttribute("age")!=null)
	{
		age=request.getAttribute("age").toString();
	}
	if(request.getAttribute("mob")!=null)
	{
		mob=request.getAttribute("mob").toString();
	}
	if(request.getAttribute("email")!=null)
	{
		email=request.getAttribute("email").toString();
	}
	if(request.getAttribute("add1")!=null)
	{
		add1=request.getAttribute("add1").toString();
	}
	if(request.getAttribute("add2")!=null)
	{
		add2=request.getAttribute("add2").toString();
	}
	if(request.getAttribute("con")!=null)
	{
		con=request.getAttribute("con").toString();
	}
	if(request.getAttribute("st")!=null)
	{
		st=request.getAttribute("st").toString();
	}
	if(request.getAttribute("dis")!=null)
	{
		dis=request.getAttribute("dis").toString();
	}
	if(request.getAttribute("pin")!=null)
	{
		pin=request.getAttribute("pin").toString();
	}

%>
<script type="text/javascript">
	function CalltoDAOConfirm()
	{
		alert("domicial");
		document.getElementById("actionval").value="GetDomicial";
		document.getElementById("domicial").submit();
	}
</script>

</head>

<body>

<form action="DomicialServlet" method="post" name="domicial" id="domicial" >
<input type="hidden" name="actionval" id="actionval" value="actionval" />
 <table width="1020" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
 	 <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#FF6633;">
		 	<span style="color:black;font-weight: bold;">Domicial Certificate </span></td>
   	</tr>
   
	<tr>
     <td height="32" colspan="9" align=left>&nbsp;&nbsp;&nbsp;<span style="color:red;font-weight: bold;">All fields marked with * are mandatory.</span></td>
   </tr>
   
	 <tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#FF6633;">
		 	<span style="color:black;font-weight: bold;">Personal Details</span></td>
   	</tr>
	<tr>
		 <td height="33">Salutation<font color="red">*</font></td>
		 <td width="" style="font-weight: bold;">:</td>
		<td><%=sal %> </td>
	 	<td></td>
		<td width=""></td>
		<td width="" height="32">Gender</td>
		 <td width="" style="font-weight: bold;">:</td>
		<td width=""><%=gen %></td>
	 	<td width=""></td>
	</tr>
	<tr>
		<td></td>
		 <td height="32">&nbsp;</td>
		 <td>First<font color="red">*</font></td>
		  <td height="32" colspan="2">Middle</td>
		  <td></td>
		  <td></td>
		   <td height="32" colspan="3">Last<font color="red">*</font></td>
	</tr>
	<tr>
		<td height="32">Name</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><%=fn %><input type="hidden" name="fn" id="fn" value='<%=fn %>' /></td>
		<td colspan="2"><%=mn %></td>
		<td></td>
	 	<td></td>
	  	<td><%=ln %><input type="hidden" name="ln" id="ln" value='<%=ln %>' /></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="" height="32">Date of Birth<font color="red">*</font></td>
		<td width="" style="font-weight: bold;">:</td>
		<td><%=dob %></td>
		<td width="" height="32">Age<font color="red">*</font></td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><%=age %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="" height="32">Phone No.</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><%=ph %></td>
		<td width="" height="32">Mobile</td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><%=mob %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="" height="32">Email ID</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><%=email %></td>
		<td colspan="6"></td>
	</tr>
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#FF6633;">
		 	<span style="color:black;font-weight: bold;">Present Address</span></td>
   	</tr>
	<tr>
		 <td width="" height="32">Address Line - 1<font color="red">*</font></td>
	 	<td width="" style="font-weight: bold;">:</td>
	 	<td width=""><%=add1 %></td>
	 	<td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td width="" height="32">Address Line - 2</td>
		 <td width="" style="font-weight: bold;">:</td>
		 <td width=""><%=add2 %></td>
		 <td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
			 <td width="" height="32">Country<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><%=con %></td>
		    <td width="" height="32">State<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><%=st %></td>
		   <td></td>
	</tr>
	<tr>
			 <td width="" height="32">District<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><%=dis %></td>
		   <td width="" height="32">Pincode<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><%=pin %></td>
			<td></td>
	</tr>

	<tr>
   		<td colspan="9" align="center"><input type="button" name="Submit" id="Submit" value="Submit" onclick="CalltoDAOConfirm();"/></td>
   		<td colspan="9" align="center"><input type="reset" name="Reset" id="Reset" value="Reset" /></td>
   </tr>
</table>
</form>

</body>

</html>
