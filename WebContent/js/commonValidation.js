function onlyAlphabatesForNames(control)   
{              
 var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var value="";
 var valid=true;
 for (var i=0; i<control.value.length;i++) 
               {             
                  if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {     
                    value=value+control.value.charAt(i);
                 }               
                 else
                 {  
                   valid=false;
                 }
              }     
              
              if(!valid)
              {     
                  alert("Only Alphabates are allowed without spaces"); 
                  control.value=value;
                  return false;
              }
              return true;              
} 

function OnlyAplha(control)
{   
              var iChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
              var value="";
              var valid=true;
              for (var i=0; i<control.value.length; i++) 
              {              
                 if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                    value=value+control.value.charAt(i);
                 }               
                 else
                    valid=false;
              }     
              
              if(!valid)
              {
                  alert('Numbers and special characters are not allowed');
                  control.value="";
                  control.focus();
                  return false;
              }
              return true;
  }
 
function onlyNumbers(control) 
   {               
              var iChars = "1234567890";
              var value="";
              var valid=true;
              
              for (var i=0; i<control.value.length;i++) 
               {              
                  if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                 
                    value=value+control.value.charAt(i);
                 }               
                 else
                 {                 
                    valid=false;
                 }
              }                   
              if(!valid)
              {              
                  alert('Alphabets and special characters are not allowed')             
                  control.value="";
                  control.focus();
                  return false;
              }
              return true;              
   }

function onlyAlphaNumeric(control) 
{                
              var iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq&/\,.-_  ";
              var value="";
              var valid=true;
              
              for (var i=0; i<control.value.length;i++) 
               {  
               if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                 
                    value=value+control.value.charAt(i);
                 }               
                 else
                 {                 
                    valid=false;
                 }
              }                   
              if(!valid)
              {              
                   control.value="";
                  alert('Special characters are not allowed.');             
                  //control.value="";
                  control.focus();
                  return false;
              }
              return true;              
}    

function NospecialChar(control) 
{         
              var iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq ";
              var value="";
              var valid=true;
              
              for (var i=0; i<control.value.length;i++) 
               {              
                  if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                 
                    value=value+control.value.charAt(i);
                 }               
                 else
                 {                 
                    valid=false;
                 }
              }                   
              if(!valid)
              {              
                  alert('Special characters are not allowed.');             
                  control.value="";
                  control.focus();
                  return false;
              }
              return true;              
}    
function remove(control)
{    
	var who=document.getElementsByName(control)[0];    
	var who2= who.cloneNode(false);    
	who2.onchange= who.onchange;    
	who.parentNode.replaceChild(who2,who);
}
function setMaxLength(control,maxlen)
{
  if(control.value.length>maxlen)
  {
  control.value=control.value.substring(0,maxlen);
  alert("You can enter maximum "+maxlen+" character in this field");
  }
}
function disableCtrlKeyCombination(e)
{
        //list all CTRL + key combinations you want to disable
        var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
        
        var key;
        var isCtrl;

        if(window.event)
        {
                key = window.event.keyCode;     //IE
                if(window.event.ctrlKey)
                        isCtrl = true;
                else
                        isCtrl = false;
        }
        else
        {
                key = e.which;     //firefox
                if(e.ctrlKey)
                        isCtrl = true;
                else
                        isCtrl = false;
        }

        //if ctrl is pressed check if other key is in forbidenKeys array
        if(isCtrl)
        {
             var len = forbiddenKeys.length;
               
                for(i=0; i<len; i++)
                {
               
                        //case-insensitive comparation
                        if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
                        {
                                 alert('Ctrl + ' + String.fromCharCode(key) +' has been disabled.');
                                return false;
                        }
                }
        }
        return true;
}

function checkLengthofPincode(control)
{
 lStrlength= control.value; 
 if(control.value !="")
   {
     if(onlyNumbers(control))
     {
       if(lStrlength.length==6)
       {
    	   return true;
       }
       else 
       {
         alert('Invalide pincode');
         control.focus();
         return false;
       }
     }
     else{
    	 return false;
     }
   
   }
 else {
	return false; 
 }
}

