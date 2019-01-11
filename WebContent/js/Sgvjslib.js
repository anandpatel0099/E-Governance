////////////////////////////////////////////////////////////////////////////////
// FILENAME    : Sgvjslib.js
// VERSION     : 1.0
// AUTHOR      : T.Sirisha
// REV. HISTORY: Ammu K.V.V.S. Sarma
//               Added code for bypassing validation for languages other than
//               english in 5 functions namely isAlphanumeric,isAlphanumeric1,
//               isAlphabetic,isAlphabetic1,isAlphanumericWithComma
//               
// DESCRIPTION : This file contains the basic generic Java Script 
//               functionalities used across.
//               Pls. note that this file is under revision.
///////////////////////////////////////////////////////////////////////////////
// -----------------------------------------------------------------------------
// Setting global variables
// -----------------------------------------------------------------------------
var checkObjects        = new Array();      // Array containing the objects to validate.
var errors              = "";               // Variable holding the error message.
var ALPHA_NUMERIC       = 22;               // Alpha Numeric constant
var ALPHA               = 23;               // Alphabetes
var FONT_LOWER          = 1;                // Upper Case
var FONT_UPPER          = 2;                // Lower Case
var MIDDLE_SPACES       = 1;                // Middle Spaces. 1 --> no middle spaces allowed.

////////////////////////////Global Function////////////////////

//This is a Global Function to be used by every function in this script file 
//Author: Parimala
//Purpose:to get the array of alert messages from properties file
function getAlertMsgs()
{

  var msgsval=document.forms[0].msgs.value;
  arrayofmsgs=msgsval.split('~');
  return arrayofmsgs;
  
}
function getMsgs(x)
{
      
      alert(" "+ arrayofmsgs[x]);
      return;
  
}

function getValMsgs(label,x)
{    
      arrayofmsgs=getAlertMsgs()
      alert(label +" "+ arrayofmsgs[x]);
      return;
      
}


/////////////////////BASIC FUNCTIONS BEGIN HERE//////////////////////

//*******************************************************************
//This function is to Scroll the text "Tata Consultancy Services" in footer.
function infoscroll(seed,looped)
{
  var text1  = "Tata Consultancy Services..................";
  var text2  = "";
  var msg=text1+text2;
  var putout = " ";
  var c   = 1;

  if (seed > 100)
  {
     seed--;
     var cmd="infoscroll(" + seed + "," + looped + ")";
     timerTwo=window.setTimeout(cmd,100);
  }
  else if (seed <= 100 && seed > 0)
  {
    for (c=0 ; c < seed ; c++)
    {  putout+=" ";  }
    putout+=msg.substring(0,100-seed);
    seed--;
    var cmd="infoscroll(" + seed + "," + looped + ")";
    window.status=putout;
    timerTwo=window.setTimeout(cmd,100);
  }
  else if (seed <= 0)
  {
      if (-seed < msg.length)
      {
        putout+=msg.substring(-seed,msg.length);
        seed--;
        var cmd="infoscroll(" + seed + "," + looped + ")";
        window.status=putout;
        timerTwo=window.setTimeout(cmd,100); // 100
      }
      else
      {
        window.status=" ";
        looped += 1;
        var cmd = "infoscroll(100," + looped + ")";
        timerTwo=window.setTimeout(cmd,75); // 75
      }
  }
}
//*******************************************************************

//Added by Rashmi
//Function to check that a string contains  letters and numbers(alphanumeric)and allowable Special Characters
//Params:
//name -> name of the text box.
//label is field label
//mandatory -> 'true' or 'false'
function isAlphanumeric(name,label,mandatory)
{
//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   var langID = document.getElementById("LangID");
   if(langID != null) 
   { 
     if(langID.value != "null" && langID.value != "en_US"){ return true; }
   } 
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english   


//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english  


  arrayofmsgs=getAlertMsgs()
  var string;
  string = eval("document.forms[0]." + name + ".value");
  if(string == "" && mandatory == "true")
  {
   alert(label + " "+arrayofmsgs[0] );
   eval("document.forms[0]." + name).focus();
   return false;
  }
   if (string.search) 
   {
   
      //if (string.search(/[\\\:\*\?\"\>\<\|]/) != -1) 
      if(string.search(/[^\w\s]/) != -1)
      {
        alert(label +" "+ arrayofmsgs[1]);
        
        eval("document.forms[0]." + name).focus();
        return false;
      } 
   }
   return true;
}
//function to trim left and right side of a given string.
//To call this function pass text field value as the parameter.
function trim(inputStringTrim) 
  {
    var fixedTrim = "";
    var lastCh = " ";
    for (x=0; x < inputStringTrim.length; x++) 
    {
        ch = inputStringTrim.charAt(x);
        if ((ch != " ") || (lastCh != " "))
        {
            fixedTrim += ch;
        }
        lastCh = ch;
    }
    if (fixedTrim.charAt(fixedTrim.length - 1) == " ") 
    {
        fixedTrim = fixedTrim.substring(0, fixedTrim.length - 1); 
    }
    return fixedTrim;
   }


