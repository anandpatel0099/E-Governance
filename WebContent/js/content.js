//for content.jsp
/*function changeContentImpl(data)
{
     document.getElementById("firstPage").style.display = 'none';
     document.getElementById("dataPage").style.display = '';
 
     var url="web?requestType=ApplicationRH&actionVal=getChildMenus&queryType=Select&screenId=PORT1001&MenuCode="+data; 
     CallFunction="stateChanged";
     SendAjaxRequest(url,CallFunction);
}

function getDOMFromXML(xmlString)
{	
		// code for IE
		var doc;
		if (window.ActiveXObject)
		{
			doc=new ActiveXObject("Microsoft.XMLDOM");
			doc.async="false";
			doc.loadXML(xmlString);
		}
		// code for Mozilla, Firefox, Opera, etc.
		else
		{
			var parser=new DOMParser();
			doc=parser.parseFromString(xmlString,"text/xml");
		}
    return doc.documentElement;		
}

function stateChanged(transport)
{					
	var XMLString = transport.responseText;
	var XMLDoc = getDOMFromXML(XMLString);
    var ChildMenus=XMLDoc.getElementsByTagName("ChildMenus");  
    var otable=document.getElementById("dataPage");  
    while(otable.rows.length>1)   
      otable.deleteRow(otable.rows.length-1); 
      
    if(ChildMenus[0]!=null)
    {
       var ListSize = ChildMenus[0].getElementsByTagName("ListSize")[0].firstChild.data;
       
       for(var ctr=0;ctr< ListSize;)
       {
           var menuCode = ChildMenus[0].getElementsByTagName("List"+(ctr++))[0].firstChild.data;
           var menuUrl = ChildMenus[0].getElementsByTagName("List"+(ctr++))[0].firstChild.data;
           var menuDsplyName = ChildMenus[0].getElementsByTagName("List"+(ctr++))[0].firstChild.data;
           var menuDesc = ChildMenus[0].getElementsByTagName("List"+(ctr++))[0].firstChild.data;
           
           var trow,tdata1,tdata2,tdata3;
           if((ctr/4)%2 != 0)
           {
              var table = document.getElementById('dataPage');
              var rowCount = table.rows.length;   
              trow = table.insertRow(rowCount);
              tdata1=trow.insertCell(0);
              tdata1.width="5%";
              tdata2=trow.insertCell(1);
              tdata2.align="left";
              tdata2.width="45%";
              tdata2.innerHTML="<ul style='color:#0174DF;'><li><font style='font-weight:bold;font-size:15px;text-align: left;' ><a href=javascript:openWindow('"+menuUrl+"') style='color:#0174DF;text-decoration:underline;'>"+menuDsplyName+"</a></font><br><font style='color:black;font-weight:normal;font-size:12px;'>"+menuDesc+"</font></li></ul>";
           }
           else
           {
              tdata3=trow.insertCell(2);
              tdata3.align="left";
              tdata3.width="45%";
              tdata3.innerHTML="<ul style='color:#0174DF;'><li><font style='font-weight:bold;font-size:15px;text-align: left;'><a href=javascript:openWindow('"+menuUrl+"')  style='color:#0174DF;text-decoration:underline;'>"+menuDsplyName+"</a></font><br><font style='color:black;font-weight:normal;font-size:12px;'>"+menuDesc+"</font></li></ul>";
           }
       }
    }
    getHeight();
}

function openWindow(menuUrl)
{
    showProgressbar();       
    var menuURLStr = '';
    for(var i=0;i<menuUrl.length;i++)
    {
      var chr = menuUrl.charAt(i);
      var str = chr.replace('&','~');
      menuURLStr += str;
    }
    
    document.forms[0].requestType.value="ApplicationRH";
    document.forms[0].queryType.value="Select";
    document.forms[0].actionVal.value="viewPageAfterSelMenu";
    document.forms[0].screenId.value="PORT1001";
    document.forms[0].menuURLStr.value=menuURLStr;
    document.forms[0].submit();
}


function getHeight()
{
	  document.getElementById("contLeftcolumn").style.height = '500px';
	  document.getElementById("ContContent").style.height = '500px';
	  var menuHeight = document.getElementById("contLeftcolumn").scrollHeight;
	  var contHeight = document.getElementById("ContContent").scrollHeight;
	  var actHeight = document.getElementById("contLeftcolumn").style.height;
	  
	  if(parseInt(menuHeight) > parseInt(actHeight) || parseInt(contHeight) > parseInt(actHeight))
	  {
	    if(parseInt(menuHeight) > parseInt(contHeight))
	    {
	      document.getElementById("contLeftcolumn").style.height = menuHeight + 'px';
	      document.getElementById("ContContent").style.height = menuHeight + 'px';
	    }
	    else
	    {
	      document.getElementById("contLeftcolumn").style.height = contHeight + 'px';
	      document.getElementById("ContContent").style.height = contHeight + 'px';
	    }
	  }
}*/
function menuAct(menuurl)
{ 
	if(menuurl != null && menuurl != 'null' && menuurl != '')
	{
		/*if(lStrUsrType == 12)
		{
			if(document.frmContent.lPersonId.value==document.frmContent.crtUsr.value)
			{
				document.getElementById("firstPage").style.display = 'none';
		    	document.getElementById("dataFrame").style.display = '';
		    	document.getElementById("dataFrame").src =  'web?requestType=ApplicationRH&actionVal=ViewCitizenSearchForm&queryType=Select&screenId=39&menuCode=2018';
		    
			}
			else
			{
				document.getElementById("firstPage").style.display = 'none';
		    	document.getElementById("dataFrame").style.display = '';
		    	document.getElementById("dataFrame").src =  menuurl;
			}
		}
		else
		{*/
			document.getElementById("firstPage").style.display = 'none';
	    	document.getElementById("dataFrame").style.display = '';
	    	document.getElementById("dataFrame").src =  menuurl;
		//}
		
	}
	else if(lStrUsrType == 12)
	{
		document.getElementById("firstPage").style.display = 'none';
    	document.getElementById("dataFrame").style.display = '';
    	document.getElementById("dataFrame").src =  'web?requestType=ApplicationRH&actionVal=ViewCitizenSearchForm&queryType=Select&screenId=39&menuCode=2018';
	}
}


