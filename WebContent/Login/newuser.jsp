<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Registration</title>
<script src="javascript/CommonValidation.js" type="text/javascript"></script>
<script type="text/javascript">




function newuser()
{
	var md5pwd = MD5(document.getElementById("password").value);
	
	alert("1 ------>" + md5pwd);
	document.getElementById("password").value=md5pwd;
	alert("2");
	document.getElementById("conpwd").value=md5pwd;
	
	document.getElementById("actionval").value="NewUser";	
	alert("3");
	document.getElementById("form2").submit();
	alert("4");
}
</script>
<script src="javascript/CommonValidation.js" type="text/javascript"></script>


<%
	String msg="";
	if(request.getAttribute("msg")!=null)
	{
		msg=request.getAttribute("msg").toString();
	}
%>
</head>



<body>

<form action="login" method="post" name="form2" id="form2" >
<input type="hidden" name="actionval" id="actionval" value="actionval" />
 <table width="1020" height="308" style="width: 963px; border:solid; margin: 0 auto;">
 
 	 <tr align="center">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:">
		 	<span style="color:black;font-weight: bold;">Registration Form </span></td>
   	</tr>
   	<%=msg %>
	<tr>
     <td height="32" colspan="9" align=left>&nbsp;&nbsp;&nbsp;<span style="color:red;font-weight: bold;">All fields marked with * are mandatory.</span></td>
   </tr>
   <!--login module-->
    <tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC">
		 	<span style="color:#048dc6;font-weight: bold;">Login Details</span></td>
   	</tr>
	<tr>
     <td width="" height="32">Username<font color="red">*</font></td>
	 <td width="" style="font-weight: bold;">:</td>
	 <td width=""><input type="text" name="login" id="login" value="adi" onchange="makeRequest();" /></td>
	 <td width=""><div id="hello" name="hello"></div></td>
	<td colspan="5"></td>
	</tr>
	<tr>
     <td height="32">Password<font color="red">*</font></td>
	 <td style="font-weight: bold;">:</td>
	 <td><input type="text" name="password" id="password" /></td>
	 <td align="left">
	 	<div style="border: 1px solid gray; background-color: #e5e5e5; width: 120px; height: 10px;">
       		<div  style="font-size: 1px; height: 10px; width: 0px; border: 1px solid white;"></div>
     	</div><span>Your Password Strength</span></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td align=center colspan="9" height="32">Password should be minmum 6 & maximum 12 characters long</td>
	</tr>
 	<tr>
		<td height="32">Confirm Password<font color="red">*</font></td>
		<td style="font-weight: bold;">:</td>
		<td><input type="text" name="conpwd" id= "conpwd" /></td>
		<td colspan="6"></td>
	</tr>
	<tr>
		<td height="32">Security question<font color="red">*</font></td>
		<td style="font-weight: bold;">:</td>
		<td><select id="secque" style="width: 235px;" name="secque" type="select-one">
      		 <option value="-1">-- Select --</option>
      		 <option value="2978">Which place do you like the most?</option>
      		 <option value="1628">What is your Lucky No.?</option>
			<option value="2564">Who is your favorite actor? </option>
      		 <option value="2102">What was your primary school?</option>
      		 <option value="2103">What is your pet name? </option>
     		</select></td>
			<td></td>
			<td colspan="5"></td>
	</tr>
	<tr>
		<td height="32">Answer<font color="red">*</font></td>
		<td style="font-weight: bold;">:</td>
		<td><input type="text" name="answer" id= "answer" /></td>
		<td></td>
		<td colspan="5"></td>
	</tr>
	 <tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Personal Details</span></td>
   	</tr>
	<tr>
		 <td height="33">Salutation<font color="red">*</font></td>
		 <td width="" style="font-weight: bold;">:</td>
		<td><select id="salutation" style="width: 155px" size="1" name="salutation" type="select-one">
      		 <option value="-1">-- Select --</option>
      		 <option selected value="Mr.">Mr.</option>
      		 <option  value="Mrs.">Mrs.</option>
			 <option  value="Dr.">Dr.</option>
      		 <option  value="Shri">Shri</option>
      		 <option  value="Prof.">Prof.</option>
      		 <option  value="Ms.">Ms.</option>
    		 </select></td>
	 	<td></td>
		<td width=""></td>
		<td width="" height="32">Gender</td>
		 <td width="" style="font-weight: bold;">:</td>
		<td width=""><select id="gender" style="width: 155px" size="1" name="gender" type="select-one">
       			<option value="-1">-- Select --</option>
      			 <option selected value="Male">Male</option>
     			 <option  value="Female">Female</option>
	  </select></td>
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
		<td><input type="text" name="firstname" id= "firstname" /></td>
		<td colspan="2"><input type="text" name="middlename" id= "middlename" /></td>
		<td></td>
	 	<td></td>
	  	<td><input type="text" name="lastname" id= "lastname" /></td>
	  	<td></td>
	</tr>
	<tr>
		<td width="" height="32">Date of Birth<font color="red">*</font></td>
		<td width="" style="font-weight: bold;">:</td>
		<td><input type="text" name="dob" id= "dob" /></td>
		<td width="" height="32">Age<font color="red">*</font></td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><input type="text" name="age" id= "age"  /></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="" height="32">Phone No.</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><input type="text" name="phoneno" id= "phoneno" /></td>
		<td width="" height="32">Mobile</td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><input type="text" name="mobno" id= "mobno"  /></td>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td width="" height="32">Email ID</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><input type="text" name="email" id= "email" /></td>
		<td colspan="6"></td>
	</tr>
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Present Address</span></td>
   	</tr>
	<tr>
		 <td width="" height="32">Address Line - 1<font color="red">*</font></td>
	 	<td width="" style="font-weight: bold;">:</td>
	 	<td width=""><input type="text" name="add1" id="add1" /></td>
	 	<td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td width="" height="32">Address Line - 2</td>
		 <td width="" style="font-weight: bold;">:</td>
		 <td width=""><input type="text" name="add2" id="add2" /></td>
		 <td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
			 <td width="" height="32">Country<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><input type="text" id="country" name="country" value="India" /></td>
		    <td width="" height="32">State<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><input type="text" id="state" name="state" value="Gujarat"/></td>
		   <td></td>
	</tr>
	<tr>
			 <td width="" height="32">District<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><select id="district" style="width: 145px" size="1" name="district" >
             <option value="-1">--Select--</option>
             <option value="Ahmedabad">AHMEDABAD</option>
             <option value="Gandhinagar">GANDHINAGAR</option>
             <option value="Surat">SURAT</option>
             <option value="Rajkot">RAJKOT</option>
           </select></td>
		   <td width="" height="32">Pincode<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><input type="text" name="pin" id="pin" /></td>
			<td></td>
	</tr>
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Permanent Address</span></td>
   	</tr>
	<tr>
		<td colspan="9"><input type="checkbox" name="check_SameAsAbove2" id="check_SameAsAbove2" size="5" />
       <font>Same As Above</font></td>
	</tr>
	<tr>
		<tr>
		 <td width="" height="32">Address Line - 1<font color="red">*</font></td>
	 	<td width="" style="font-weight: bold;">:</td>
	 	<td width=""><input type="text" name="padd1" id="padd1" /></td>
	 	<td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
		 <td width="" height="32">Address Line - 2</td>
		 <td width="" style="font-weight: bold;">:</td>
		 <td width=""><input type="text" name="padd2" id="padd2" /></td>
		 <td width=""></td>
		<td colspan="5"></td>
	</tr>
	<tr>
			 <td width="" height="32">Country<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><input type="text" id="pcountry" name="pcountry" value="India" /></td>
		    <td width="" height="32">State<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><input type="text" id="pstate" name="pstate" value="Gujarat"/></td>
		   <td></td>
	</tr>
	<tr>
			 <td width="" height="32">District<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><select id="pdistrict" style="width: 145px" size="1" name="pdistrict" >
             <option value="-1">--Select--</option>
             <option value="Ahmedabad">AHMEDABAD</option>
             <option value="Gandhinagar">GANDHINAGAR</option>
             <option value="Surat">SURAT</option>
             <option value="Rajkot">RAJKOT</option>
           </select></td>
		   <td width="" height="32">Pincode<font color="red">*</font></td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><input type="text" name="ppin" id="ppin" /></td>
			<td></td>
	</tr>
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">Other Details</span></td>
   	</tr>
	<tr>
			<td width="" height="32">Nationality</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><select id="nationality" type="select-one" name="nationality" size="1" style="width: 155px;">
 						 <option value="1620">Indian</option>
  							<option value="1621">Other</option>
							</select></td>
			<td width="" height="32">Occupation</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><select id="occupation" type="select-one" name="occupation" size="1" style="width: 155px">
						<option value="">-- Select --</option>
  						<option value="2970">Student</option>
  						<option value="1199">Software Professional</option>
						<option value="2971">Hardware Professional</option>
  						<option value="800">Industrialist</option>
						<option value="2972">Professor</option>
 			 			<option value="2096">Teacher</option>
  						<option value="3416">Doctor</option>
  						<option value="3417">Engineer</option>
  						<option value="2559">Lawyer</option>
  						<option value="2094">Business</option>
						<option value="3415">Nurse</option>
  						<option value="360">Artist</option>
  						<option value="798">Farmer</option>
 			 			<option value="1623">House Wife</option>
  						<option value="1624">Writer</option>
			  			<option value="799">Labour</option>
 			 			<option value="1625">Govt. Employee</option>
						<option value="2095">Private Service</option>
  						<option value="1626">Others</option>
						</select></td>
						<td></td>
	</tr>
	<tr>
			<td width="" height="32">Religion</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><select id="religion" type="select-one" name="religion" size="1" style="width: 155px;">
  						<option value="-1">-- Select --</option>
  						<option value="3414">Hindu</option>
 		 				<option value="2557">Muslim</option>
  						<option value="1198">Christian</option>
  						<option value="2093">Other</option>
						</select></td>
			<td width="" height="32">Category</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><select id="category" type="select-one" name="category" size="1" style="width: 155px;">
  					<option value="">-- Select --</option>
  					<option value="2097">Open</option>
  					<option value="2560">SC</option>
  					<option value="2098">ST</option>
  					<option value="2099">Socially Backward</option>
  					<option value="3419">OBC</option>
  					<option value="801">Others</option>
					</select></td>
						<td></td>
	</tr>
	<tr>
		<td width="" height="32">Caste</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><input type="text" name="caste" id="caste" /></td>
		<td width="" height="32">Sub-Caste</td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><input type="text" name="subcaste" id="subcaste" /></td>
		<td colspan="2"></td>
	</tr>
	<tr>
			 <td width="" height="32">Identity Proof Type</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width=""><select id="idproof" type="select-one" name="idproof" size="1" style="width: 155px">
  						<option value="">-- Select --</option>
  						<option value="3683">Pan Card</option>
  						<option value="4022">Ration Card</option>
  						<option value="3942">Election Card</option>
  						<option value="3940">Driving License</option>
						</select></td>
		   <td width="" height="32">Card No.</td>
	 		<td width="" style="font-weight: bold;">:</td>
	 		<td width="" colspan="3"><input type="text" name="cardno" id="cardno" /></td>
			<td></td>
	</tr>
	<tr>
		<td width="" height="32">Place of Issue</td>
		<td width="" style="font-weight: bold;">:</td>
		<td><input type="text" name="placeofissue" id="placeofissue" /></td>
		<td width="" height="32">Date of Issue</td>
		<td width="" style="font-weight: bold;">:</td>
		<td colspan="2"><input type="text" name="dateofissue" id="dateofissue" /></td>
		<td colspan="2"></td>
	</tr>
	
	<tr align="left">
    	 <td height="43" colspan="9" style="height: 25px; padding-top: 0px !important; background-color:#CCC;">
		 	<span style="color:#048dc6;font-weight: bold;">User Agreement</span></td>
   	</tr>
	<tr>
     
     <td colspan="8"><input id="check1" type="checkbox" name="check1" />
       <b>I have read, understood and agree with the <a href="javascript:openTerms();">Terms and Conditions</a></b></td>
   </tr>
   <tr>
   		<td colspan="9" align="center"><input type="button" name="Submit" id="Submit" value="Submit" onclick="newuser();"/></td>
   </tr>
</table>

</form>

</body>

</html>