//*****************************************************
//function to check whether the textbox is not null
//To call this function pass formname.textboxname,formname.textboxname.value as the parameters.

function isNotNull(name,label)
{
  arrayofmsgs=getAlertMsgs()
  val = eval("document.forms[0]." + name + ".value");
  if (trim(val) == "")
  {
      alert(label + " "+arrayofmsgs[0] );
      eval("document.forms[0]." + name).focus();
      return false;
  }
   return true;
}

//*******************************************************


//function  to check the email Address is in correct format or not.
//to call this function pass the formname.textboxname as the parameter.
function emailAddress(name)
{
    arrayofmsgs=getAlertMsgs()
    compName= eval("document.forms[0]." + name)
    var x,y,z;
    x=compName.value.indexOf('@');
    y=compName.value.lastIndexOf('@');
    z=compName.value.indexOf('.',y);
    
    var not_valid = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/;
    var valid = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(compName.value!="")      
    {
        if ((!valid.test (compName.value)) || (not_valid.test (compName.value)))
        {
            alert(arrayofmsgs[2] );
            eval("document.forms[0]." + name).focus();
            return false;
        }
    }
    if(compName.value=="")
    {
        alert(arrayofmsgs[0] );
        eval("document.forms[0]." + name).focus();
        return false;
    }
    else
        return true;
}

//************************************************************
// Function to check that a string contains letters, space and a '.'(dot). 
//Params:
//name -> name of the text box.
//label is field label
function isAlphabetic(name,label)
{
//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   var langID = document.getElementById("LangID");
   if(langID != null) 
   { 
     if(langID.value != "null" && langID.value != "en_US"){ return true; }
   } 
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english   
   arrayofmsgs=getAlertMsgs()
   var string;
   string = eval("document.forms[0]." + name + ".value");
   if (string.search)
   {
      if (string.search(/[^a-zA-Z\s\.]/) != -1)
      {
        alert(label +" "+ arrayofmsgs[4] );
        eval("document.forms[0]." + name).focus();
        return false;
      }
    
   }
   return true;
}
//***********************************Code Added by Sreekanth*********************
// Function to check that a string contains only letters
//Params:
//string -> field value (document.formname.textboxname.value
//ignoreWhiteSpace -> 'true' or 'false'

