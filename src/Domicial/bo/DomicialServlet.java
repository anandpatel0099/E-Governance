package Domicial.bo;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Login.DAO.LoginDAO;
import Login.VO.persondetailsVO;

public class DomicialServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DomicialServlet() {
        super();
    }

	public void init(ServletConfig config) throws ServletException {
		System.out.println("in domicial servlet");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String actionval=request.getParameter("actionval");
		System.out.println(actionval);
		String un="";
		
		RequestDispatcher rd=null;
		if(actionval.equals("CalltoDAO"))
		{
			un=request.getParameter("un").toString();
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
					request.setAttribute("sal", persondtls.getSalutation());
					request.setAttribute("gen", persondtls.getGender());
					request.setAttribute("fn", persondtls.getFirstname());
					request.setAttribute("mn", persondtls.getMiddlename());
					request.setAttribute("ln", persondtls.getLastname());
					request.setAttribute("dob", persondtls.getDob());
					request.setAttribute("ph", persondtls.getPhoneno());
					request.setAttribute("age", persondtls.getAge());
					request.setAttribute("mob", persondtls.getMobno());
					request.setAttribute("email",persondtls.getEmail());
					request.setAttribute("add1", persondtls.getAdd1());
					request.setAttribute("add2",persondtls.getAdd2());
					request.setAttribute("con", persondtls.getCountry());
					request.setAttribute("st", persondtls.getState());
					request.setAttribute("dis", persondtls.getDistrict());
					request.setAttribute("pin", persondtls.getPin());
					rd=request.getRequestDispatcher("/DomicialModule/GetDonicialCerti.jsp");
				}
			}
			
		}
		
		else if(actionval.equals("GetDomicial"))
		{
			
		}
		rd.forward(request, response);
	}

}
