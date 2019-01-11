<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>User Login</title>
<link href="templatemo_style.css" rel="stylesheet" type="text/css" />
<%
	String un="";
	if(session.getAttribute("un")!=null)
	{
		un=session.getAttribute("un").toString();
	}
%>
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
function IncomeFun()
{
	alert("income");
	document.getElementById("actionval").value="CalltoDAO";
	document.getElementById("income1").action="IncomeServlet";
	document.getElementById("income1").submit();
}
function DomicialFun()
{
	alert("domicial");
	document.getElementById("actionval").value="CalltoDAO";
	document.getElementById("income1").action="DomicialServlet";
	document.getElementById("income1").submit();
}
function RTIFun()
{
	alert("RTI");
	document.getElementById("actionval").value="CalltoDAO";
	document.getElementById("income1").action="RTIServlet";
	document.getElementById("income1").submit();
}
function PMFun()
{
	alert("PMEGP");
	document.getElementById("actionval").value="CalltoDAO";
	document.getElementById("income1").action="pmepServlet";
	document.getElementById("income1").submit();
}

function LicenseFun()
{
	alert("License");
	document.getElementById("actionval").value="CalltoDAO";
	document.getElementById("income1").action="LicenseServlet";
	document.getElementById("income1").submit();
}
</script>
</head>
<body>
<form method="post" name="income1" id="income1">
	<input type="hidden" name="actionval" id="actionval" value="actionval" />
	<input type="hidden" name="un" id="un" value='<%=un %>' />
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
            
            <form action="#" method="get">
                <input type="text" value="Enter a keyword here..." name="q" size="10" id="searchfield" title="searchfield" onfocus="clearText(this)" onblur="clearText(this)" />
                <input type="submit" name="Search" value="Go" alt="Search" id="searchbutton" title="Search" />
            </form>
        
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
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="" target="_parent"></a></li>
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
						<b>Certificates</b>
                        <li><a onclick="IncomeFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Income Certificate</a></li>
                        <li><a onclick="DomicialFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Domicile Certificate</a></li>
                        <li><a href="#">Caste Certificate</a></li>
                        
						<b>RTI & Grievance Redressal</b>
						<li><a onclick="RTIFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">RTI</a></li>
                        <li><a href="#">Grievance Redressal</a></li>
						
						<b>Licenses</b>
                        <li><a href="#">Blasting License</a></li>
                        <li><a href="#">Fatka / Fire Cracker License</a></li>
                        <li><a onclick="LicenseFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Fire Arm License</a></li>
						
						<b>Industry Services</b>
						<li><a href="#">EM-1</a></li>
                        <li><a href="#">EM-2</a></li>
                        <li><a onclick="PMFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Prime Minister Employment Programme</a></li>
						<li><a href="#">EC Cum RC</a></li>
                        <li><a href="#">Subsidy</a></li>
						
						<b>Pensions</b>
						<li><a href="#">Old Age Pension</a></li>              
                    </ul>
                </div>
            
            	<div class="box_bottom"><span></span></div>
            </div>
            
            
        
        </div> <!-- end of left_sidebar -->
		<!-- body -->
		 <div id="templatemo_content">
        
			<div class="templatemo_box">
            	<h2><span></span>Welcome to your account <b><%=un %></b></h2>
                
                <div class="body">
                    
                    <p>You can apply for the diffent application through the menu on your left</p>
                  
              </div>
            </div>
            </div>
            
			
			
		
		<!-- end of body -->
        	<div id="templatemo_right_sidebar">
        
        	<div class="templatemo_box">
            	<h2>User Account</h2>
                
                <div class="body">
                    <ul class="side_menu">
						<b>Info</b>
                        <li><a onclick="" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Change Password</a></li>
                        <li><a onclick="DomicialFun();" onmouseover="this.style.cursor='hand';" onmouseout="this.style.cursor='default';">Update Personal Details</a></li>
                        
						
                    </ul>
                </div>
               </div>
             </div>
                
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