function isAlphabetic1(name,label,ignoreWhiteSpace) {
//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   var langID = document.getElementById("LangID");
   if(langID != null) 
   { 
     if(langID.value != "null" && langID.value != "en_US"){ return true; }
   } 
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english   

   arrayofmsgs=getAlertMsgs()
   var string;
   var flag;
   string = eval("document.forms[0]." + name + ".value");
   if (string.search) {
      if ((ignoreWhiteSpace && string.search(/[a-zA-Z\s\.]/) != -1) || (!ignoreWhiteSpace && string.search(/[a-zA-Z\.\s]/) != -1)) 
      {
         return true;
      }
      else 
      {
         if ((ignoreWhiteSpace && string.search(/[^\w\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\W/) != -1))
        {
           flag=0;
           return true;
       }
        if ((ignoreWhiteSpace && string.search(/[\d\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\D/) != -1)) 
        {
          alert(label +" "+ arrayofmsgs[4] );
          eval("document.forms[0]." + name).focus();
          return false;
        }  
      }
  
   }
   return true;
}

//**********************************************
// Function to check that a string contains only numbers
//Params:
//string -> field value (document.formname.textboxname.value
//ignoreWhiteSpace -> 'true' or 'false'

function isNumeric(name,label,ignoreWhiteSpace) {
arrayofmsgs=getAlertMsgs()
var string;
string = eval("document.forms[0]." + name + ".value");
   if (string.search) {
      if ((ignoreWhiteSpace && string.search(/[^\d\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\D/) != -1)) 
      {
      alert(label +" "+ arrayofmsgs[3] );
      eval("document.forms[0]." + name).focus();
      return false;
      }
      return true;
    }  
}
///////************************************
//Not in Use

function isAlphanumeric1(name,label,ignoreWhiteSpace) 
{
//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   var langID = document.getElementById("LangID");
   if(langID != null) 
   { 
     if(langID.value != "null" && langID.value != "en_US"){ return true; }
   } 
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english   

   var string;
   string = eval("document.forms[0]." + name + ".value");
   if (string.search) 
   {
      if ((ignoreWhiteSpace && string.search(/[^\w\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\W/) != -1))
      {
      alert("Alphanumeric");
      return false;
      }
   }
   return true;
}
//*******************************************************************
//Purpose	        : This function is to perform Cancel Operation.
// Input	        : page name as String.
// Output	        : 
//Limitation      	: 
//Date            	: 28/11/2003.
//*******************************************************************
function cancelAction()
{
  document.forms[0].target="";
  document.forms[0].action = "web?requestType=HomePageLinks&link=HomePage";
  document.forms[0].submit();
}



//Validate time in a given format
//  supports both HH:MM and HH:MM:SS
//  HH (0-24); MM (0-59); SS (0-59)
//To call this function pass text field value as the parameter.
function validateTime(myTime)
{
    var sTmp=myTime;
    var iTmp1 = sTmp.indexOf(":");
    var iTmp2 = sTmp.lastIndexOf(":");
    var bValid;
    if (iTmp1 == -1)
    {
        bValid = false;
    }
    else
    {
        if (iTmp1 == iTmp2){
            var sTmp1 = sTmp.substr(0,iTmp1);
            var sTmp2 = sTmp.substr(iTmp1+1);
            bValid = ((!isNaN(sTmp1)) && (!isNaN(sTmp2)) && (sTmp1>=0) && (sTmp1<24) && (sTmp2>=0) && (sTmp2<60));
        }else{
            var sTmp1 = sTmp.substr(0,iTmp1);
            var sTmp2 = sTmp.substr(iTmp1+1,2);
            var sTmp3 = sTmp.substr(iTmp2+1);
            bValid = ((!isNaN(sTmp1)) && (!isNaN(sTmp2)) && (!isNaN(sTmp3)) && (sTmp1>=0) && (sTmp1<24) && (sTmp2>=0) && (sTmp2<60) && (sTmp3>=0) && (sTmp3<60));
        }
    }
    return bValid;
}

//Validate number for a field in a given format : Currency
//To call this function pass text field value as the parameter.
function checkCurrencyFormat(cur)
{
    return getCurrencyFormat_local(cur);
}

//This function checks for middle spaces.
//To call this function pass text field value as the parameter.
//Note: pass the value after trimming the text.
function checkMiddleSpace(txt)
{
    var loc = txt.indexOf(" ");
    if (loc > 0) 
        return false;
    return true;
}



//function to check the date format.
//Params: 
//Date field object (document.formname.textboxname)
//Current date check flag - Note: this is an optional parameter
//and takes 1 or 0 as values. If its 1 then, date should not be less than current date. 
//If it is 0 then, date should not be greater than current date.
//label is the field label

function CheckDate(obj,checkFlag,label) 
{
   var lStrCurrLess = document.getElementById("CurrLess");
   var lStrCurrGrtr = document.getElementById("CurrGrtr");
   
    var strDate;
    var strDateArray;
    var strDay;
    var strMonth;
    var strYear;
    var strSeparatorArray = new Array("-","/");
    var intElementNr;
    
    var datefield = eval(obj);
    strDate = datefield.value;
    
    for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) 
    {
        if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) 
        {
            strDateArray = strDate.split(strSeparatorArray[intElementNr]);
            {
                strDay = strDateArray[0];
                strMonth = strDateArray[1];
                strYear = strDateArray[2];
            }
        }
    }
    
    //Check for entered date is less than Current Date.
    if(checkFlag && (checkFlag == 1))
    {
        var currDate = new Date();
        var sysDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
        if((Date.parse(new Date(strYear,strMonth-1,strDay ))) < (Date.parse(sysDate)))
        {
            alert(label +" "+lStrCurrLess.value);
            return false;
        }
     }
     //Check for entered date is greater than Current Date.
     else if((checkFlag == 0))
     {
        
        var currDate = new Date();
        
        var sysDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
        if((Date.parse(new Date(strYear,strMonth-1,strDay ))) > (Date.parse(sysDate)))
        {
            alert(label +" "+ lStrCurrGrtr.value);
            return false;
        }
     }
     return true;
   }


/*
 * This function validate for characters.
 * Param1 : String to be validate.
 * Return : If String contains special characters it will return false or else value.
 */
function isAlphanumericWithComma(value)
{	
//Start : Code added by sarma on 04/05/2005 for restricting validations for languages other than english
   var langID = document.getElementById("LangID");
   if(langID != null) 
   { 
     if(langID.value != "null" && langID.value != "en_US"){ return true; }
   } 
//End : Code added by sarma on 04/05/2005 for restricting validations for languages other than english   

	var checkOK = "0123456789._ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,";
	var checkStr =value;
	var allValid = true;
	for (i = 0;  i < checkStr.length;  i++)
	{
		 ch = checkStr.charAt(i);
		 for (j = 0;  j < checkOK.length;  j++)
		 if (ch == checkOK.charAt(j))
			 break;
		 if (j == checkOK.length)
		 {
			  allValid = false;
			  break;
		 }
	}
	if (!allValid)
	{
		return (false);
	}
	
  return value;
}



// Function to remove all spaces from a string
//Param:
//string -> field value (document.formname.textboxname.value
function removeSpaces(string) {
   var newString = '';
   for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) != ' ') newString += string.charAt(i);
   }
   return newString;
}

