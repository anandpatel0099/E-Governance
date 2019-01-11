<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Gujarat Portal</title>
<link href="templatemo_style.css" rel="stylesheet" type="text/css" />
<script src="javascript/CommonValidation.js" type="text/javascript"></script>
<%
	String error="";
	if(request.getAttribute("error")!=null)
	{
		error=request.getAttribute("error").toString();
	}
%>
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}

function Login()
{
	var md5pwd = MD5(document.getElementById("password").value);
	
	alert("1 ------>" + md5pwd);
	document.getElementById("password").value=md5pwd;
	document.getElementById("actionval").value="SubmitData";	
	alert("2");
	document.getElementById("form1").submit();
	alert("3");
}

function NewUserRegistration()
{
	alert("1");
	document.getElementById("actionval").value="NewUserRegistration";	
	alert("2");
	document.getElementById("form1").submit();
	alert("3");
}
function ForgotPassword()
{
	alert("1");
	document.getElementById("actionval").value="ShowForgetPwd";	
	alert("2");
	document.getElementById("form1").submit();
	alert("3");
}
</script>
</head>
<body>
<form name="form1" method="post" action="login" id="form1">
<input type="hidden" name="actionval" id="actionval" value="actionval" />
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
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Life Style</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="http://www.flashmo.com" target="_parent">Technology</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Photos</a></li>	
            <li><a href="#">Videos</a></li>	
        </ul>    	
    
    </div> <!-- end of templatemo_menu -->
    
    <div id="templatemo_content_wrapper">
    
    	<div id="templatemo_left_sidebar">
        
        	<div class="templatemo_box">
            	<h2><span></span>Categories</h2>
                
                <div class="body">
                    <ul class="side_menu">
						<b>Certificates</b>
                        <li><a href="#">Income Certificate</a></li>
                        <li><a href="#">Domicile Certificate</a></li>
                        <li><a href="#">Caste Certificate</a></li>
                        
						<b>RTI & Grievance Redressal</b>
						<li><a href="#">RTI</a></li>
                        <li><a href="#">Grievance Redressal</a></li>
						
						<b>Licenses</b>
                        <li><a href="#">Blasting License</a></li>
                        <li><a href="#">Fatka / Fire Cracker License</a></li>
                        <li><a href="#">Fire Arm License</a></li>
						
						<b>Industry Services</b>
						<li><a href="#">EM-1</a></li>
                        <li><a href="#">EM-2</a></li>
                        <li><a href="#">Prime Minister Employment Programme</a></li>
						<li><a href="#">EC Cum RC</a></li>
                        <li><a href="#">Subsidy</a></li>
						
						<b>Pensions</b>
						<li><a href="#">Old Age Pension</a></li>              
                    </ul>
                </div>
            
            	<div class="box_bottom"><span></span></div>
            </div>
            
            
        
        </div> <!-- end of left_sidebar -->
        
        <div id="templatemo_content">
        
			<div class="templatemo_box">
            	<h2><span></span>Welcome to City Portal Website</h2>
                
                <div class="body">
                    
                    <p>City Portal is a <a href="http://www.templatemo.com" target="_parent">Free CSS Template</a> for everyone. Feel free to download, edit and apply this template for your websites. 
        Validate <a href="http://validator.w3.org/check?uri=referer">XHTML</a> &amp; <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a>. Credit goes to <a href="http://www.photovaco.com" target="_blank">Free Photos</a> for photos used in this layout. Nam ut libero at lacus feugiat tincidunt vitae sed ipsum. Vivamus ut ante ullamcorper urna cursus porta.</p>
                  
              </div>
            
           	  <div class="box_bottom"><span></span></div>
            </div>
            
            <div class="templatemo_box">
            	<h2><span></span>Popular Places</h2>
                
                <div class="body">
                    
                    <div class="news_box">
                        <a href="#"><img class="news_image" src="images/templatemo_image_06.jpg" alt="image" /></a>
                   	  <h3><a href="#">Praesent pretium diam quam</a></h3>
                        <p>Praesent accumsan porta odio eget hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nunc nisl, in pellentesque mi.</p>
                        
                      <div class="cleaner"></div>
                    </div>
                
              <div class="news_box">
                    <a href="#"><img class="news_image" src="images/templatemo_image_07.jpg" alt="image" /></a>
                	<h3><a href="#">Aliquam tincidunt mauris sed</a></h3>
                    <p>Nam non nisl massa, vitae dapibus nisl. Vivamus iaculis gravida odio sed tempor. Fusce tempor faucibus est, ac feugiat metus accumsan sit amet.</p>
                    <div class="cleaner"></div>
                </div>
                
              <div class="news_box">
                    <a href="#"><img class="news_image" src="images/templatemo_image_08.jpg" alt="image" /></a>
               	<h3><a href="#">Curabitur quis nulla purus</a></h3>
                    <p> Praesent rhoncus faucibus nibh, non molestie lectus sagittis sed. Praesent ac sem lectus. Cras molestie elit sit amet velit tincidunt imperdiet. Mauris nulla purus.</p>
                <div class="cleaner"></div>
                </div>
                
                <div class="more float_r"><a href="#">View All</a></div>
                
                <div class="cleaner"></div>
                  
                </div>
            
            	<div class="box_bottom"><span></span></div>
            </div>
        	
        </div> <!-- end of templatemo_content -->
        
       	<div id="templatemo_right_sidebar">
        
        	<div class="templatemo_box">
            	<h2>My Login</h2>
                
                <div class="body">
                    <font color="red"><%=error %></font>
                    <table>
					<tr>
						<td>
                       		<b>User Name :</b>
                    	</td>
                  	</tr>
					<tr>	
						<td>
              				<input id="login" type="text" name="login" />
						</td>
					</tr>
					<tr>
						<td>
                       		<b>Password:</b>
                    	</td>
                  	</tr>
					<tr>	
						<td>
              				<input id="password" type="password" name="password" />
						</td>
					</tr>
					<tr>	
						<td>
              				<input type="button" value="Login" tabindex="7" onclick="Login();">
						</td>
					</tr>
					<tr>
           				<td>
                			<a onclick="NewUserRegistration();">New User? </a>
                 		</td>
					</tr>
					<tr>
                		<td>
              				<a onclick="ForgotPassword();">Forgot Password?</a>
        	  			</td>
       	 			</tr>
					</table>
                  
                </div>
            
            	<div class="box_bottom"><span></span></div>
            </div>
            
            <div class="sidebar_box">
            	<a href="http://www.flashmo.com/page/1" target="_parent"><img src="images/nightlife.png" alt="Night Life" /></a>            </div>
            
            <div class="sidebar_box">
            	<a href="http://www.templatemo.com/page/1" target="_parent"><img src="images/city-zoo.png" alt="City Zoo" /></a>            </div>
        
      </div> <!-- end of right_sidebar -->
        
        <div class="cleaner"></div>
    
    </div> <!-- end of templatemo_content_wrapper -->

</div> <!-- end of templatemo_wrapper -->

<div id="templatemo_footer_wrapper">

	<div id="templatemo_footer">

        <ul class="footer_menu">
        	<li><a href="#">Homepage</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Life Style</a></li>
            <li><a href="#">Environments</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Videos</a></li>
            <li class="last_menu"><a href="#">Contact</a></li>
        </ul>
    
        Copyright © 2048 <a href="#">Your Company Name</a> | 
    <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a href="http://www.templatemo.com" target="_parent">Free CSS Templates</a></div> 
	<!-- end of footer -->
</div> <!-- end of templatmeo_footer_wrapper -->
<div align=center>This template  downloaded form <a href='http://all-free-download.com/free-website-templates/'>free website templates</a></div></form>
</body>
</html>