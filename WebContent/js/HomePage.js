	/*this java script is for the right menu section*/
			window.onload=montre;
			function montre(id)
			{
				
				var d = document.getElementById(id);
				var parentid;
				var parentObj;
				var initStyle;
				if (d)
				{
					initStyle=d.style.display;
					parentid  = id.substring(5);          
					parentObj= document.getElementById(parentid);
				}
				else
				{
					for (var i = 0; i<=200; i++)
					{
						if (document.getElementById('smenu'+i)) {document.getElementById('smenu'+i).style.display='none';}
					}
				}
				if (d)
				{
					if(initStyle=='block')
					{
						d.style.display='none';
						parentObj.style.backgroundImage="url(images/HomePage/design.png)";
					}
					else
					{
						for (var j = 0; j<=200; j++)
			            {
							if (document.getElementById('smenu'+j))
				            {
								document.getElementById('smenu'+j).style.display='none';
				            }
			            }
						d.style.display='block';
						parentObj.style.backgroundImage="url(images/HomePage/design.png)";
					}
				}
			}
      
  /*this is for right side menu */
  /*this java script is for the right menu section*/
			window.onload=montreRight;
			function montreRight(id)
			{
				
				var d1 = document.getElementById(id);
        var parentid;
        var parentObj;
				var initStyle;
				if (d1)
				{
					initStyle=d1.style.display;
          parentid  = id.substring(6);  
          parentObj= document.getElementById(parentid);
				}
				else
				{
					for (var i = 0; i<=10; i++)
					{
            
						if (document.getElementById('srmenu'+i+i+i)) {document.getElementById('srmenu'+i+i+i).style.display='none';}
					}
				}
				if (d1)
				{
					if(initStyle=='block')
					{
						d1.style.display='none';
           
					}
					else
					{
						d1.style.display='block';
           
					}
				}
			}
      
      
 /*this is the script for news and date display*/
        function loadXMLDoc(dname)
        {
            var xmlDoc;
            // code for IE
            if (window.ActiveXObject)
            {
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            }
            // code for Mozilla, Firefox, Opera, etc.
            else if (document.implementation && document.implementation.createDocument)
            {
            xmlDoc=document.implementation.createDocument("","",null);
            }
            else
            {
            alert('Your browser cannot handle this script');
            }
            xmlDoc.async=false;
            xmlDoc.load(dname);
            return(xmlDoc);
        }
        function loadData(site)
        {
                  xmlDoc=loadXMLDoc(site);
                  var x=xmlDoc.getElementsByTagName('title');
                  var y=xmlDoc.getElementsByTagName('link');
                  var z =xmlDoc.getElementsByTagName('item');
                  alert();
                  var outPut='<font class=weatherTitle><b>Weather: </b>&nbsp;<a class=weather target="_blank" href="'+y[1].childNodes[0].nodeValue+'">';
                  var weatherContent=x[1].childNodes[0].nodeValue;
                  var sp1=weatherContent.indexOf(":",0);
                  weatherContent=weatherContent.substring(parseInt(sp1)+1,weatherContent.length);
                  alert(weatherContent);
                  outPut+=weatherContent;
                  outPut+='</a></font>';
                  return outPut;
        }
        function getDateOutput()
        {
                var now = new Date();
                var dateString=''+now;
                var sp1=dateString.indexOf(" ",0);
                var sp2=dateString.indexOf(" ",parseInt(sp1)+1);
                var sp3=dateString.indexOf(" ",parseInt(sp2)+1);
                var enteredDate='<font class=weatherTitle>';
                enteredDate +=dateString.substring(0,parseInt(sp3))+' '+now.getFullYear();
                enteredDate +='</font>';
                return enteredDate+'&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        
 function changeFontSize(inc)
  { 
  
   var p = document.getElementsByTagName('body');  
   for(n=0; n<p.length; n++) 
   {  
   if(p[n].style.fontSize)
   {  
   var size = parseInt(p[n].style.fontSize.replace("px", ""));   
   } 
   else
   {
    var size = 12;   
    }
   
   if(inc && inc!=0)
 	  size=12;
   
   	if(size == 12)
   		p[n].style.fontSize = size+inc + 'px';   
   }
 }
  function changeFontSizeDefault(inc)
  {
  
   var p = document.getElementsByTagName('body');  

   for(n=0; n<p.length; n++) 
   {  

   if(p[n].style.fontSize)
   {  
    var size = 12;
   } 
   else
   {
    var size = 12;   
    }
   	if(size == 12)
   		p[n].style.fontSize = size+inc + 'px';   
   }
 }
 
    
var tipwidth='150px' //default tooltip width
var tipbgcolor='lightyellow'  //tooltip bgcolor
var disappeardelay=250  //tooltip disappear speed onMouseout (in miliseconds)
var vertical_offset="0px" //horizontal offset of tooltip from anchor link
var horizontal_offset="-3px" //horizontal offset of tooltip from anchor link
var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="fixedtipdiv" style="visibility:hidden;width:'+tipwidth+';background-color:'+tipbgcolor+'" ></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, tipwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (tipwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=tipwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=(whichedge=="rightedge")? parseInt(horizontal_offset)*-1 : parseInt(vertical_offset)*-1
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
}
return edgeoffset
}

function fixedtooltip(menucontents, obj, e, tipwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidetip()
dropmenuobj=document.getElementById? document.getElementById("fixedtipdiv") : fixedtipdiv
dropmenuobj.innerHTML=menucontents

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", tipwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}
}

function hidetip(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidetip(){
if (ie4||ns6)
delayhide=setTimeout("hidetip()",disappeardelay)
}

function clearhidetip(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}   


// Added by atul Ostwal for faq
function fnFaq()
{
	document.forms[0].action = "web?requestType=ApplicationRH&actionVal=ShowFaq&queryType=select&screenId=PORT420";
	document.forms[0].method = "post";
	document.forms[0].submit();
}

//ended by atul ostwal for faq