// Function to remove leading and trailing whitespace from a string
//Param:
//string -> field value (document.formname.textboxname.value
function trimWhitespace(string) {
   var newString  = '';
   var substring  = '';
   beginningFound = false;
   
   // copy characters over to a new string
   // retain whitespace characters if they are between other characters
   for (var i = 0; i < string.length; i++) {
      
      // copy non-whitespace characters
      if (string.charAt(i) != ' ' && string.charCodeAt(i) != 9) {
         
         // if the temporary string contains some whitespace characters, copy them first
         if (substring != '') {
            newString += substring;
            substring = '';
         }
         newString += string.charAt(i);
         if (beginningFound == false) beginningFound = true;
      }
      
      // hold whitespace characters in a temporary string if they follow a non-whitespace character
      else if (beginningFound == true) substring += string.charAt(i);
   }
   return newString;
}



//function to check the date format.
//Params: 
//Date field object (document.formname.textboxname)
//Date Format ( eg. mm/dd/yyyy or dd/mm/yyyy etc.)
//Current date check flag - Note: this is an optional parameter
//and takes 1 or 0 as values. If its 1 then, date should not be less than current date. 
//If its 0 then, date should not be greater than current date.
function chkDate(obj,format,checkFlag) 
{
    var strDatestyle = format; 
    var strDate;
    var strDateArray;
    var strDay;
    var strMonth;
    var strYear;
    var intday;
    var intMonth;
    var intYear;
    var booFound = false;
    var datefield = eval(obj);
    var strSeparatorArray = new Array("-","/");
    var intElementNr;

    strDate = datefield.value;

    if (strDate.length < 1)
    {
        alert("Enter valid date");
        return false;
    }
    if (strDate.length > strDatestyle.length)
    {
        alert("Enter valid date");
        return false;
    }
    for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) 
    {
        if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) 
        {
            strDateArray = strDate.split(strSeparatorArray[intElementNr]);
            if (strDateArray.length != 3) 
            {
                alert("Enter valid date");
                return false;
            }
            else 
            {
                strDay = strDateArray[0];
                strMonth = strDateArray[1];
                strYear = strDateArray[2];
            }
            booFound = true;
        }
    }
    if (booFound == false) 
    {
        alert("Enter valid date");
        return false;
    }
    
    if (strYear)
    {
        if (strYear.length == 2) 
        {
            strYear = '20' + strYear;
        }
        if (strYear.length != 4) 
        {
            alert("Enter valid year");
            return false;
        }
    }    
    
    // Check for date format
    if ( (strDatestyle.toUpperCase() =="MM/DD/YYYY") || (strDatestyle.toUpperCase() =="MM-DD-YYYY") ) 
    {
        strTemp = strDay;
        strDay = strMonth;
        strMonth = strTemp;
    }
        
    intday = parseInt(strDay, 10);
    if (isNaN(intday)) 
    {
        alert("Enter valid day");
        return false;
    }
    
    intMonth = parseInt(strMonth, 10);
    if (isNaN(intMonth)) 
    {
        alert("Enter valid month");
        return false;
    }
    
    intYear = parseInt(strYear, 10);
    if (isNaN(intYear)) 
    {
        alert("Enter valid year");
        return false;
    }
    
    if (intMonth>12 || intMonth<1) 
    {
         alert("Enter valid month");
         return false;
    }
    if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) 
    {
        alert("Enter valid day");
        return false;
    }
    if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) 
    {
        alert("Enter valid day");
        return false;
    }
    if (intMonth == 2) 
    {
            if (intday < 1) 
            {
                alert("Enter valid day");
                return false;
            }
            if (LeapYear(intYear) == true) 
            {
                if (intday > 29) 
                {
                    alert("Enter valid day");
                    return false;
                }
            }
            else 
            {
                if (intday > 28) 
                {
                    alert("Enter valid day");
                    return false;
                }
            }
        }
    //Check for entered date is less than Current Date.
    if(checkFlag && (checkFlag == 1))
    {
        var currDate = new Date();
        var sysDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
        if((Date.parse(new Date(strYear,strMonth-1,strDay ))) < (Date.parse(sysDate)))
        {
            alert("Date should not be less than current date");
            return false;
        }
     }
     //Check for entered date is greater than Current Date.
     else if(checkFlag && (checkFlag == 0))
     {
        var currDate = new Date();
        var sysDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
        if((Date.parse(new Date(strYear,strMonth-1,strDay ))) > (Date.parse(sysDate)))
        {
            alert("Date should not be greater than current date");
            return false;
        }
     }
     return true;
   }
    function LeapYear(intYear) 
    {
        if (intYear % 100 == 0) 
        {
            if (intYear % 400 == 0) 
            { 
                return true; 
            }
        }
        else 
        {
            if ((intYear % 4) == 0) { return true; }
        }
            return false;
    }//End of LeapYear function




