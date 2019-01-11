/***  Function For fill Address Details like some other Address  *****/
//  refCounter = Counter value of included address which is for Referance
//  ImplCounter= Counter value of included address which is we need to make same as Referance
  
function sameAsAbove(refCounter,implCounter)
{
 
 if(document.getElementById("check_SameAsAbove").checked==true)
 {
   document.getElementById("txt_"+implCounter+"_add1").value    = document.getElementById("txt_"+refCounter+"_add1").value;  
   document.getElementById("txt_"+implCounter+"_add2").value    = document.getElementById("txt_"+refCounter+"_add2").value;
   document.getElementById("cmb_"+implCounter+"_Country").value   = document.getElementById("cmb_"+refCounter+"_Country").value;
   
   
   
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_Country").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_Country").dispatchEvent( evObj );
   }
  
   document.getElementById("cmb_"+implCounter+"_State").value   = document.getElementById("cmb_"+refCounter+"_State").value;
   
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_State").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	  document.getElementById("cmb_"+implCounter+"_State").dispatchEvent( evObj );
   }
   
   if(document.getElementById("cmb_"+refCounter+"_State").value=="-1" || document.getElementById("cmb_"+refCounter+"_State").value==34)
   {
	   document.getElementById("cmb_"+implCounter+"_District").value= document.getElementById("cmb_"+refCounter+"_District").value;
	  
	   var subDivSize = document.getElementById("cmb_"+refCounter+"_SubDiv").options.length;
	   var subMunicipalitySize = document.getElementById("cmb_"+refCounter+"_Municipality").options.length;
	   var subBlockSize = document.getElementById("cmb_"+refCounter+"_Block").options.length;
	   
	   document.getElementById("cmb_"+implCounter+"_SubDiv").options.length=subDivSize;
       document.getElementById("cmb_"+implCounter+"_Municipality").options.length=subMunicipalitySize;
       document.getElementById("cmb_"+implCounter+"_Block").options.length=subBlockSize;
       for(var i=1;i<subDivSize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_SubDiv").options[i].text=document.getElementById("cmb_"+refCounter+"_SubDiv").options[i].text;
           document.getElementById("cmb_"+implCounter+"_SubDiv").options[i].value=document.getElementById("cmb_"+refCounter+"_SubDiv").options[i].value;
       }
	    
       for(var i=1;i<subMunicipalitySize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_Municipality").options[i].text=document.getElementById("cmb_"+refCounter+"_Municipality").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Municipality").options[i].value=document.getElementById("cmb_"+refCounter+"_Municipality").options[i].value;
       }
       
       for(var i=1;i<subBlockSize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_Block").options[i].text=document.getElementById("cmb_"+refCounter+"_Block").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Block").options[i].value=document.getElementById("cmb_"+refCounter+"_Block").options[i].value;
       }
       // In case Municipality radio is selected
       if(document.getElementById("radio_"+refCounter+"_Municipality").checked == true)
       {
    	   document.getElementById("BlockTD1_"+implCounter).style.display='none';
  		   document.getElementById("BlockTD3_"+implCounter).style.display='none';
  		 
  		   document.getElementById("MunicipalityTD1_"+implCounter).style.display='';
  		   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
  		   document.getElementById("MunicipalityTD3_"+implCounter).style.display='';
  		 
    	   document.getElementById("radio_"+implCounter+"_Municipality").checked = true;
    	   document.getElementById("cmb_"+implCounter+"_Municipality").value = document.getElementById("cmb_"+refCounter+"_Municipality").value;
       }
       // In case Block radio is selected
       if(document.getElementById("radio_"+refCounter+"_Block").checked == true)
       {
    	   document.getElementById("MunicipalityTD1_"+implCounter).style.display='none';
           document.getElementById("MunicipalityTD3_"+implCounter).style.display='none';
    		 
    	   document.getElementById("BlockTD1_"+implCounter).style.display='';
    	   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
    	   document.getElementById("BlockTD3_"+implCounter).style.display='';
    	   
    	   document.getElementById("radio_"+implCounter+"_Block").checked = true;
    	   document.getElementById("cmb_"+implCounter+"_Block").value = document.getElementById("cmb_"+refCounter+"_Block").value;
       }
       document.getElementById("cmb_"+implCounter+"_SubDiv").value  = document.getElementById("cmb_"+refCounter+"_SubDiv").value;
       
       document.getElementById("txt_"+implCounter+"_PolStation").value    = document.getElementById("txt_"+refCounter+"_PolStation").value;
       document.getElementById("txt_"+implCounter+"_PostOffice").value    = document.getElementById("txt_"+refCounter+"_PostOffice").value;
   }
   else
   {
   if(document.getElementById("cmb_"+refCounter+"_State").value!="0")
    { 
       document.getElementById("cmb_"+implCounter+"_District").value= document.getElementById("cmb_"+refCounter+"_District").value;
      
       var talukaListSize=document.getElementById("cmb_"+refCounter+"_Taluka").options.length;  
       var villageListSize=document.getElementById("cmb_"+refCounter+"_Village").options.length;
       document.getElementById("cmb_"+implCounter+"_Taluka").options.length=talukaListSize;
       document.getElementById("cmb_"+implCounter+"_Village").options.length=villageListSize;
     
         for(var i=1;i<talukaListSize;i++)
          {
           document.getElementById("cmb_"+implCounter+"_Taluka").options[i].text=document.getElementById("cmb_"+refCounter+"_Taluka").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Taluka").options[i].value=document.getElementById("cmb_"+refCounter+"_Taluka").options[i].value;
          }
          
         for(var i=1;i<villageListSize;i++)
         {
           document.getElementById("cmb_"+implCounter+"_Village").options[i].text=document.getElementById("cmb_"+refCounter+"_Village").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Village").options[i].value=document.getElementById("cmb_"+refCounter+"_Village").options[i].value;
         }
    
       document.getElementById("cmb_"+implCounter+"_Taluka").value  = document.getElementById("cmb_"+refCounter+"_Taluka").value;
       document.getElementById("cmb_"+implCounter+"_Village").value = document.getElementById("cmb_"+refCounter+"_Village").value;
   } 
 
 else
   {
     document.getElementById("txt_"+implCounter+"_District").value= document.getElementById("txt_"+refCounter+"_District").value;
     document.getElementById("txt_"+implCounter+"_Taluka").value  = document.getElementById("txt_"+refCounter+"_Taluka").value;
     document.getElementById("txt_"+implCounter+"_Village").value = document.getElementById("txt_"+refCounter+"_Village").value;
   }
   }
    
    document.getElementById("txt_"+implCounter+"_pin").value=document.getElementById("txt_"+refCounter+"_pin").value;
    document.getElementById("txt_"+implCounter+"_District").value= document.getElementById("txt_"+refCounter+"_District").value;
    document.getElementById("txt_"+implCounter+"_Taluka").value  = document.getElementById("txt_"+refCounter+"_Taluka").value;
    document.getElementById("txt_"+implCounter+"_Village").value = document.getElementById("txt_"+refCounter+"_Village").value;
 }
  else
  {
   document.getElementById("txt_"+implCounter+"_add1").value="";
   document.getElementById("txt_"+implCounter+"_add2").value="";
   document.getElementById("cmb_"+implCounter+"_Country").value="88";
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_Country").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_Country").dispatchEvent( evObj );
   }
   
   document.getElementById("cmb_"+implCounter+"_State").value="34";
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_State").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_State").dispatchEvent( evObj );
   }
   if(document.getElementById("cmb_"+implCounter+"_State").value=="-1" || document.getElementById("cmb_"+implCounter+"_State").value=="34")
   {
	     document.getElementById("cmb_"+implCounter+"_SubDiv").value="-1";
	     document.getElementById("cmb_"+implCounter+"_Municipality").value="-1";
	     document.getElementById("cmb_"+implCounter+"_Block").value="-1";
	     document.getElementById("txt_"+implCounter+"_PostOffice").value="";
	     document.getElementById("txt_"+implCounter+"_PolStation").value="";
	     
	     var subDivObj = document.getElementById("cmb_"+implCounter+"_SubDiv");
	     if(subDivObj!=null && subDivObj.length>0)
 			{
 				for(var i=subDivObj.length-1;i>=0;i--)
 				{
 					if(subDivObj.options[i].value!='-1')
 					{
 						subDivObj.options[i]=null;
 					}
 				}
 			}
	     
	     //Start : For resetting radio button and Minicipality/Block display changes
	       document.getElementById("BlockTD1_"+implCounter).style.display='none';
		   document.getElementById("BlockTD3_"+implCounter).style.display='none';
		 
		   document.getElementById("MunicipalityTD1_"+implCounter).style.display='';
		   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
		   document.getElementById("MunicipalityTD3_"+implCounter).style.display='';
		 
  	       document.getElementById("radio_"+implCounter+"_Municipality").checked = true;
	     //End : For resetting radio button and Minicipality/Block display changes
	     var municipalityObj = document.getElementById("cmb_"+implCounter+"_Municipality");
	     if(municipalityObj!=null && municipalityObj.length>0)
 			{
 				for(var i=municipalityObj.length-1;i>=0;i--)
 				{
 					if(municipalityObj.options[i].value!='-1')
 					{
 						municipalityObj.options[i]=null;
 					}
 				}
 			}
	     var blockObj = document.getElementById("cmb_"+implCounter+"_Block");
	     if(blockObj!=null && blockObj.length>0)
 			{
 				for(var i=blockObj.length-1;i>=0;i--)
 				{
 					if(blockObj.options[i].value!='-1')
 					{
 						blockObj.options[i]=null;
 					}
 				}
 			}
	     
	     
   }
   else
   {
   if(document.getElementById("cmb_"+implCounter+"_State").value!="0" )
    { 
     document.getElementById("cmb_"+implCounter+"_District").value="-1";
     document.getElementById("cmb_"+implCounter+"_Taluka").value="-1";
     document.getElementById("cmb_"+implCounter+"_Village").value="-1";
    }
   else
    {
     document.getElementById("txt_"+implCounter+"_District").value="";
     document.getElementById("txt_"+implCounter+"_Taluka").value="";
     document.getElementById("txt_"+implCounter+"_Village").value=""; 
    }
   }
    
   document.getElementById("txt_"+implCounter+"_pin").value="";
  }
  
}    