//for mainHeader.jsp
function getDateOutput()
{
	var now = new Date();
    var dateString=''+now;
    var sp1=dateString.indexOf(" ",0);
    var sp2=dateString.indexOf(" ",parseInt(sp1)+1);
    var sp3=dateString.indexOf(" ",parseInt(sp2)+1);
    //var enteredDate='<font class=weatherTitle >';
    var enteredDate = '<span id=\"idSpan\" style=\"color: #FFFFFF;\"><b>';
    enteredDate +=dateString.substring(0,parseInt(sp3))+' '+now.getFullYear();
    enteredDate +='<\/b><\/span>';
    var object=document.getElementById('dateDiv');
    object.innerHTML= enteredDate;
//    return enteredDate+'&nbsp;&nbsp;&nbsp;&nbsp;';
}

function fn_language(Id)
{
	fireUnloadEvent=false;
	document.forms[0].UserLocaleID.value=Id;
	document.forms[0].frameSrc.value = document.getElementById("dataFrame").src;
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].screenId.value="83";
	document.forms[0].actionVal.value="changeLang";
	document.forms[0].submit();
}

function fnBackMenuPage()
{
	/*document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].screenId.value="PORT1001";
	document.forms[0].actionVal.value="backToMenuPage";
	document.forms[0].submit();*/
	fireUnloadEvent=false;
	if(lStrUsrType == 12)
	{
		document.getElementById("firstPage").style.display = 'none';
    	document.getElementById("dataFrame").style.display = '';
    	document.getElementById("dataFrame").src =  'web?requestType=ApplicationRH&actionVal=ViewCitizenSearchForm&queryType=Select&screenId=39';
	}
	else if(lStrUsrType == 3)
	{
		document.getElementById("firstPage").style.display = '';
    	document.getElementById("dataFrame").style.display = '';
    	document.getElementById("dataFrame").src =  'web?requestType=ReportingFramework&reportCode=121306&action=generateChartReport';
	}
	else
	{
		document.getElementById("firstPage").style.display = '';
		document.getElementById("dataFrame").src = '';
		document.getElementById("dataFrame").style.display = 'none';
		document.getElementById("hdAppURL").value= '';
	}
}