/////////////////////UTILITY FUNCTIONS //////////////////////

//function to display text on the status bar and to delete the text from the status bar.
//To call this function pass formname.textboxname as the parameter.

function setStatusText(mytext)
{
    self.status=mytext.value;
}
function deleteStatusText()
{
    self.status='';
}

//function to display current date.
function getCurrentDate()
{
    return (getCurrentDate_local())
}
  
//function to display the current time.
function getCurrentTime()
{
    return (getCurrentTime_local())
}

//Options transfer between select lists. Handles multiple moves.
//This function takes source select box name, target select box name and form name
//as parameters.
function moveOptions(selectSrc,selectTrg,frm)
{
    var myOpt;
    var source = eval("document."+frm+"."+selectSrc);
    var target = eval("document."+frm+"."+selectTrg);
    while (source.selectedIndex >= 0)
    {
        myOpt=new Option(source.options[source.selectedIndex].text,source.options[source.selectedIndex].value,false,false);
        eval(target.options[target.length]=myOpt);
        eval(source.options[source.selectedIndex] = null);
    }
}

//Function to check at least one check box checked.
//Takes form name and pattern string of check box.
function isCheckBoxChecked(frm,patternString)
{
    formObj=eval("document."+frm);
    for(var i=0 ; i<formObj.elements.length ; i++)
    {
        if (formObj.elements[i].type == 'checkbox')
        {
            var elementName = formObj.elements[i].name;
            if(elementName.match(patternString))
            {
                if(formObj.elements[i].checked)
                return true;
            }
        }
    }
    return false;    
}

//function to select all the check boxes
//Form name, pattern string and global check box name
function setAllChecked(frm,ChkBoxName,patternString)
{
    formObj = eval("document."+frm);
    globalCheck = eval("document."+frm+"."+ChkBoxName);
    var checkFlag = 0;
    for(var i=0 ; i<formObj.elements.length ; i++)
    {
        if (formObj.elements[i].type == 'checkbox')
        {
            var elementName = formObj.elements[i].name;
            if(elementName.match(patternString))
            {
                formObj.elements[i].checked = globalCheck.checked;
            }
        }
    }
}

//function to check the particular checkboxes.
//The parameters you need to pass are formname and "this" object.
function setChecked(compName,obj)
{
 len = compName.elements.length;
 var i=0;
    for( i=0 ; i<len ; i++) 
    {
       objlen = compName.elements[i].name.indexOf('_');
       if (compName.elements[i].name.substr(0,objlen)== obj.name && compName.elements[i].type == 'checkbox')
       {
          compName.elements[i].checked= obj.checked;
       }
 }
}

//function to get the value of the radio button when it is clicked.
//To call this function pass the name of the radiobutton as the parameter.
function getRadioValue(radioObject)
{
    var value = null;    
    for(var i=0;i<radioObject.length;i++)
    {        
        if (radioObject[i].checked)
        {            
            value = radioObject[i].value;
            break;
        }
    }
    return value;
}


//selects all the options for a given Select box.
function selectOptions(objName,frm)
{
    var obj = eval("document."+ frm + "." + objName);
    for(i=0;i < obj.options.length;i++)
        obj.options[i].selected=true;
}

//Sets the focus to the specified field
//Takes two params: field name and form name.
function setFocus(fldname,frm)
{
    var obj = eval("document." + frm + "." + fldname);
    obj.focus();
}


/////////////////////WINDOW SPECIFIC FUNCTIONS //////////////////////

// function to create a child window.
function postAXForm(mycode,flag,formname)
{
    postAXFormWH(mycode,flag,formname,200,400);
}

// function to create a child window with target option specified.
function postAXFormTgt(mycode,flag,formname,target)
{
    postAXFormWHTgt(mycode,flag,formname,200,400,target);
}