// Function added to get SameAsAbove By Passing Id
function sameAsAboveById(check_IdName,refCounter,implCounter)
{
 
 if(document.getElementById(check_IdName).checked==true)
 {
   document.getElementById("txt_"+implCounter+"_add1").value    = document.getElementById("txt_"+refCounter+"_add1").value;  
   document.getElementById("txt_"+implCounter+"_add2").value    = document.getElementById("txt_"+refCounter+"_add2").value;
   document.getElementById("cmb_"+implCounter+"_Country").value   = document.getElementById("cmb_"+refCounter+"_Country").value;
   
   
   
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_Country").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_Country").dispatchEvent( evObj );
   }
  
   document.getElementById("cmb_"+implCounter+"_State").value   = document.getElementById("cmb_"+refCounter+"_State").value;
   
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_State").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	  document.getElementById("cmb_"+implCounter+"_State").dispatchEvent( evObj );
   }
   
   if(document.getElementById("cmb_"+refCounter+"_State").value=="-1" || document.getElementById("cmb_"+refCounter+"_State").value==34)
   {
	   document.getElementById("cmb_"+implCounter+"_District").value= document.getElementById("cmb_"+refCounter+"_District").value;
	  
	   var subDivSize = document.getElementById("cmb_"+refCounter+"_SubDiv").options.length;
	   var subMunicipalitySize = document.getElementById("cmb_"+refCounter+"_Municipality").options.length;
	   var subBlockSize = document.getElementById("cmb_"+refCounter+"_Block").options.length;
	   
	   document.getElementById("cmb_"+implCounter+"_SubDiv").options.length=subDivSize;
       document.getElementById("cmb_"+implCounter+"_Municipality").options.length=subMunicipalitySize;
       document.getElementById("cmb_"+implCounter+"_Block").options.length=subBlockSize;
       for(var i=1;i<subDivSize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_SubDiv").options[i].text=document.getElementById("cmb_"+refCounter+"_SubDiv").options[i].text;
           document.getElementById("cmb_"+implCounter+"_SubDiv").options[i].value=document.getElementById("cmb_"+refCounter+"_SubDiv").options[i].value;
       }
	    
       for(var i=1;i<subMunicipalitySize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_Municipality").options[i].text=document.getElementById("cmb_"+refCounter+"_Municipality").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Municipality").options[i].value=document.getElementById("cmb_"+refCounter+"_Municipality").options[i].value;
       }
       
       for(var i=1;i<subBlockSize;i++)
       {
    	   document.getElementById("cmb_"+implCounter+"_Block").options[i].text=document.getElementById("cmb_"+refCounter+"_Block").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Block").options[i].value=document.getElementById("cmb_"+refCounter+"_Block").options[i].value;
       }
       // In case Municipality radio is selected
       if(document.getElementById("radio_"+refCounter+"_Municipality").checked == true)
       {
    	   document.getElementById("BlockTD1_"+implCounter).style.display='none';
  		   document.getElementById("BlockTD3_"+implCounter).style.display='none';
  		 
  		   document.getElementById("MunicipalityTD1_"+implCounter).style.display='';
  		   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
  		   document.getElementById("MunicipalityTD3_"+implCounter).style.display='';
  		 
    	   document.getElementById("radio_"+implCounter+"_Municipality").checked = true;
    	   document.getElementById("cmb_"+implCounter+"_Municipality").value = document.getElementById("cmb_"+refCounter+"_Municipality").value;
       }
       // In case Block radio is selected
       if(document.getElementById("radio_"+refCounter+"_Block").checked == true)
       {
    	   document.getElementById("MunicipalityTD1_"+implCounter).style.display='none';
           document.getElementById("MunicipalityTD3_"+implCounter).style.display='none';
    		 
    	   document.getElementById("BlockTD1_"+implCounter).style.display='';
    	   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
    	   document.getElementById("BlockTD3_"+implCounter).style.display='';
    	   
    	   document.getElementById("radio_"+implCounter+"_Block").checked = true;
    	   document.getElementById("cmb_"+implCounter+"_Block").value = document.getElementById("cmb_"+refCounter+"_Block").value;
       }
       document.getElementById("cmb_"+implCounter+"_SubDiv").value  = document.getElementById("cmb_"+refCounter+"_SubDiv").value;
       
       document.getElementById("txt_"+implCounter+"_PolStation").value    = document.getElementById("txt_"+refCounter+"_PolStation").value;
       document.getElementById("txt_"+implCounter+"_PostOffice").value    = document.getElementById("txt_"+refCounter+"_PostOffice").value;
   }
   else
   {
   if(document.getElementById("cmb_"+refCounter+"_State").value!="0")
    { 
       document.getElementById("cmb_"+implCounter+"_District").value= document.getElementById("cmb_"+refCounter+"_District").value;
      
       var talukaListSize=document.getElementById("cmb_"+refCounter+"_Taluka").options.length;  
       var villageListSize=document.getElementById("cmb_"+refCounter+"_Village").options.length;
       document.getElementById("cmb_"+implCounter+"_Taluka").options.length=talukaListSize;
       document.getElementById("cmb_"+implCounter+"_Village").options.length=villageListSize;
     
         for(var i=1;i<talukaListSize;i++)
          {
           document.getElementById("cmb_"+implCounter+"_Taluka").options[i].text=document.getElementById("cmb_"+refCounter+"_Taluka").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Taluka").options[i].value=document.getElementById("cmb_"+refCounter+"_Taluka").options[i].value;
          }
          
         for(var i=1;i<villageListSize;i++)
         {
           document.getElementById("cmb_"+implCounter+"_Village").options[i].text=document.getElementById("cmb_"+refCounter+"_Village").options[i].text;
           document.getElementById("cmb_"+implCounter+"_Village").options[i].value=document.getElementById("cmb_"+refCounter+"_Village").options[i].value;
         }
    
       document.getElementById("cmb_"+implCounter+"_Taluka").value  = document.getElementById("cmb_"+refCounter+"_Taluka").value;
       document.getElementById("cmb_"+implCounter+"_Village").value = document.getElementById("cmb_"+refCounter+"_Village").value;
   } 
 
 else
   {
     document.getElementById("txt_"+implCounter+"_District").value= document.getElementById("txt_"+refCounter+"_District").value;
     document.getElementById("txt_"+implCounter+"_Taluka").value  = document.getElementById("txt_"+refCounter+"_Taluka").value;
     document.getElementById("txt_"+implCounter+"_Village").value = document.getElementById("txt_"+refCounter+"_Village").value;
   }
   }
    
    document.getElementById("txt_"+implCounter+"_pin").value=document.getElementById("txt_"+refCounter+"_pin").value;
 }
  else
  {
   document.getElementById("txt_"+implCounter+"_add1").value="";
   document.getElementById("txt_"+implCounter+"_add2").value="";
   document.getElementById("cmb_"+implCounter+"_Country").value="88";
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_Country").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_Country").dispatchEvent( evObj );
   }
   
   document.getElementById("cmb_"+implCounter+"_State").value="34";
   if(navigator.appName == 'Microsoft Internet Explorer')
   {
	   document.getElementById("cmb_"+implCounter+"_State").fireEvent('onchange');
   }
   else
   {
 	  var evObj = document.createEvent('HTMLEvents');
 	  evObj.initEvent("change",true,true);
 	 document.getElementById("cmb_"+implCounter+"_State").dispatchEvent( evObj );
   }
   if(document.getElementById("cmb_"+implCounter+"_State").value=="-1" || document.getElementById("cmb_"+implCounter+"_State").value=="34")
   {
	     document.getElementById("cmb_"+implCounter+"_SubDiv").value="-1";
	     document.getElementById("cmb_"+implCounter+"_Municipality").value="-1";
	     document.getElementById("cmb_"+implCounter+"_Block").value="-1";
	     document.getElementById("txt_"+implCounter+"_PostOffice").value="";
	     document.getElementById("txt_"+implCounter+"_PolStation").value="";
	     
	     var subDivObj = document.getElementById("cmb_"+implCounter+"_SubDiv");
	     if(subDivObj!=null && subDivObj.length>0)
 			{
 				for(var i=subDivObj.length-1;i>=0;i--)
 				{
 					if(subDivObj.options[i].value!='-1')
 					{
 						subDivObj.options[i]=null;
 					}
 				}
 			}
	     
	     //Start : For resetting radio button and Minicipality/Block display changes
	       document.getElementById("BlockTD1_"+implCounter).style.display='none';
		   document.getElementById("BlockTD3_"+implCounter).style.display='none';
		 
		   document.getElementById("MunicipalityTD1_"+implCounter).style.display='';
		   document.getElementById("MuniBlockTD2_"+implCounter).style.display='';
		   document.getElementById("MunicipalityTD3_"+implCounter).style.display='';
		 
  	       document.getElementById("radio_"+implCounter+"_Municipality").checked = true;
	     //End : For resetting radio button and Minicipality/Block display changes
	     var municipalityObj = document.getElementById("cmb_"+implCounter+"_Municipality");
	     if(municipalityObj!=null && municipalityObj.length>0)
 			{
 				for(var i=municipalityObj.length-1;i>=0;i--)
 				{
 					if(municipalityObj.options[i].value!='-1')
 					{
 						municipalityObj.options[i]=null;
 					}
 				}
 			}
	     var blockObj = document.getElementById("cmb_"+implCounter+"_Block");
	     if(blockObj!=null && blockObj.length>0)
 			{
 				for(var i=blockObj.length-1;i>=0;i--)
 				{
 					if(blockObj.options[i].value!='-1')
 					{
 						blockObj.options[i]=null;
 					}
 				}
 			}
	     
	     
   }
   else
   {
   if(document.getElementById("cmb_"+implCounter+"_State").value!="0" )
    { 
     document.getElementById("cmb_"+implCounter+"_District").value="-1";
     document.getElementById("cmb_"+implCounter+"_Taluka").value="-1";
     document.getElementById("cmb_"+implCounter+"_Village").value="-1";
    }
   else
    {
     document.getElementById("txt_"+implCounter+"_District").value="";
     document.getElementById("txt_"+implCounter+"_Taluka").value="";
     document.getElementById("txt_"+implCounter+"_Village").value=""; 
    }
   }
    
   document.getElementById("txt_"+implCounter+"_pin").value="";
  }
  
}  

