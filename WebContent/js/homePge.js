//for homepage.jsp
function goToMainPage()
{
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].screenId.value="114";
  document.forms[0].actionVal.value="index";
  document.forms[0].submit();
} 

//for header.jsp
function fn_language(Id)
{
  document.forms[0].UserLocaleID.value=Id;
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].screenId.value="114";
  document.forms[0].actionVal.value="index";
  document.forms[0].submit();
}
function show_citizenCorner()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="viewCitizenJournalists";
	document.forms[0].screenId.value="113";
	document.forms[0].submit();
}
function show_CitizenService(){

	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="viewCitizenServiceForm";
	document.forms[0].screenId.value="70";
	document.forms[0].submit();
}
function fn_showAtoZ()
{
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].actionVal.value="ShowAtoZmgmtContent";
  document.forms[0].screenId.value="70";
  //document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowAtoZmgmtContent&screenId=70";
  //document.forms[0].method = "post";
  document.forms[0].submit();
}

function fn_textonly()
{
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].actionVal.value="showtextonlyonhomepage";
  document.forms[0].screenId.value="114";
  //document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowAtoZmgmtContent&screenId=70";
  //document.forms[0].method = "post";
  document.forms[0].submit();
}
function fn_sitemap()
{
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].actionVal.value="showsitemaponhomepage";
  document.forms[0].screenId.value="114";
  //document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowAtoZmgmtContent&screenId=70";
  //document.forms[0].method = "post";
  document.forms[0].submit();
}

function fn_Accesibility()
{
  document.forms[0].requestType.value="ApplicationRH";
  document.forms[0].actionVal.value="showAccesibilityonhomepage";
  document.forms[0].screenId.value="114";
  //document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowAtoZmgmtContent&screenId=70";
  //document.forms[0].method = "post";
  document.forms[0].submit();
}

//for leftMenu.jsp
function ShowForums()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="OpenDiscussionForum";
	document.forms[0].screenId.value="78";
    document.forms[0].method = "post";
    document.forms[0].submit();
}

function openHldyCalender()
{
  var url = 'web?requestType=ApplicationRH&actionVal=showCalenderWithHldy&queryType=Select&screenId=109';
  window.open(url,"HldyCal","'titlebar=0,toolbar=no, location=middle, directories=no,status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=435, height=390, top=270,left=350");
}

function checkBrowser()
{
	  var num = /MSIE/.test(navigator.userAgent)? navigator.userAgent.replace(/^.*MSIE (\d+).*$/,'$1') - 1 : parseInt(navigator.appVersion);
	  if(!isNaN(num) && num < 6)
	  {
	     alert('Browser does not support these Feature');
	     return false;
	  }
	  else
	  {
	    window.location="/portal/MahaonlineRSS.xml";
	  }
}

function openPresentation()
{
	var userAgent = navigator.userAgent;
	if(userAgent.indexOf("MSIE")>-1)
	{ 
		window.open("images/Features_files/frame.htm");
	}
	else
	{
		window.open("images/MahaOnline.pdf");
	}
}

//for Mainmiddle.jsp
var activeTab = 1;
function openTab(tabId) 
{
  // reset old tab and content
  document.getElementById("tabLink"+activeTab).className = "tabLink";
  document.getElementById("tabContent"+activeTab).className = "tabContent";
  // set new tab and content
  document.getElementById("tabLink"+tabId).className = "tabLinkActive";
  document.getElementById("tabContent"+tabId).className = "tabContentActive";
  activeTab = tabId;
}


//for footer.jsp
function addBookmark(url,title)
{ 
	if (window.sidebar) 
	{ 
		window.sidebar.addPanel(title, url,""); 
	}
	else if( document.all ) 
	{ 
		window.external.AddFavorite( url, title); 
	} 
	else if( window.opera && window.print ) 
	{ 
		return true;
	} 
	else if( document.layers ) 
	{
		window.alert( 'Please click OK and then press Ctrl+D to create a bookmark or \n click Bookmarks | Add Bookmark' );
	} 
	else 
	{
		window.alert( 'Please use your browser\'s bookmarking facility to create a bookmark' );
	}
}

//For Lucene Search