//function to create a child window with width and height specified.
function postAXFormWH(mycode,flag,formname,width,height,scroll)
{
    if (flag)
    {
        postAXFormWHTgt(mycode,flag,formname,width,height,"AxChild",scroll);
    }
    else
    {
        postAXFormWHTgt(mycode,flag,formname,width,height,"_self");
    }
}

// function to create a child window with width, height , target and scroll specified.
function postAXFormWHTgt(mycode,flag,formname,width,height,target,scroll)
{
    res=eval("document."+formname)
    res.opcode.value=mycode;
    if (flag)
    {
         createChildWindow('AxChild',width,height,'1','0','0','0','0','0',scroll);
    }
    res.target=target; 
    res.submit();
}

//function to create a childwindow with the specified width, height and properties.
function createChildWindow(childwin,width,height,resizableFlag,locationFlag,menubarFlag,statusFlag,toolbarFlag,titlebarFlag,scrollbarsFlag)
{
    var resizable=0;
    var location=0;  
    var menubar=0;
    var status=0;
    var toolbar=0;
    var titlebar=0;
    var scrollbars=0;
    if(resizableFlag)
        resizable=1;
    if(locationFlag)
        location=1;
    if (menubarFlag)
        menubar=1;
    if (statusFlag)
        status=1;
    if (toolbarFlag)
        toolbar=1;
    if (titlebarFlag)
        titlebar=1;
    if (scrollbarsFlag)
        scrollbars=1;

    props ="width="+width+",height="+height+",resizable="+resizableFlag+",location="+locationFlag+",menubar="+menubarFlag+",status="+statusFlag+",toolbar="+toolbarFlag+",titlebar="+titlebarFlag+",scrollbars="+scrollbarsFlag+"";
    window.open("",childwin,props);
}



//Start :Common function to valid amount fields ---by samir
    
    function validMedAmountField(lStrAttrVal,name,x)//lStrAttrVal=Attribute value,name=fieldname,x=cant be <= zero 
    {
         arrayofmsgs=getAlertMsgs() 
         var billamount;
         billamount = eval("document.forms[0]." + name + ".value");
      
      var len = billamount.length;  
      var str1 = ".0123456789";
      var maxlength = 10 //Length of number before decimal point for bill amount
      if(!billamount)
      {
      }else{
                      if(billamount <= 0)
                      {
                        alert(lStrAttrVal +" "+ arrayofmsgs[x]);                      
                        eval("document.forms[0]." + name).focus();                                
                        return false;
                      }
                      
                      if(!checkForCSS(billamount)) //malicious script validations
                      {
                        alert(arrayofmsgs[x+1]);                      
                        eval("document.forms[0]." + name).focus();                                
                        return false;
                      }
                      
                      for(i=0;i<len;i++)
                      {
                        if((str1.indexOf(billamount.charAt(i)))==-1)
                        {
                            alert(arrayofmsgs[x+2]+" "+lStrAttrVal);                      
                            eval("document.forms[0]." + name).focus();                                
                            return false;
                        }
                      }
                      if (billamount.lastIndexOf(".") != billamount.indexOf(".")) // to check for the occurance of "." more than once
                      {
                            alert(arrayofmsgs[x+2]+" "+lStrAttrVal);                      
                            eval("document.forms[0]." + name).focus();                                
                            return false;
                      }
                      
                      var temp=billamount.indexOf(".");   
                      if(temp==-1)
                         {
                            if(billamount.length>maxlength) // Max Bill amount should be 999999.99
                            {
                                alert(arrayofmsgs[x+2]+" "+lStrAttrVal);                      
                                eval("document.forms[0]." + name).focus();                                
                                return false;
                            }
                         }
                        else
                         {         
                                var tempval=billamount.substring(0, temp)     
                                var tempo=billamount.substring(temp, maxlength+3)
                                if(tempval.length>maxlength)
                                {
                                  alert(arrayofmsgs[x+2]+" "+lStrAttrVal);                      
                                  eval("document.forms[0]." + name).focus();                                  
                                  return false;
                               }      
                        }
              }
      }
//End :Common function to valid amount fields ---by samir



//Start: Common Function to validate '.' in Numeric Field
/*
 *Description:Below is the function which validates the number. If number contains two
 *			  or more than two dots(e.g. 1.2.3, ..2,1..2 etc) then it returns true
 *			  value. If number contains single dot wihtout any digits(e.g. .) then it
 * 			  also returns true
*/

function checkNumDots(form1)
 {
   var str1,len,count=0;
   str1 = form1;
   len = str1.length;
   if(len == 1 && str1.charAt(0) == ".")
      {
        return true;
      }
   for(var v=0;v<len;v++)   
   {
      if(str1.charAt(v) == ".")
        {
         count++;
        }
   }
   if(count>=2)
     {
      return true;
     }
   return false;
 }