function EditAddressDetails(counterValue,idName)
{
	if(document.getElementById(idName).checked==true)
    { 
		
     document.getElementById("txt_"+counterValue+"_add1").readOnly = false;
     document.getElementById("txt_"+counterValue+"_add2").readOnly = false;
     document.getElementById("cmb_"+counterValue+"_Country").disabled = false;
     document.getElementById("cmb_"+counterValue+"_State").disabled = false;
     document.getElementById("cmb_"+counterValue+"_District").disabled = false;
     document.getElementById("cmb_"+counterValue+"_Taluka").disabled = false;
     document.getElementById("cmb_"+counterValue+"_Village").disabled = false;
     document.getElementById("txt_"+counterValue+"_pin").readOnly = false;
     
     document.getElementById("cmb_"+counterValue+"_SubDiv").disabled = false;
     document.getElementById("cmb_"+counterValue+"_Municipality").disabled = false;
     document.getElementById("cmb_"+counterValue+"_Block").disabled = false;
     document.getElementById("txt_"+counterValue+"_PolStation").readOnly = false;
     document.getElementById("txt_"+counterValue+"_PostOffice").readOnly = false;
     
     document.getElementById("radio_"+counterValue+"_Municipality").disabled = false;
     document.getElementById("radio_"+counterValue+"_Block").disabled = false;
     
     
     
     //document.getElementById("radio_"+counterValue+"_MuniBlock").item(0).disabled = false;
     //document.getElementById("radio_"+counterValue+"_MuniBlock").item(1).disabled = false;
     //document.getElementsByName("radio_"+counterValue+"_Municipality").item(0).disabled = false;
     //document.getElementsByName("radio_"+counterValue+"_Block").item(0).disabled = false;
     //document.form[0].radio_+counterValue+'_MuniBlock[0].disabled = false;
     //document.form[0].radio_+counterValue+'_MuniBlock[1].disabled = false;
     
    }
    else 
    {
    	
     document.getElementById("txt_"+counterValue+"_add1").readOnly =true ;
     document.getElementById("txt_"+counterValue+"_add2").readOnly = true;
     document.getElementById("cmb_"+counterValue+"_Country").disabled = true;
     document.getElementById("cmb_"+counterValue+"_State").disabled = true;
     document.getElementById("cmb_"+counterValue+"_District").disabled = true;
     document.getElementById("cmb_"+counterValue+"_Taluka").disabled = true;
     document.getElementById("cmb_"+counterValue+"_Village").disabled = true;
     
     document.getElementById("cmb_"+counterValue+"_SubDiv").disabled = true;
     document.getElementById("cmb_"+counterValue+"_Municipality").disabled = true;
     document.getElementById("cmb_"+counterValue+"_Block").disabled = true;
     document.getElementById("txt_"+counterValue+"_PolStation").readOnly = true;
     document.getElementById("txt_"+counterValue+"_PostOffice").readOnly = true;
     
     //document.getElementById("radio_"+counterValue+"_MuniBlock").item(0).disabled = true;
     //document.getElementById("radio_"+counterValue+"_MuniBlock").item(1).disabled = true;
     //document.form[0].radio_+counterValue+_MuniBlock[0].disabled = true;
     //document.form[0].radio_+counterValue+_MuniBlock[1].disabled = true;
     document.getElementById("radio_"+counterValue+"_Municipality").disabled = true;
     document.getElementById("radio_"+counterValue+"_Block").disabled = true;
     
     document.getElementById("txt_"+counterValue+"_pin").readOnly = true;
     
    }
}