function checkEnter(e)
{
	var key;
	if(window.event)
		key = window.event.keyCode;
	else
		key = e.which;
  
	if (key==13) {
		Search();
	}
}
function Search()
{
    var text = document.getElementById("txt_Search").value;
    if(text!=null && text=="")
    {
        alert(" Please enter search term(s) ");
        return false;
    }
    document.forms[0].requestType.value="ApplicationRH";
    document.forms[0].screenId.value="127";
    document.forms[0].actionVal.value="luceneSearch";
    document.forms[0].submit();
}
function fn_pagination()
{
	
    var paginFlag=document.forms[0].paginFlag.value;  
	if(paginFlag=="FAQ")
    {
    	document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowFaq&queryType=select&screenId=90";
  		document.forms[0].method = "post";
  		document.forms[0].submit();
    }
	else if(paginFlag=="ODF")
	{
		document.forms[0].action = "web?requestType=ApplicationRH&screenId=78&actionVal=OpenDiscussionForum&queryType=Select";
		document.forms[0].method = "post";
		document.forms[0].submit();
	}
    else if(paginFlag=="Search")
    {
    	var text = document.getElementById("txt_Search").value;
    	if(text!=null && text=="")
    	{
    		alert(" Please enter search term(s) ");
    		return false;
    	}
    	document.forms[0].requestType.value="ApplicationRH";
    	document.forms[0].screenId.value="127";
    	document.forms[0].actionVal.value="luceneSearch";
    	document.forms[0].searchText.value=text;
    	document.forms[0].PaginationFlag.value="true";
    	document.forms[0].ShowFlag.value="false";
    	document.forms[0].submit();
    }
    else if(paginFlag=="Forms")
    {
    	document.forms[0].action = "web?requestType=ApplicationRH&queryType=Select&screenId=68&actionVal=viewDocuments&docTypeFlag=Forms";
  		document.forms[0].method = "post";
  		document.forms[0].submit();
    }
}




function ShowDtl(param)
{
    var text = document.getElementById("txt_Search").value;
    if(text!=null && text=="")
    {
        alert(" Please enter search term(s) ");
        return false;
    }
    
    document.forms[0].requestType.value="ApplicationRH";
    document.forms[0].screenId.value="127";
    document.forms[0].actionVal.value="luceneSearch";
    document.forms[0].searchText.value=text;
    document.forms[0].PaginationFlag.value="true";
    document.forms[0].ShowFlag.value=param;
    document.forms[0].submit();
    
}

function exploremahaonline()
{
	window.open("/portal/images/HomePage/ppt3_files/frame.htm",'chield', 'width=860,height=500,toolbar=no,minimize=yes,status=yes,memubar=no,location=no,scrollbars=no,top=50,left=60');
}
function map()
{
	window.open("jsp/Portal/map.jsp",'chield', 'width=860,height=500,toolbar=no,minimize=yes,status=yes,memubar=no,location=no,scrollbars=no,top=50,left=60');
}


function Searchlink()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="viewsearchlink";
	document.forms[0].screenId.value="75";
	document.forms[0].submit();
}

function formSearch()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="viewDocuments";
	document.forms[0].screenId.value="68";
	document.forms[0].submit();
}

function fnOpenSurvey(){
	window.open("web?requestType=ApplicationRH&actionVal=generateSurveyJsp&screenId=88&fromCitizen=y","Survey","menubar=1,scrollbars=yes, resizable=no");
}

function fnClear()
{
	document.forms[0].txt_Search.value="";
}




//added by sainag
function agencyRegister()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="AgencyRegister";
	document.forms[0].screenId.value="38";
    document.forms[0].submit();
}

function dealerRegister()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="DealerRegister";
	document.forms[0].screenId.value="38";
    document.forms[0].submit();
}

//ended by sainag
function OpenRtiSearch()
{
	document.forms[0].requestType.value="ApplicationRH"; 
	document.forms[0].actionVal.value="viewRTISearchForm";
	document.forms[0].queryType.value="Select";
	document.forms[0].screenId.value="100022";
	document.forms[0].homePgFlag.value="Y";
    document.forms[0].submit();
}
//added by Atul on 06-05-10
function openRegPage()
{
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].screenId.value="66";
	document.forms[0].actionVal.value="displayRegisterPage";
	document.forms[0].submit();
}