//End: Common Function to validate '.' in Numeric Field

//End of JS library.

/*
Function to Disable accroding to the Login rights given 
This funtion takes yes/no input argument 
Added By : Dharmesh Goihl,  Date :03 Jul 2006
*/

function disableForm(hasInsertUpdateRights)
{
 
 if(hasInsertUpdateRights=="false" ||hasInsertUpdateRights=="No"||hasInsertUpdateRights=="NO" ||hasInsertUpdateRights=="N")
 {
  for(i=0;i<document.forms[0].elements.length;i++)
  {
    document.forms[0].elements[i].disabled=true;
    if(document.forms[0].elements[i].value=='Close')
    {
     document.forms[0].elements[i].disabled=false;
    }
  }
 }
 else
 return false;
 
}
/*
Function to restrict  the length 
Added By : Dharmesh Goihl,  Date :21 Jul 2006
*/

function ismaxlength(obj)
 {
   var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
   if (obj.getAttribute && obj.value.length>mlength)
   obj.value=obj.value.substring(0,mlength)
 }

//this function will check for any special charactor return "false" is special char is found,true otherwise
//Object as input argument

function specialCharCheck(obj)
{	
  
  arrayMsgs = getAlertMsgs();
  var checkStr = trim(obj.value);
 
	var checkOK = "0123456789.ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,/&()";
	var allValid = true;
  var specialCharList = "~`@#$%^*_!+|}{[]:;?<>'\"";
  var ch = "";
	for (i = 0;  i < checkStr.length;  i++)
	{
		 ch = checkStr.charAt(i);
         allValid = true;
		 for (j = 0;  j < specialCharList.length;  j++)     
     {
       if (ch == specialCharList.charAt(j)   )
       {
          allValid = false;
          alert(obj.attrTitle +" "+arrayMsgs[4]);
          obj.focus(); // focusing at the mistaken entry data text box
          obj.select();
          break;
       }
       
     }
     if(!allValid)
       {
        break;
       }
	}
	
  return allValid;
}

//-------------------------------AJAX Related Code---Added By  : Dharmesh Gohil--- Date :13th Feb 2007--------
var enableObj = new Array()
function disableAllButtonsForSave()
  {    
     var k=0;
      for(i=0;i<document.forms[0].elements.length;i++)
	    {
	       var obj = document.forms[0].elements[i];
         if(obj.type=="button" || obj.type=="submit"|| obj.type=="reset" )
	       {
	          if(obj.disabled==false)
            {
              obj.disabled=true;
	          }
            else //adding existing disabled object to disabled it later
            {
             enableObj[k] = obj;
             k++;
            }
         }
	    }     
  }
function enableAllButtonsForSave()
 {    
      for(i=0;i<document.forms[0].elements.length;i++)
	    {
	       var obj = document.forms[0].elements[i];
         if(obj.type=="button" || obj.type=="submit"|| obj.type=="reset" )
	       {
	          obj.disabled=false;
	       }
         for( var k=0 ; k < enableObj.length ;k++) // disabled the registered object in "disableAllButtonsForSave" method
         {
           enableObj[k].disabled = true;
         }
	    }     
  }
  
  function getAjaxRequest()
 {
    var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
 
  return ajaxRequest;
 }
 
function collectParameter()
 {
  
  var totalElements= document.forms[0].elements.length
  var uri='';
  for(i=0;i<totalElements;i++)
  {
     if(document.forms[0].elements[i].type == "radio" && document.forms[0].elements[i].checked == true )
     {             
        uri= uri+'&'+document.forms[0].elements[i].name+'='+encodeURIComponent(document.forms[0].elements[i].value);        
     }
     else if (document.forms[0].elements[i].type != "radio")
     {
        uri= uri+'&'+document.forms[0].elements[i].name+'='+encodeURIComponent(document.forms[0].elements[i].value);
     }
  }
  
  return uri;
 } 
  
 function getResponse(url)
 {
     //disableAllButtonsForSave();
     if(document.getElementById("bar")!=undefined){
     document.getElementById("bar").innerHTML="<img src='/IWAS/APPS/images/pleasewait.gif' name='bar' />"; 
     }
     document.body.style.cursor="wait"
     var ajaxRequest = getAjaxRequest();
	   var resposeValue ="";
     ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 1||ajaxRequest.readyState == 2||ajaxRequest.readyState == 3)
		    {
           document.body.style.cursor="wait"
		    }
		    else if(ajaxRequest.readyState == 4)
        {
          if(ajaxRequest.status==200){
		    	 resposeValue =  trim(ajaxRequest.responseText);
         //  enableAllButtonsForSave();
          }
          else
          { 
           alert("Error in getting response :"+ajaxRequest.status);
          }
          document.body.style.cursor="default" ;
          if(document.getElementById("bar")!=undefined){
           document.getElementById("bar").innerHTML=""; 
           }
			  }
			
		 }
     var uri = url.substring(0,url.indexOf('?'));
   //  alert('uri :'+uri );
     var param = url.substring(url.indexOf('?')+1,url.length);
   //  alert('param :'+param);
     
    ajaxRequest.open("POST", uri , false); // Syncronous call 
    //added by parth for avoiding the limit of 2048 characters-starts
    ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //ajaxRequest.setRequestHeader("Content-Type", "text/html; charset=iso-8859-1");
    //added by parth for avoiding the limit of 2048 characters-ends
    ajaxRequest.send(param+collectParameter());
    
    return resposeValue;
 }
 
 //-------------Special Charator Chacking--------------------------
 

