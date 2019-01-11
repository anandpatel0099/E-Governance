package License.Bo;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Income.dao.IncomeDAO;
import Income.vo.masterVO;
import License.dao.FireArmDAO;
import License.vo.FireArmVO;
import Login.DAO.LoginDAO;
import Login.VO.persondetailsVO;

public class LicenseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LicenseServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		masterVO ms = new masterVO();
		FireArmVO faVO = new FireArmVO();
		IncomeDAO income=new IncomeDAO();
		FireArmDAO fa=new FireArmDAO();
		
		String action=request.getParameter("actionval").toString();
		String un="";		
		RequestDispatcher rd=null;
		if(action.equals("CalltoDAO")) {
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
					request.setAttribute("un", un);
					rd=request.getRequestDispatcher("/LicenseModule/Get_FireArm_certi.jsp");
				}
			}
		}
		else if(action.equals("CalltoDAOConfirm"))
		{
			un=request.getParameter("un").toString();
			String application="License";
			String fn=request.getParameter("fn");
			String ln=request.getParameter("ln");
			String fullname=fn+" "+ln;
			String date=getDate();
			
			String status="Pending";
			
			ms.setApplicationName(application);
			ms.setApplicantName(fullname);
			ms.setDateofSubmit(date);
			ms.setStatus(status);
			
			
			int TokenNumber=income.incert(ms);	//Inserted in application master table
												//and return Token number
			System.out.println("Master Table update completed (License)");
			
			String fthname=request.getParameter("fthn");
			String fthdob=request.getParameter("fthdob");
			String fthage=request.getParameter("fthage");
			String spsn=request.getParameter("spsn");
			String spsdob=request.getParameter("spsdob");
			String spsage=request.getParameter("spsage");
			String Convicted=request.getParameter("Convicted");
		    String datefrom=request.getParameter("datefrom");
			String dateto=request.getParameter("dateto");
			String Prohibited=request.getParameter("Prhibited");
			String applied=request.getParameter("applied");
			String suspended=request.getParameter("suspended");
			String Possessor=request.getParameter("Possessor");
			String exemptee=request.getParameter("exemptee");
			String check1=request.getParameter("check1");
			String need=request.getParameter("need");
			String description=request.getParameter("description");
			String area=request.getParameter("area");
			String kept=request.getParameter("kept");
			String otherpart=request.getParameter("otherpart");
			String claims=request.getParameter("claims");
			
			faVO.setTokenNumber(TokenNumber);
			faVO.setApplicationName(application);
			faVO.setApplicantName(fullname);
			faVO.setDateofSubmit(date);
			faVO.setStatus(status);
			faVO.setFatherName(fthname);
			faVO.setFatherDOB(fthdob);
			faVO.setFatherAge(fthage);
			faVO.setSpouseName(spsn);
			faVO.setSpouseDOB(spsdob);
			faVO.setSpouseAge(spsage);
			faVO.setConvicted(Convicted);
			faVO.setPeriodFrom(datefrom);
			faVO.setPeriodTo(dateto);
			faVO.setProhibited(Prohibited);
			faVO.setApplied(applied);
			faVO.setSuspended(suspended);
			faVO.setPossessor(Possessor);
			faVO.setExemptee(exemptee);
			faVO.setCheck1(check1);
			faVO.setNeed(need);
			faVO.setDescription(description);
			faVO.setArea(area);
			faVO.setKept(kept);
			faVO.setOtherpart(otherpart);
			faVO.setClaims(claims);
			faVO.setUn(un);

			
			fa.InsertLicense(faVO);
			
			String msg="License";
			request.setAttribute("an", fullname);
			request.setAttribute("app", application);
			request.setAttribute("tn", TokenNumber);
			request.setAttribute("app", msg);
			
			rd=request.getRequestDispatcher("/IncomeModule/generator.jsp");
			
		}
		rd.forward(request, response);	
	
	}
	public String getDate()
	{
		SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
		Date d = new Date();
	
		System.out.println(d);
	
		System.out.println("--->"+sdf.format(d));
		String strdate=sdf.format(d);
		return strdate;
	}

}
