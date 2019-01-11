<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>FireArm Registration</title>
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
	String un="";
	
	if(request.getAttribute("un")!=null)
	{
		un=request.getAttribute("un").toString();
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

%>
<script type="text/javascript">
	function CalltoDAOConfirm()
	{
		alert("FireArm License");
		document.getElementById("firearm").action="LicenseServlet";
		document.getElementById("firearm").method="post";
		document.getElementById("actionval").value="CalltoDAOConfirm";
		document.getElementById("firearm").submit();
	}
</script>

</head>

<body>

<form name="firearm" id="firearm">
<input type="hidden" name="actionval" id="actionval" value="actionval" />
<input type="hidden" name="un" id="un" value='<%=un %>' />
<table width="956" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
    <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:black;font-weight: bold;">FireArm Certificate</span></td>
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
		<td><%=fn %><input type="hidden" name="fn" id="name" value='<%=fn %>' /></td>
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
		<td width="276" height="32">PART 'B': Other particulars of applicant:</td>
</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td width="276" height="32"> I)Whether the applicant has been</td>
		
	</tr>
	<tr>
		<td height="32">a) Convicted -if so the offence(s) the sentence and date of sentence </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="Convicted" id="Convicted" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td height="32">b) Ordered to execute a bond under Chapter VII of criminal procedure code of keeping the peace or for good behaviour if so when and for what period </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td>From <input type="text" name="datefrom" id="datefrom" maxlength="250"/></td>
	  	<td>To<input type="text" name="dateto" id="dateto" maxlength="250"/></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td height="32">c) Prohibited under the Arms Act or any other law from having the Arms/ammunicate </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="Prohibited" id="Prohibited" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	
	<tr>
		<td width="276" height="32">II)  a)Whether the applicant applied for a license before, if so, when/to whom and with what a result</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="applied" id="applied" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">b) Whether the applicant's License was over suspended or cancelled/evoke if so,when and by whom and what account:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="suspended" id="suspended" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td height="32">c) Whether any number of the applicant's family is in possessors and arm license if so, particular there of</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="possessor" id="possessor" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td width="276" height="32">III): Whether the applicant:</td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
		<tr>
		<td height="32">a)is a license exemptee-if so, description of the arms held:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="exemptee" id="exemptee" maxlength="250"/></td>
	  	<td></td>
		</tr>
		<tr>
		<td height="32">b) Has a safe place to keep the arms: </td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="radio" name="check1" id="check1" value="Y"/>Yes</td>
	  	<td><input type="radio" name="check1" id="check1" value="N"/>No</td>
		</tr>
	
	<tr>
		<td width="276" height="32">PART 'C': Particulars of license</td>
	</tr>
	<tr></tr>
	<tr></tr>
	<tr></tr>
	<tr>
		<td width="276" height="32">IV) Need for license:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="need" id="need" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">V) Description of arms/ammunition:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="description" id="description" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">VI) a)area within applicant wishes to carry arms:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="area" id="area" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">b)Place where arms/ammunition will be kept/manufactured,etc:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="kept" id="kept" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">VII) other particulars required as in the relevant license Form:</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="otherpart" id="otherpart" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="276" height="32">VIII) any claims for consideration</td>
		<td width="17" style="font-weight: bold;">:</td>
		<td><input type="text" name="claims" id="claims" maxlength="250"/></td>
	  	<td></td>
	</tr>
	<tr>
   		<td colspan="9" align="center"><input type="button" name="Submit" id="Submit" value="Submit" onclick="CalltoDAOConfirm();"/>
   		<input type="reset" name="Reset" id="Reset" value="Reset" /></td>
   </tr>
	</table>
</form>

</body>

</html>
	