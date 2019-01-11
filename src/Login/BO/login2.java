package Login.BO;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Common.MD5Encry;
import Login.DAO.LoginDAO;
import Login.VO.persondetailsVO;


public class login2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public login2() 
    {
        super();
    }

	public void init(ServletConfig config) throws ServletException {
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		HttpSession hs=request.getSession();
		String actionval=request.getParameter("actionval").toString();
		//account information
		String username="";
		String password="";
		String conpwd="";
		String secque="";
		String answer="";
		
		boolean flag=true;
		String error="";
		String msg="";
		
		
		//personnal details
		String salutation="";
		String gender="";
		String firstname="";
		String middlename="";
		String lastname="";
		String dob="";
		String age="";
		String phoneno="";
		String mobno="";
		String email="";
		
		//present address
		String add1="";
		String add2="";
		String country="";
		String state="";
		String district="";
		String pin="";
		
		//permanent address
		String padd1="";
		String padd2="";
		String pcountry="";
		String pstate="";
		String pdistrict="";
		String ppin="";
		
		//other details
		
		String nationality="";
		String occupation="";
		String religion="";
		String category="";
		String caste="";
		String subcaste="";
		String idproof="";
		String cardno="";
		String placeofissue="";
		String dateofissue="";
		String withnewpwd="false";
		
		RequestDispatcher rd=null;
		if(actionval.equals("ajaxactionval"))
		{
			username=request.getParameter("name");
			System.out.println("username in LoginBO---->"+username);
			LoginDAO ld = new LoginDAO();
			List l =ld.verify();
			System.out.println("list sizze"+l.size());
			
			if(l.size()!=0)
			{
				persondetailsVO persondtls= new persondetailsVO();
				Iterator it=l.iterator();
				while(it.hasNext())
				{
					Object element = it.next();
					persondtls=(persondetailsVO)element;
					System.out.println("username--->"+persondtls.getUsername()+" password--->"+persondtls.getPassword());
					if(username.equals(persondtls.getUsername()))
					{
						response.setContentType("text/html");
						response.getWriter().write("User Name already Excits");
					}
				}
			}
			
			
		}
		else if(actionval.equals("SubmitData"))
		{
			System.out.println("welcome");
			if(request.getParameter("login")!=null && !request.getParameter("login").toString().equals(""))
			{
				username=request.getParameter("login");
				System.out.println(username);
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("password")!=null && !request.getParameter("password").toString().equals(""))
			{
				password=request.getParameter("password");
				System.out.println(password);
			}
			else
			{ 
				flag=false;
			}
			System.out.println("flag is " + flag);
			if(flag==true)
			{
				LoginDAO ld = new LoginDAO();
				List l =ld.verify1(username, password);
				System.out.println("list sizze"+l.size());
				
				if(l.size()==0)
				{
					request.setAttribute("error", error);
					rd=request.getRequestDispatcher("Login/index.jsp");
					error="Please Enter Correct User Name and Password";
					rd.forward(request, response);
				}
				else
				{
					persondetailsVO persondtls= new persondetailsVO();
					Iterator it=l.iterator();
					while(it.hasNext())
					{
						Object element = it.next();
						persondtls=(persondetailsVO)element;
						System.out.println("username--->"+persondtls.getUsername()+" password--->"+persondtls.getPassword());

						if(username.equals(persondtls.getUsername()) && password.equals(persondtls.getPassword()) && "true".equals(persondtls.getWithnewpwd()))
						{
							rd = request.getRequestDispatcher("Login/EnterNewDetails.jsp");
							System.out.println(persondtls.getUsername());
							request.setAttribute("un", persondtls.getUsername());
							rd.forward(request, response);
						}
						else if(username.equals("income"))
						{
							System.out.println("nhibihihi");
							rd = request.getRequestDispatcher("/IncomeModule/HaHaHaHa.jsp");
							rd.forward(request, response);
						}
						/*else if(username.equals(persondtls.getUsername()) && password.equalsIgnoreCase(persondtls.getPassword()) && persondtls.getCustomertype().equals("income"))
						{
							System.out.println("nhibihihi");
							hs.setAttribute("un", username);
							rd = request.getRequestDispatcher("/IncomeModule/HaHaHaHa.jsp");
						}*/
						else if(username.equals(persondtls.getUsername()) && password.equals(persondtls.getPassword()))
						{
							hs.setAttribute("un", username);
							rd = request.getRequestDispatcher("Login/loggedin.jsp");
							rd.forward(request, response);
						}
						else
						{
							error="Please Enter Correct User Name and Password";
							request.setAttribute("error", error);
							rd=request.getRequestDispatcher("Login/index.jsp");
							rd.forward(request, response);
						}
											
					}
				}
			}
			else
			{
				error="Please Enter Correct User Name and Password";
				request.setAttribute("error", error);
				rd=request.getRequestDispatcher("Login/index.jsp");
				rd.forward(request, response);
			}
			
		}
		else if(actionval.equals("NewUser"))
		{
			System.out.println("new user");
			if(request.getParameter("login")!=null && !request.getParameter("login").toString().equals(""))
			{
				username=request.getParameter("login").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("password")!=null && !request.getParameter("password").toString().equals(""))
			{
				password=request.getParameter("password").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("conpwd")!=null && !request.getParameter("conpwd").toString().equals(""))
			{
				conpwd=request.getParameter("conpwd").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("secque")!=null && !request.getParameter("secque").toString().equals(""))
			{
				secque=request.getParameter("secque").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("answer")!=null && !request.getParameter("answer").toString().equals(""))
			{
				answer=request.getParameter("answer").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("salutation")!=null && !request.getParameter("salutation").toString().equals(""))
			{
				salutation=request.getParameter("salutation").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("gender")!=null && !request.getParameter("gender").toString().equals(""))
			{
				gender=request.getParameter("gender").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("firstname")!=null && !request.getParameter("firstname").toString().equals(""))
			{
				firstname=request.getParameter("firstname").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("middlename")!=null && !request.getParameter("middlename").toString().equals(""))
			{
				middlename=request.getParameter("middlename").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("lastname")!=null && !request.getParameter("lastname").toString().equals(""))
			{
				lastname=request.getParameter("lastname").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("dob")!=null && !request.getParameter("dob").toString().equals(""))
			{
				dob=request.getParameter("dob").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("age")!=null && !request.getParameter("age").toString().equals(""))
			{
				age=request.getParameter("age").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("phoneno")!=null && !request.getParameter("phoneno").toString().equals(""))
			{
				phoneno=request.getParameter("phoneno").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("mobno")!=null && !request.getParameter("mobno").toString().equals(""))
			{
				mobno=request.getParameter("mobno").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("email")!=null && !request.getParameter("email").toString().equals(""))
			{
				email=request.getParameter("email").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("add1")!=null && !request.getParameter("add1").toString().equals(""))
			{
				add1=request.getParameter("add1").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("country")!=null && !request.getParameter("country").toString().equals(""))
			{
				country=request.getParameter("country").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("state")!=null && !request.getParameter("state").toString().equals(""))
			{
				state=request.getParameter("state").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("district")!=null && !request.getParameter("district").toString().equals(""))
			{
				district=request.getParameter("district").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("pin")!=null && !request.getParameter("pin").toString().equals(""))
			{
				pin=request.getParameter("pin").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("padd1")!=null && !request.getParameter("padd1").toString().equals(""))
			{
				padd1=request.getParameter("padd1").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("pcountry")!=null && !request.getParameter("pcountry").toString().equals(""))
			{
				pcountry=request.getParameter("pcountry").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("pstate")!=null && !request.getParameter("pstate").toString().equals(""))
			{
				pstate=request.getParameter("pstate").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("pdistrict")!=null && !request.getParameter("pdistrict").toString().equals(""))
			{
				pdistrict=request.getParameter("pdistrict").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("ppin")!=null && !request.getParameter("ppin").toString().equals(""))
			{
				ppin=request.getParameter("ppin").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("nationality")!=null && !request.getParameter("nationality").toString().equals(""))
			{
				nationality=request.getParameter("nationality").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("occupation")!=null && !request.getParameter("occupation").toString().equals(""))
			{
				occupation=request.getParameter("occupation").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("religion")!=null && !request.getParameter("religion").toString().equals(""))
			{
				religion=request.getParameter("religion").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("category")!=null && !request.getParameter("category").toString().equals(""))
			{
				category=request.getParameter("category").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("caste")!=null && !request.getParameter("caste").toString().equals(""))
			{
				caste=request.getParameter("caste").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("subcaste")!=null && !request.getParameter("subcaste").toString().equals(""))
			{
				subcaste=request.getParameter("subcaste").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("idproof")!=null && !request.getParameter("idproof").toString().equals(""))
			{
				idproof=request.getParameter("idproof").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("cardno")!=null && !request.getParameter("cardno").toString().equals(""))
			{
				cardno=request.getParameter("cardno").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("placeofissue")!=null && !request.getParameter("placeofissue").toString().equals(""))
			{
				placeofissue=request.getParameter("placeofissue").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("dateofissue")!=null && !request.getParameter("dateofissue").toString().equals(""))
			{
				dateofissue=request.getParameter("dateofissue").toString();
			}
			else
			{ 
				flag=false;
			}
			
			if(flag==true)
			{
				persondetailsVO pd=new persondetailsVO();
			
			
				pd.setUsername(username);
				pd.setPassword(password);
				pd.setConpwd(conpwd);
				pd.setSecque(secque);
				pd.setAnswer(answer);
			
				pd.setSalutation(salutation);
				pd.setGender(gender);
				pd.setFirstname(firstname);
				pd.setLastname(lastname);
				pd.setMiddlename(middlename);
				pd.setDob(dob);
				pd.setAge(age);
				pd.setPhoneno(phoneno);
				pd.setMobno(mobno);
				pd.setEmail(email);
			
				pd.setAdd1(add1);
				pd.setAdd2(add2);
				pd.setCountry(country);
				pd.setState(state);
				pd.setDistrict(district);
				pd.setPin(pin);
			
				pd.setPadd1(padd1);
				pd.setPadd2(padd2);
				pd.setPcountry(pcountry);
				pd.setPstate(pstate);
				pd.setPdistrict(pdistrict);
				pd.setPpin(ppin);
				
				pd.setNationality(nationality);
				pd.setOccupation(occupation);
				pd.setReligion(religion);
				pd.setCategory(category);
				pd.setCaste(caste);
				pd.setSubcaste(subcaste);
				pd.setIdproof(idproof);
				pd.setCardno(cardno);
				pd.setPlaceofissue(placeofissue);
				pd.setDateofissue(dateofissue);
				pd.setWithnewpwd("false");
				pd.setCustomertype("user");
			
				LoginDAO ld = new LoginDAO();
				ld.enter(pd);
				
				request.setAttribute("un", username);
				
				rd=request.getRequestDispatcher("/Login/sucessful.jsp");
				rd.forward(request, response);
			}
			else
			{
				rd=request.getRequestDispatcher("/Login/newuser.jsp");
				msg="Please enter the details carefully";
				request.setAttribute("msg", msg);
				rd.forward(request, response);
			}
		}
		else if(actionval.equals("ForgotPwd"))
		{
			System.out.println("in Forgot password");
			MD5Encry md = new MD5Encry();
			if(request.getParameter("un")!=null && !request.getParameter("un").toString().equals(""))
			{
				username=request.getParameter("un").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("dob")!=null && !request.getParameter("dob").toString().equals(""))
			{
				dob=request.getParameter("dob").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("secque")!=null && !request.getParameter("secque").toString().equals(""))
			{
				secque=request.getParameter("secque").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("ans")!=null && !request.getParameter("ans").toString().equals(""))
			{
				answer=request.getParameter("ans").toString();
			}
			else
			{
				flag=false;
			}
			
			if(flag!=false)
			{
				LoginDAO ld = new LoginDAO();
				List l =ld.forgotpassword(username);
				if(l.size()==0)
				{
					String msg3="No details exists";
					request.setAttribute("msg3", msg3);
					rd=request.getRequestDispatcher("/Login/ForgetPwd.jsp");
					rd.forward(request, response);
					
				}
				else
				{
					persondetailsVO persondtls= new persondetailsVO();
					Iterator it=l.iterator();
					while(it.hasNext())
					{
						Object element = it.next();
						persondtls=(persondetailsVO)element;
						System.out.println("username--->"+persondtls.getUsername());

						if(username.equals(persondtls.getUsername())&& secque.equals(persondtls.getSecque())&& answer.equals(persondtls.getAnswer())&& dob.equals(persondtls.getDob()))
						{
							String random= md.RandomNumber();
							request.setAttribute("newpwd", random);
							//method call for md5
							String md5random = md.getMD5HashVal(random);
							persondtls.setPassword(md5random);
							persondtls.setConpwd(md5random);
							persondtls.setWithnewpwd("true");
							ld.updatePassword(persondtls);
							
							
							rd = request.getRequestDispatcher("/Login/displayNewPwd.jsp");
							rd.forward(request, response);
						}
						else
						{
							error="Please Enter Details carefully (match not found)";
							request.setAttribute("error", error);
							rd=request.getRequestDispatcher("/Login/ForgetPwd.jsp");
							rd.forward(request, response);
						}
											
					}
				}//end
			}
			else
			{
				String msg1="Please enter all the details carefully";
				rd=request.getRequestDispatcher("/Login/ForgetPwd.jsp");
				request.setAttribute("msg1", msg1);
				rd.forward(request, response);
			}
		}
		else if(actionval.equals("NewUserRegistration"))
		{
			rd=request.getRequestDispatcher("/Login/newuser.jsp");
			rd.forward(request, response);
		}
		else if(actionval.equals("ShowForgetPwd"))
		{
			rd=request.getRequestDispatcher("/Login/ForgetPwd.jsp");
			rd.forward(request, response);
		}
		else if(actionval.equals("BackToHomePage"))
		{
			rd=request.getRequestDispatcher("/Login/index.jsp");
			rd.forward(request, response);
		}
		else if(actionval.equals("MainUserScreen"))
		{
			String un=request.getParameter("un");
			if(request.getParameter("pwd")!=null && !request.getParameter("pwd").toString().equals(""))
			{
				password=request.getParameter("pwd").toString();
			}
			else
			{ 
				flag=false;
			}
			if(request.getParameter("conpwd")!=null && !request.getParameter("conpwd").toString().equals(""))
			{
				conpwd=request.getParameter("conpwd").toString();
			}
			else
			{ 
				flag=false;
			}
			if(password.equals(conpwd))
			{
				if(flag=true)
				{
					LoginDAO ld = new LoginDAO();
					List l =ld.verify();
					persondetailsVO persondtls= new persondetailsVO();
					Iterator it=l.iterator();
					while(it.hasNext())
					{
						Object element = it.next();
						persondtls=(persondetailsVO)element;

						if(un.equals(persondtls.getUsername()))
							{
								persondtls.setPassword(password);
								persondtls.setConpwd(conpwd);
								persondtls.setWithnewpwd("false");
								ld.updatePassword(persondtls);
								rd = request.getRequestDispatcher("/Login/loggedin.jsp");
								rd.forward(request, response);
							}
					}
				}
				else
				{
					String message = "Please fill the details";
					request.setAttribute("message", message);
					rd=request.getRequestDispatcher("/Login/EnterNewDetails.jsp");
					rd.forward(request, response);
				}
			}
			else
			{
				String message = "New Password and Confirm Passord have to be Same";
				request.setAttribute("message", message);
				rd=request.getRequestDispatcher("/Login/EnterNewDetails.jsp");
				rd.forward(request, response);
			}
		
		}
		//rd.forward(request, response);
		
	}

}
