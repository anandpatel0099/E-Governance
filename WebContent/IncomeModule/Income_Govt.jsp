<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.util.List,java.util.Iterator,Income.vo.incomeVO" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Govt. Officer View</title>
<link href="templatemo_style.css" rel="stylesheet" type="text/css" />
<% 
	List l=null;
	Iterator it=null;
	incomeVO persondtls=null;
	if(request.getAttribute("ql")!=null)
	{
		l=(List)request.getAttribute("ql");
		it= l.iterator();
	}
	

	
%>
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
function getToken(tk)
{
	alert(tk);
	document.getElementById("tk").value=tk;
	document.getElementById("actionval").value="token";
	document.getElementById("incomegovt1").submit();
}
function PendingApps()
{
	alert("income govt");
	document.getElementById("actionval").value="PendingApps";
	document.getElementById("incomegovt").submit();
}
function ApprovedApps()
{
	alert("income govt");
	document.getElementById("actionval").value="ApprovedApps";
	document.getElementById("incomegovt").submit();
}
function RejectedApps()
{
	alert("income govt");
	document.getElementById("actionval").value="RejectedApps";
	document.getElementById("incomegovt").submit();
}
function ChangePwd()
{
	alert("income govt");
	document.getElementById("actionval").value="ChangePwd";
	document.getElementById("incomegovt").submit();
}
</script>
</head>
<body>
<form action="IncomeGovt" method="post" name="incomegovt1" id="incomegovt1">
	<input type="hidden" name="actionval" id="actionval" value="actionval" />
	<input type="hidden" name="tk" id="tk" value="tk" />
	
	
	<div id="templatmeo_wrapper">

    <div id="templatemo_header">
    
        <div id="site_title">
            <h1>
                <img src="images/LOGO.jpg" alt="City Portal" />
                
            </h1>
        </div> <!-- end of site_title -->
        
        <div id="header_right">
        
            <ul id="header_button">
                <li><a href="#"><img src="images/templatemo_home.jpg" alt="home" /></a></li>
                <li><a href="#"><img src="images/templatemo_contact.jpg" alt="contact us" /></a></li>	
            </ul>
            
            <div class="cleaner"></div>
            
            
        
        </div>
        
    </div> <!-- end of templatemo_header -->
    
    <div id="templatemo_banner">
    
    	<div id="banner_box">
        <ul>
        	<li><a href="http://www.templatemo.com/page/1" target="_parent"><span class="current"></span><img src="images/templatemo_city_info.jpg" alt="City Info." /></a></li>
            <li><a href="http://www.templatemo.com/page/2" target="_parent"><span></span><img src="images/templatemo_business.jpg" alt="Business" /></a></li>
            <li><a href="http://www.templatemo.com/page/3" target="_parent"><span></span><img src="images/templatemo_tourism.jpg" alt="Tourism" /></a></li>
            <li><a href="http://www.templatemo.com/page/4" target="_parent"><span></span><img src="images/templatemo_events.jpg" alt="Events" /></a></li>
        </ul>
        </div>
    
    </div> <!-- end of templatemo_banner -->
    
    <div id="templatemo_menu">
    
        <ul>
            <li><a href="#">Homepage</a></li>
            <li><a href="#"></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#" target="_parent"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>	
            <li><a href="#"></a></li>	
        </ul>    	
    
    </div> <!-- end of templatemo_menu -->
    
    <div id="templatemo_content_wrapper">
    
    	<div id="templatemo_left_sidebar">
        
        	<div class="templatemo_box">
            	<h2><span></span>Categories</h2>
                
                <div class="body">
                    <ul class="side_menu">
						<b>Application</b>
                        <li><a onclick="PendingApps();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Pending Application</a></li>
                        <li><a onclick="ApprovedApps();">Approved Application</a></li>
                        <li><a onclick="RejectedApps();">Rejected Application</a></li>
                        
						<b>Account Setting</b>
						<li><a onclick="ChangePwd();";>Change Password</a></li>
						
						              
                    </ul>
                </div>
            
            	<div class="box_bottom"><span></span></div>
            </div>
            
            
        
        </div> <!-- end of left_sidebar -->
		<!-- body -->
		<div>
		<table border="1" align="center">
		<tr>
			<td>Sr No.</td>
			<td>Token Number</td>
			<td>Application Name</td>
			<td>Applicant Name</td>
			<td>Date of Submit</td>
			<td>Status</td>
		</tr>
		<%
				if(request.getAttribute("ql")!=null)
				{

				while(it.hasNext())
				{
					incomeVO persondtl= new incomeVO();
					Object element = it.next();
					persondtl=(incomeVO)element;
					
				 %>
				 <tr>
				 	<td><%=persondtl.getId()%></td>
				 	<td onclick="getToken(<%=persondtl.getTokenNumber()%>);"><%=persondtl.getTokenNumber()%></td>
				 	<td><%=persondtl.getApplicationName()%></td>
				 	<td><%=persondtl.getApplicantName()%></td>
				 	<td><%=persondtl.getDateofSubmit()%></td>
				 	<td><%=persondtl.getStatus()%></td>
				 	
				 </tr>
				 <%}} %>
	</table> 
		</div>
		<!-- end of body -->
        
         <!-- end of templatemo_content -->
        
       	 <!-- end of right_sidebar -->
        
        <div class="cleaner"></div>
    
    </div> <!-- end of templatemo_content_wrapper -->

</div> <!-- end of templatemo_wrapper -->

<div id="templatemo_footer_wrapper">

	<div id="templatemo_footer">

        <ul class="footer_menu">
        	<li><a href="#">Homepage</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li class="last_menu"><a href="#"></a></li>
        </ul>
    
        Copyright © 2048 <a href="#">Your Company Name</a> | 
    <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a href="http://www.templatemo.com" target="_parent">Free CSS Templates</a></div> 
	<!-- end of footer -->
</div> <!-- end of templatmeo_footer_wrapper -->
<div align=center>This template  downloaded form <a href='http://all-free-download.com/free-website-templates/'>free website templates</a></div></form>
</body>
</html>