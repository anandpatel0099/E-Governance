<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Income Registration</title>
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
		alert("RTI");
		document.getElementById("rti").action="RTIServlet";
		document.getElementById("rti").method="post";
		document.getElementById("actionval").value="CalltoDAOConfirm";
		document.getElementById("rti").submit();
	}
</script>

</head>

<body>

<form name="rti" id="rti">
<input type="hidden" name="actionval" id="actionval" value="actionval" />
<table width="956" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
    <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:black;font-weight: bold;">RTI Certificate</span></td>
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
	
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Permanent Address</span></td>
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
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Extra Details Required</span></td>
   	</tr>
	
	<tr>
		<td height="32">Father's Name</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="fthn" id="fthn" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Father's Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="fthdob" id="fthdob"/></td>
		<td width="144" height="32">Father's Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="fthage" id="fthage"></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	
	<tr>
		<td height="32">Spouse Name</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="spsn" id="spsn" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Spouse Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="spsdob" id="spsdob"/></td>
		<td width="144" height="32">Spouse Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="spsage" id="spsage"></td>
		<td colspan="2"></td>
	</tr>
	
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	
	<tr>
		<td width="276" height="32">Particular of Information solicited:</td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	
	<tr>
		<td height="32">a) Subject matter of information </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="subject" id="subject" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td height="32">b) The Period to which the information relates </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td>From <input type="text" name="datefrom" id="datefrom" maxlength="250"/></td>
	  	<td>To<input type="text" name="dateto" id="dateto" maxlength="250"/></td>
	</tr>
	
	<tr>
		<td height="32">c) Specific details of information required</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="details" id="details" maxlength="250"/></td>
	  	<td></td>
	</tr>
	
	<tr>
		<td height="32">d) Whether information is required by post or person </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk1" id="chk1" value="post"/>Post</td>
	  	<td><input type="radio" name="chk1" id="chk1" value="person"/>Person</td>
	</tr>
	
	<tr>
		<td height="32">e) In case by post</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk2" id="chk2" value="ordinary"/>Ordinary</td>
	  	<td><input type="radio" name="chk2" id="chk2" value="registered"/>Registered</td>
	  	<td><input type="radio" name="chk2" id="chk2" value="speed"/><td>Speed</td></td>
	</tr>
	
	<tr>
		<td height="32">f) Address to which information will be send</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk3" id="chk3" value="present"/>Present</td>
	  	<td><input type="radio" name="chk3" id="chk3" value="permanent"/>Permanent</td>
	</tr>
	
	<tr>
		<td height="32">g) Has the information provided earlier</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk4" id="chk4" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk4" id="chk4" value="N"/>No</td>
	</tr>
	
	<tr>
		<td height="32">h) Is this information not made available by the Public Authority</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk5" id="chk5" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk5" id="chk5" value="N"/>No</td>
	</tr>
	
	<tr>
		<td height="32">i) Do you agree to pay the required fee</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk6" id="chk6" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk6" id="chk6" value="N"/>No</td>
	</tr>
	
	<tr>
		<td height="32">j) Have you deposited application fee</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk7" id="chk7" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk7" id="chk7" value="N"/>No</td>
	</tr>
	
	<tr>
		<td height="32">k) Whether belongs to BPL category, have you furnished proof of the same.</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="chk8" id="chk8" value="Y"/>Yes</td>
	  	<td><input type="radio" name="chk8" id="chk8" value="N"/>No</td>
	</tr>
	
	<tr>
   		<td colspan="9" align="center"><input type="button" name="Submit" id="Submit" value="Submit" onclick="CalltoDAOConfirm();"/>
   		<input type="reset" name="Reset" id="Reset" value="Reset" /></td>
   </tr>
</table>
</form>

</body>

</html>
