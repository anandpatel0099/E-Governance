package Income.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import Income.vo.incomeVO;
import Income.vo.masterVO;
import Login.VO.persondetailsVO;

public class IncomeDAO 
{
	public int incert(masterVO mt)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.save(mt);	
		tx.commit();
		
		
		return Token;
	}
	
	public void InsertIncome(incomeVO in)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.save(in);	
		tx.commit();
	}
	public List getData()
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		String q="select income from Income.vo.incomeVO income";
		Query query=session.createQuery(q);
		List qlist=query.list();
		return qlist;
	}
	public List getIncome(int no)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		String q="select income from Income.vo.incomeVO income where income.TokenNumber=:tk";
		Query query=session.createQuery(q);
		
		query.setInteger("tk", no);
		List qlist=query.list();
		return qlist;
	}
	public void updateStatus(incomeVO pd)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.update(pd);	
		tx.commit();

	}
	public List getIncomeStatus(int no)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		String q="select m from Income.vo.masterVO m where m.id=:tk";
		Query query=session.createQuery(q);
		
		query.setInteger("tk", no);
		List qlist=query.list();
		return qlist;
	}
	public void updateStatusMaster(masterVO pd)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.update(pd);	
		tx.commit();

	}
	public List getDataReject()
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		String q="select income from Income.vo.incomeVO income where income.Status=:st";
		Query query=session.createQuery(q);
		query.setString("st", "Rejected");
		List qlist=query.list();
		return qlist;
	}
	public List getDataPend()
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		String q="select income from Income.vo.incomeVO income where income.Status=:st";
		Query query=session.createQuery(q);
		query.setString("st", "Pending");
		List qlist=query.list();
		return qlist;
	}
	public List getDataApprov()
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		String q="select income from Income.vo.incomeVO income where income.Status=:st";
		Query query=session.createQuery(q);
		query.setString("st", "Approved");
		List qlist=query.list();
		return qlist;
	}
}