function hasSpecialChar(label)
{	
  
  arrayMsgs = getAlertMsgs();
  checkStr = eval("document.forms[0]." + label + ".value");
	var checkOK = "0123456789.ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz/&() ";
	var allValid = false;
  var specialCharList = "~`@#$%^*_!+|}{[]:,;?<>'\"";
  var ch = "";
	for (i = 0;  i < checkStr.length;  i++)
	{
		 ch = checkStr.charAt(i);
		 for (j = 0;  j < specialCharList.length;  j++)     
     {
       if (ch == specialCharList.charAt(j)   )
       {
          allValid = true;
         // alert(arrayMsgs[7]);
          alert('Special character not allowed in '+eval("document.forms[0]." + label).attrTitle);
          eval("document.forms[0]." + label).focus(); // focusing at the mistaken entry data text box
          break;
       }
       
     }
     if(allValid)
     {
        break;
     }
	}
	
  return allValid;
}

  function  mandatoryCheck(label,alertMessage)  
  { 
    //arrayMsgs = getAlertMsgs();
    if(alertMessage==undefined ||alertMessage=='')
    {
     alertMessage='is Manadatory';
    }
    if(eval("document.forms[0]."+label).type == "select-one" && eval("document.forms[0]."+label).value=="-1")
    {
        eval("document.forms[0]."+label).focus();
        alert(eval("document.forms[0]."+label).attrTitle+" "+alertMessage);
        return true;
    }
    else if(eval("document.forms[0]."+label).value=="")
    {
       eval("document.forms[0]."+label).focus();
       alert(eval("document.forms[0]."+label).attrTitle+" "+alertMessage);
       return true;
    }
    else
    {
      return false;
    }
 }
 
 //-------------Validation function for varios condition-----
 //---------- Added By Dharmesh Gohil --- date: 25/06/2007-----
 
 function elementCheck()
{
   obj =document.forms[0].elements;
   for( var i=0;i<obj.length;i++)
   {
  
      if( obj[i].type!="hidden")
      {
         if(obj[i].mandatory!=undefined &&( obj[i].mandatory.toLowerCase()=='y' ||obj[i].mandatory.toLowerCase()=='true') && mandatoryCheck(obj[i].name))
         {
           return false;
         }
         if(obj[i].specialcharcheck!=undefined &&( obj[i].specialcharcheck.toLowerCase()=='y' ||obj[i].specialcharcheck.toLowerCase()=='true') && hasSpecialChar(obj[i].name))
         {
           return false;
         }
         if(obj[i].integer!=undefined &&( obj[i].integer.toLowerCase()=='y' ||obj[i].integer.toLowerCase()=='true') && !obj[i].value.match(/^\d+$/))
         {
           alert('Enter numeric value in '+obj[i].attrTitle);
           obj[i].focus();
           return false;
         }
         if(obj[i].float!=undefined &&( obj[i].float.toLowerCase()=='y' ||obj[i].float.toLowerCase()=='true') && !obj[i].value.match(/^\d+\.?\d*$/))
         {
           alert('Enter numeric value in '+obj[i].attrTitle);
           obj[i].focus();
           return false;
         }
         if(obj[i].email!=undefined &&( obj[i].email.toLowerCase()=='y' ||obj[i].email.toLowerCase()=='true') && !obj[i].value.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
         {
           alert('Enter Valid Email address '+obj[i].attrTitle);
           obj[i].focus();
           return false;
         }
         if(obj[i].pincode!=undefined &&( obj[i].pincode.toLowerCase()=='y' ||obj[i].pincode.toLowerCase()=='true') && !obj[i].value.match(/^([A-Za-z]{1,2})([0-9]{2,3})([A-Za-z]{2})$/))
         {
           alert('Enter Valid Pincode '+obj[i].attrTitle);
           obj[i].focus();
           return false;
         }
      } 
   }
   return true;
}