function onlyFloat(control, roundFlg) 
   {           
              var iChars = "1234567890.";
              var value="";
              var valid=true;
              
              if(roundFlg && ((control.value).split(".").length - 1 ) > 1)
              {
                  alert("Please enter correct amount");
                  control.value="0";
                  control.focus();
                  return false;
              }
              
              for (var i=0; i<control.value.length ;i++) 
               {              
                  if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                 
                    value=value+control.value.charAt(i);
                    
                 }               
                 else
                 {                 
                    valid=false;
                    break;
                 }
              }                   
              if(!valid)
              {              
                  alert("Alphabets and special characters are not allowed");
                  control.value="0";
                  control.focus();
                  return false;
              }
              
              var fnlAmount = roundNumber(control.value,2);
              control.value = fnlAmount;
              //alert(fnlAmount)
              return true;              
   }


function roundNumber(num, dec) 
{
  var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
function initialCap(control)
{
//    alert(control.value);
    control.value = control.value.substr(0, 1).toUpperCase() + control.value.substr(1);
}

function Capital(value)
{
     if(value !="")
     {
        var firstLetter=value.substring(0,1).toUpperCase();
        var resetOfWord=value.substring(1,value.length).toLowerCase();
        value=firstLetter+resetOfWord;
     }
     return value;
}
function checkSpecialChar(e)
{
     var key;
     var keychar;
       
     if (e)
         key = e.keyCode;
     else if (e)
         key = e.which;
     else
         return true;
         
     keychar = String.fromCharCode(key);
     //alert('keychar: '+keychar); 
   
     //var iChars = "`[]&_-=$#:;,@!*?%~(){}<>/^\\\'|\"+";
     var iChars = "`&_$;@*%~{}<>^'|%+";
     
     if ( iChars.indexOf(keychar) != -1 )
     {
         return false;
     }
      
     return true;       
}

function compareWithExistingLicenseNo(control,licNoListObj)
{
	
	for(i=0;i<licNoListObj.length;i++)
	{
	  if(licNoListObj.options[i].text == control.value)
	    {
		  control.value="";	
		  alert("Please Enter License No which does not Exist in the System");
		  control.focus();
	       return false;
	    }
	}
	
	
   return true;
}

function passwordCheck(control) 
{         
              var iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq&/\.-_@!#$%^*()";//These Characters are allowed for textbox.
             
              var value="";
              var valid=true;
                        
              for (var i=0; i<control.value.length;i++) 
               {        
            	  
                  if (iChars.indexOf(control.value.charAt(i))!=-1) 
                 {
                 
                    value=value+control.value.charAt(i);
                    
                 }               
                 else
                 {   
                	
                    valid=false;
                 }
              }                   
              if(!valid)
              {              
                  alert('Special characters like ` = \' " + % , and Space are not allowed.');             
                  control.value="";
                  control.focus();
                  return false;
              }
              return true;              
} 

function setTabIndexForForm(bodyElement,tabindex)
{
  	var allChildren = bodyElement.childNodes;
	
	var i = 0;
	var strNames = ''
	for(i=0; i < allChildren.length; i++)
	{
		var node = allChildren[i];
		if(node.tagName && node.tagName!='' && (node.tagName=='INPUT' || node.tagName=='SELECT' || node.tagName=='TEXTAREA' || node.tagName=='A' || node.tagName=='IMG')){
			node.tabIndex = parseInt(tabindex);
			tabindex = parseInt(tabindex) + 1;
		}
		tabindex = setTabIndexForForm(node,tabindex);
	}
	return tabindex;
}
//calculates age when DOB is in dd/mm/yyyy format - Amit
function calculateAge(control)
{var age=-1;
if(control)
{
	if(control.value!='')
	{
		if(document.getElementById("serverDate"))
		{
			var enteredDate= control.value;
			var sp="/";
			var sp1;
			var sp2;

			sp1=enteredDate.indexOf("/",0);
			sp2=enteredDate.indexOf("/",parseInt(sp1)+1);
			var enteredDay=enteredDate.substring(0,parseInt(sp1));
			var enteredMonth=enteredDate.substring(parseInt(sp1)+1,parseInt(sp2));
			var enteredYear=enteredDate.substring(parseInt(sp2)+1,enteredDate.length);
			var bday=parseInt(enteredDay);
			var bmo=(parseInt(enteredMonth)-1);
			var byr=parseInt(enteredYear);
			
			var serverDate=document.getElementById("serverDate").value;
			sp1=serverDate.indexOf("/",0);
			sp2=serverDate.indexOf("/",parseInt(sp1)+1);
			var serverDay=serverDate.substring(0,parseInt(sp1));
			var serverMonth=serverDate.substring(parseInt(sp1)+1,parseInt(sp2));
			var serverYear=serverDate.substring(parseInt(sp2)+1,serverDate.length);
			var tday=parseInt(serverDay);
			var tmo=(parseInt(serverMonth)-1);
			var tyr=parseInt(serverYear);
			
			if((tmo > bmo)||(tmo==bmo & tday>=bday))
			{
				age=tyr-byr;
			}
			else
			{
				age=tyr-byr-1;
			}
		
		
		}
	}

}

return age;
}

function calculateAge1(dob)
{
	var age=-1;

		if(document.getElementById("serverDate"))
		{
			var enteredDate= dob;
			var sp="/";
			var sp1;
			var sp2;

			sp1=enteredDate.indexOf("/",0);
			sp2=enteredDate.indexOf("/",parseInt(sp1)+1);
			var enteredDay=enteredDate.substring(0,parseInt(sp1));
			var enteredMonth=enteredDate.substring(parseInt(sp1)+1,parseInt(sp2));
			var enteredYear=enteredDate.substring(parseInt(sp2)+1,enteredDate.length);
			var bday=parseInt(enteredDay);
			var bmo=(parseInt(enteredMonth)-1);
			var byr=parseInt(enteredYear);
			
			var serverDate=document.getElementById("serverDate").value;
			sp1=serverDate.indexOf("/",0);
			sp2=serverDate.indexOf("/",parseInt(sp1)+1);
			var serverDay=serverDate.substring(0,parseInt(sp1));
			var serverMonth=serverDate.substring(parseInt(sp1)+1,parseInt(sp2));
			var serverYear=serverDate.substring(parseInt(sp2)+1,serverDate.length);
			var tday=parseInt(serverDay);
			var tmo=(parseInt(serverMonth)-1);
			var tyr=parseInt(serverYear);
			
			if((tmo > bmo)||(tmo==bmo & tday>=bday))
			{
				age=tyr-byr;
			}
			else
			{
				age=tyr-byr-1;
			}
		
		
		}
	

return age;
}


function compareDateForDOB(paramFirstDate,paramSecondDate){
	var DD = paramFirstDate.substr(0,2);
	var MM = paramFirstDate.substr(3,2);
	var YY = paramFirstDate.substr(6,4);
	var dd = paramSecondDate.substr(0,2);
	var mm = paramSecondDate.substr(3,2);
	var yy = paramSecondDate.substr(6,4);
	var toDate  = new Date(yy, mm - 1, dd); 
	var dob = new Date(YY, MM - 1, DD);
	var diff = toDate.getTime() - dob.getTime();
	return (diff);
}

function checkDOB(tbox,msg){
	var currentTime = new Date();
  	var day=currentTime.getDate();
  	var month=currentTime.getMonth() + 1;
  	var year=currentTime.getFullYear();
  	if(day>=1 && day<=9)
    	day='0'+day;
  	if(month>=1 && month<=9)
    	month='0'+month;
  	var sysdate=day+'/'+month+'/'+year;
  	var fromDate = sysdate;
	var toDate = tbox.value;
  	if(toDate != "" && fromDate != ""){
		var result=compareDateForDOB(fromDate,toDate);
		if(result<=0){
			return true;				
		}else{
        	alert(msg);
  			tbox.value = "";
			return false;						
		}
  	}
  	return true;
}

function compareAnyDates(tboxgreater,tboxsmaller,msg)
{
var result=0;
if(tboxgreater.value!=""&&tboxsmaller.value!="")
{
	result=compareDateForDOB(tboxgreater.value,tboxsmaller.value);
	if(result<=0){
		return true;				
	}else{
    	alert(msg);
			tbox.value = "";
		return false;						
	}
	}
	return true;
}

