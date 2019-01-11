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
	String padd1="";
	String padd2="";
	String pcon="";
	String pst="";
	String pdis="";
	String ppin="";
	
	
	String ftn="";
	String fi="";
	String fa="";
	String fd="";
	String fo="";
	
	String mtn="";
	String mi="";
	String ma="";
	String md="";
	String mo="";
	
	String stn="";
	String si="";
	String sa="";
	String sd="";
	String so="";
	
	String oi="";
	String pf="";
	String ti="";
	String tiw="";
	
	String token="";
	
	if(request.getAttribute("token")!=null)
	{
		token=request.getAttribute("token").toString();
	}
	
	if(request.getAttribute("ftn")!=null)
	{
		ftn=request.getAttribute("ftn").toString();
	}
	if(request.getAttribute("fi")!=null)
	{
		fi=request.getAttribute("fi").toString();
	}
	if(request.getAttribute("fa")!=null)
	{
		fa=request.getAttribute("fa").toString();
	}
	if(request.getAttribute("fd")!=null)
	{
		fd=request.getAttribute("fd").toString();
	}
	if(request.getAttribute("fo")!=null)
	{
		fo=request.getAttribute("fo").toString();
	}
	
	if(request.getAttribute("mtn")!=null)
	{
		mtn=request.getAttribute("mtn").toString();
	}
	if(request.getAttribute("mi")!=null)
	{
		mi=request.getAttribute("mi").toString();
	}
	if(request.getAttribute("md")!=null)
	{
		md=request.getAttribute("md").toString();
	}
	if(request.getAttribute("ma")!=null)
	{
		ma=request.getAttribute("ma").toString();
	}
	if(request.getAttribute("mo")!=null)
	{
		mo=request.getAttribute("mo").toString();
	}
	
	
	if(request.getAttribute("stn")!=null)
	{
		stn=request.getAttribute("stn").toString();
	}
	if(request.getAttribute("si")!=null)
	{
		si=request.getAttribute("si").toString();
	}
	if(request.getAttribute("sa")!=null)
	{
		sa=request.getAttribute("sa").toString();
	}
	if(request.getAttribute("sd")!=null)
	{
		sd=request.getAttribute("sd").toString();
	}
	if(request.getAttribute("so")!=null)
	{
		so=request.getAttribute("so").toString();
	}
	
	if(request.getAttribute("oi")!=null)
	{
		oi=request.getAttribute("oi").toString();
	}
	if(request.getAttribute("pf")!=null)
	{
		pf=request.getAttribute("pf").toString();
	}
	if(request.getAttribute("ti")!=null)
	{
		ti=request.getAttribute("ti").toString();
	}
	if(request.getAttribute("tiw")!=null)
	{
		tiw=request.getAttribute("tiw").toString();
	}
	
	
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
	if(request.getAttribute("padd1")!=null)
	{
		padd1=request.getAttribute("padd1").toString();
	}
	if(request.getAttribute("padd2")!=null)
	{
		padd2=request.getAttribute("padd2").toString();
	}
	if(request.getAttribute("pcon")!=null)
	{
		pcon=request.getAttribute("pcon").toString();
	}
	if(request.getAttribute("pst")!=null)
	{
		pst=request.getAttribute("pst").toString();
	}
	if(request.getAttribute("pdis")!=null)
	{
		pdis=request.getAttribute("pdis").toString();
	}
	if(request.getAttribute("ppin")!=null)
	{
		ppin=request.getAttribute("ppin").toString();
	}

%>
<script type="text/javascript">
	function ApproveFun()
	{
		alert("approve");
		document.getElementById("actionval").value="Approve";
		document.getElementById("govt").submit();
	}
	function RejectFun()
	{
		alert("reject");
		document.getElementById("actionval").value="Reject";
		document.getElementById("govt").submit();
	}
</script>

</head>

<body>

<form action="IncomeGovt" method="post" name="govt" id="govt" >
<input type="hidden" name="actionval" id="actionval" value="actionval" />
<input type="hidden" name="tk" id="tk" value='<%=token %>' />

<table width="956" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
    <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:black;font-weight: bold;">Income Certificate </span></td>
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
	 	<td width="91"><%=padd1 %></td>
	 	<td width="144"></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td width="276" height="32">Address Line - 2</td>
		 <td width="17" style="font-weight: bold;">:</td>
		 <td width="91"><%=padd2 %></td>
		 <td width="144"></td>
		<td colspan="5"></td>
	</tr>
	<tr>
			 <td width="276" height="32">Country</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td width="91"><%=pcon %></td>
		    <td width="144" height="32">State</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td colspan="3"><%=pst %></td>
		   <td></td>
	</tr>
	<tr>
			 <td width="276" height="32">District</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td width="91"><%=pdis %></td>
		   <td width="144" height="32">Pincode</td>
	 		<td width="17" style="font-weight: bold;">:</td>
	 		<td colspan="3"><%=ppin %></td>
			<td></td>
	</tr>
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Extra Details Required</span></td>
   	</tr>
	
	<tr>
		<td height="32">Father's Name</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=ftn %></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Father's Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fd %></td>
		<td width="144" height="32">Father's Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fa %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td height="32">Father's Occupation</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fo %></td>
	  	<td></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td height="32">Mother's Name</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=mtn %></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Mother's Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fd %></td>
		<td width="144" height="32">Mother's Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=ma %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td height="32">Mother's Occupation</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=mo %></td>
	  	<td></td>
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
		<td><%=stn %></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">Spouse Date of Birth</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=sd %></td>
		<td width="144" height="32">Spouse Age</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=sa %></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td height="32">Spouse's Occupation</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=so %></td>
	  	<td></td>
	</tr>
	
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td height="32">Father's Income</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=fi %></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">Mother's Income</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=mi %></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">Spouse's Income</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=si %></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">Other's Income</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=oi %></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">Total Income</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=ti %></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">Total Income in Words</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><%=tiw %></td>
	  	<td></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td height="32">Purpose for Income Certificate</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td>
		<%=pf %>
		</td>
	  	<td></td>
	</tr>
	
	<tr>
   		<td colspan="9" align="center"><input type="button" name="Approve" id="Approve" value="Approve" onclick="ApproveFun();"/>
   		<input type="button" name="Reject" id="Reject" value="Reject" onclick="RejectFun();"/></td>
   </tr>
</table>
</form>

</body>

</html>
