package Login.DAO;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import Login.VO.persondetailsVO;

public class LoginDAO
{
	public List verify()
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session=sf.openSession();
		
		String q="select p from persondetailsVO p";
		Query query=session.createQuery(q);
		List qlist=query.list();
		return qlist;
	}
	
	public void enter(persondetailsVO pd)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.save(pd);	
		tx.commit();

	}
	
	public List forgotpassword(String un)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session=sf.openSession();
		
		String q="select p from persondetailsVO p where p.username=:unm";
		Query query=session.createQuery(q);
		
		query.setString("unm", un);
		
		List qlist=query.list();
		return qlist;
	}
	public void updatePassword(persondetailsVO pd)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.update(pd);	
		tx.commit();

	}
	
	public List verify1(String un,String pwd)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session=sf.openSession();
		
		String q="select p from persondetailsVO p where p.username=:unm and p.password=:pd";
		Query query=session.createQuery(q);
		
		query.setString("unm", un);
		query.setString("pd", pwd);
		List qlist=query.list();
		return qlist;
	}


}