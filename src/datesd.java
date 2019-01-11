import java.text.SimpleDateFormat;
import java.util.Date;


public class datesd {

	public static void main(String[] args) {

		SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
		Date d = new Date();
		
		System.out.println(d);
		
		System.out.println("--->"+sdf.format(d));
		

		
	}

}
