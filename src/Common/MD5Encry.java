package Common;
import java.io.UnsupportedEncodingException;  
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
import java.util.Formatter;  
import java.util.Random;

public class MD5Encry {
//radom number cose begin	
public String RandomNumber()
{
	char random[]=new char[8];
    final String alphabet = "0123456789ABCDE";
    final int N = alphabet.length();

    Random r = new Random();

    for (int i = 0; i < 8  ; i++) 
    {
            //System.out.print(alphabet.charAt(r.nextInt(N)));
    	random[i]=alphabet.charAt(r.nextInt(N));
    }
    String s = String.copyValueOf(random);
    return s;
}//end
         
     public static String getMD5HashVal(String strToBeEncrypted) {  
      String encryptedString = null;  
      byte[] bytesToBeEncrypted;  
      try {  
       // convert string to bytes using a encoding scheme  
       bytesToBeEncrypted = strToBeEncrypted.getBytes("UTF-8");  
       MessageDigest md = MessageDigest.getInstance("MD5");  
       byte[] theDigest = md.digest(bytesToBeEncrypted);  
                            // convert each byte to a hexadecimal digit  
       Formatter formatter = new Formatter();  
       for (byte b : theDigest) {  
        formatter.format("%02x", b);  
       }  
       encryptedString = formatter.toString().toLowerCase();  
      
      } catch (UnsupportedEncodingException e) {  
       e.printStackTrace();  
      } catch (NoSuchAlgorithmException e) {  
       e.printStackTrace();  
      }  
      return encryptedString;  
     }  
    }  


