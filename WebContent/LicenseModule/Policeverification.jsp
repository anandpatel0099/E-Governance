<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Police verification Report</title>
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
		alert("FireArm License");
		document.getElementById("FireArm License").action="LicenseServlet";
		document.getElementById("FireArm License").method="post";
		document.getElementById("actionval").value="CalltoDAOConfirm";
		document.getElementById("FireArm License").submit();
	}
</script>

</head>

<body>
 	<form name="firearm" id="firearm">
	<input type="hidden" name="actionval" id="actionval" value="actionval" />
	<table width="956" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
    <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:black;font-weight: bold;">Police Verification Report</span></td>
   	</tr>
   	<tr>
    
     <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:">
		 	<span style="color:black;font-weight: bold;"></span></td>
   </tr>
   
    <tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:#048dc6;font-weight: bold;">Personal Details</span></td>
   	</tr>
	<tr>
		 <td height="33">Salutation</td>
		 <td width="17" style="font-weight: bold;">:</td>
		<td><%=sal %> </td>
	 	<td></td>
		<td width="17"></td>
		<td width="115" height="32">Gender</td>
		 <td width="17" style="font-weight: bold;">:</td>
		<td width="88"><%=gen %></td>
	 	<td width="100"></td>
	</tr>
	<tr>
		<td></td>
		 <td height="32">&nbsp;</td>
		 <td>First</td>
		  <td height="32" colspan="2">Middle</td>
		  <td></td>
		  <td></td>
		   <td height="32" colspan="2">Last</td>
	</tr>
	<tr>
		<td height="32">Name</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fn %><input type="hidden" name="fn" id="fn" value='<%=fn %>' /></td>
		<td colspan="2"><%=mn %></td>
		<td></td>
	 	<td></td>
	  	<td><%=ln %><input type="hidden" name="ln" id="ln" value='<%=ln %>' /></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=dob %></td>
		<td width="144" height="32">Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td colspan="2"><%=age %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="276" height="32">Phone No.</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=ph %></td>
		<td width="144" height="32">Mobile</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td colspan="2"><%=mob %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="276" height="32">Email ID</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=email %></td>
		<td colspan="6"></td>
	</tr>
    <tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Present Address</span></td>
   	</tr>
	<tr>
		 <td width="276" height="32">Address Line - 1</td>
	 	<td width="17" style="font-weight: bold;">:</td>
	 	<td width="91"><%=add1 %></td>
	 	<td width="144"></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td width="276" height="32">Address Line - 2</td>
		 <td width="17" style="font-weight: bold;">:</td>
		 <td width="91"><%=add2 %></td>
		 <td width="144"></td>
		<td colspan="5"></td>
	</tr>
	<tr>
			 <td width="276" height="32">Country</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td width="91"><%=con %></td>
		    <td width="144" height="32">State</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td colspan="3"><%=st %></td>
		   <td></td>
	</tr>
	<tr>
			 <td width="276" height="32">District</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td width="91"><%=dis %></td>
		   <td width="144" height="32">Pincode</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td colspan="3"><%=pin %></td>
			<td></td>
	</tr>
<tr>
		<td width="276" height="32">PART 'B': Other particulars :</td>
</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td width="276" height="32"> I)Whether the applicant is involved in any incident involving Firearms</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk4" id="chk4" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk4" id="chk4" value="N"/>No</td>
	</tr>
	<tr>
		<td height="32">II)If yes to above:</td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td height="32">a)Case No:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">b)Under Section:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">c)Status of case:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32"> III)Whether the applicant owns other Firearms</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk4" id="chk4" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk4" id="chk4" value="N"/>No</td>
	</tr>
	
	<tr>
		<td height="32">IV)If yes to above:</td>
	</tr>
	<tr>
		<td height="32">a)License No:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">b)Si. No. of Gun:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">c)Whether the license/Gun has been sold to any other person.if so, it whom and date of sale:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">V)Character antecedents:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
   		<td colspan="9" align="center"><input type="button" name="Submit" id="Submit" value="Submit" onclick="CalltoDAOConfirm();"/>
   		<input type="reset" name="Reset" id="Reset" value="Reset" /></td>
   </tr>
	</table>
</form>
	
</body>
</html>