function fnLogout()
{ 
	fireUnloadEvent=false;
	var lStrFinalStr='';
	if(lIntSize>0)
	{
		for(var i=0;i<lIntSize;i++)
		{
			var temp= document.getElementById((i)+1).getElementsByTagName('div');
			if(i == 0)
				lStrFinalStr = '';
			 lStrFinalStr = lStrFinalStr + "#" + ((i)+1)+"~"+temp[0].id;
		}
		document.forms[0].txtfinalResult.value=lStrFinalStr;
	}
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="logout";
	document.forms[0].submit();
}
//for mainFooter.jsp
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

//for model.jsp
function resize_iframe()
{
	document.getElementById('contLeftcolumn').style.height = '500px';
	document.getElementById('dataFrame').height = '500px';
	document.getElementById('ContContent').style.height = '500px';
	
	var contHeight = window.frames["dataFrame"].document.body.scrollHeight;
	var menuHeight = document.getElementById("contLeftcolumn").scrollHeight;
	
	if(parseInt(contHeight) < '500' && parseInt(menuHeight) < '500')
	{
		document.getElementById('contLeftcolumn').style.height = '500px';
		document.getElementById('dataFrame').height = '500px';
		document.getElementById('ContContent').style.height = '500px';
	}
	else if(parseInt(contHeight) > parseInt(menuHeight))
	{
		document.getElementById('contLeftcolumn').style.height = window.frames["dataFrame"].document.body.scrollHeight  + 'px';
		document.getElementById('dataFrame').height = (window.frames["dataFrame"].document.body.scrollHeight+ 14) + 'px';
		document.getElementById('ContContent').style.height = (window.frames["dataFrame"].document.body.scrollHeight + 20) + 'px';
	}
	else if(parseInt(contHeight) < parseInt(menuHeight))
	{
		document.getElementById('contLeftcolumn').style.height = parseInt(menuHeight) + 'px';
		document.getElementById('dataFrame').height = (parseInt(menuHeight)+ 14) + 'px';
		document.getElementById('ContContent').style.height = (parseInt(menuHeight)+ 20) + 'px';
	}
	hideProgressbar();
}
function cmbFnBackMenuPage()
{
	if(lStrUsrType == 12)
	{
		window.parent.document.getElementById("firstPage").style.display = 'none';
		window.parent.document.getElementById("dataFrame").style.display = '';
		window.parent.document.getElementById("dataFrame").src =  'web?requestType=ApplicationRH&actionVal=ViewCitizenSearchForm&queryType=Select&screenId=39';
	}
	else if(lStrUsrType == 3)
	{
		window.parent.document.getElementById("firstPage").style.display = '';
		window.parent.document.getElementById("dataFrame").style.display = '';
		window.parent.document.getElementById("dataFrame").src =  'web?requestType=ReportingFramework&reportCode=121306&action=generateChartReport';
	}
	else
	{
		window.parent.document.getElementById("firstPage").style.display = '';
		window.parent.document.getElementById("dataFrame").src = '';
		window.parent.document.getElementById("dataFrame").style.display = 'none';
	}
}
//Added by Atul S for Department Specific MEnu
function changeMenuView(param)
{
	fireUnloadEvent=false;
	document.forms[0].requestType.value="ApplicationRH";
	document.forms[0].actionVal.value="insrtThmDtls";
	document.forms[0].screenId.value="120";
	document.forms[0].queryType.value="Select";
	document.forms[0].menuType.value=param;
	document.forms[0].method = "post";
	document.forms[0].submit();
}
