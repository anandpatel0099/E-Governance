package License.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import Income.vo.incomeVO;
import License.vo.FireArmVO;

public class FireArmDAO {
	
	public void InsertLicense(FireArmVO faVO)
	{
		SessionFactory sf=new Configuration().configure().buildSessionFactory();

		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		session.save(faVO);	
		tx.commit();
	}
	

}
