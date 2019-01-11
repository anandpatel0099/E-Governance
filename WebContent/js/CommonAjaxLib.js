//*******************************************************************
//File Name	      : CommonAjaxLib.js
//File Purpose	  : This file can be used for all JSPs which uses Ajax to fill up dropdown
//Developer Name  : Samir Vadariya(156957)
//Date            : 26-June-2006
//*******************************************************************

function clearCombo(field)
{  
    while(eval('document.forms[0].'+field).length > 1)
    {           
       eval('document.forms[0].'+field).options.remove(1);
    }
}

function injectComponentBehaviors(parentId,childId,url,otherParams,fieldEvent) {
        var doubleComboOptions = {};
        //var cmbValue = document.forms[0].region.value;
        //alert("injectComponentBehaviors:cmbValue"+cmbValue);        
        new DoubleCombo( parentId,
                         childId,
                         url,
                         doubleComboOptions,
                         otherParams,
                         fieldEvent);
     }
     
//-------------------- mContentLoader.js
var net = new Object();

net.READY_STATE_UNINITIALIZED= 0;
net.READY_STATE_LOADING      = 1;
net.READY_STATE_LOADED       = 2;
net.READY_STATE_INTERACTIVE  = 3;
net.READY_STATE_COMPLETE     = 4;

net.ContentLoader = function( component, url, method, requestParams ) {
   //alert("In ContentLoader");
   this.component     = component;
   this.url           = url;
   this.requestParams = requestParams;
   this.method        = method;
}

net.ContentLoader.prototype = {

   getTransport: function() {
      var transport;
      if ( window.XMLHttpRequest )
         transport = new XMLHttpRequest();
      else if ( window.ActiveXObject ) {
         try {
            transport = new ActiveXObject('Msxml2.XMLHTTP');
         }
         catch(err) {
            transport = new ActiveXObject('Microsoft.XMLHTTP');
         }
      }
      return transport;
   },

   sendRequest: function() {

      //if ( window.netscape && window.netscape.security.PrivilegeManager.enablePrivilege)
      //   netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');

      var requestParams = []
      for ( var i = 0 ; i < arguments.length ;  i++ )
         requestParams.push(arguments[i]);

      var oThis = this;
      var request = this.getTransport();
      //alert("sendRequest: " + this.url);
          
       //  
       //Jitesh (16-Aug-06): use encodeURI for i18n
       request.open( this.method, encodeURI(this.url+"&"+this.queryString(requestParams)), true );
       //alert("url1 in sendRequest="+this.url+"&"+this.queryString(requestParams));
      
      
      //request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded');
      //
      //Jitesh (16-Aug-06): set character encoding to UTF-8 for i18n.
      request.setRequestHeader( 'Content-Type', 'text/html; charset=UTF-8');
      request.onreadystatechange = function() { oThis.handleAjaxResponse(request) };
      //alert("this.queryString(requestParams):"+this.queryString(requestParams));
      request.send( this.queryString(requestParams) );
  },

  queryString: function(args) {

     var requestParams = [];
     for ( var i = 0 ; i < this.requestParams.length ; i++ )
        requestParams.push(this.requestParams[i]);
     for ( var j = 0 ; j < args.length ; j++ )
        requestParams.push(args[j]);

     var queryString = "";
     if ( requestParams && requestParams.length > 0 ) {
        for ( var i = 0 ; i < requestParams.length ; i++ )
           queryString += requestParams[i] + '&';
        queryString = queryString.substring(0, queryString.length-1);
     }
     //alert("queryString: " + queryString);
     return queryString;
  },

  handleAjaxResponse: function(request, slaveId) {
     if ( request.readyState == net.READY_STATE_COMPLETE ) {
        if ( this.isSuccess(request) )
        {
        	//this.component.ajaxUpdate(request);
        	 var domObj=getDOMFromXML(request.responseText);
        	 this.component.ajaxUpdate(domObj);
        }
        else
           this.component.handleError(request);
     }
  },

  isSuccess: function(request) {
    return  request.status == 0 
        || (request.status >= 200 && request.status < 300);
  },
  
  getRequestParams: function() {
      var params = "";
      for(i=0;i<document.forms[0].elements.length;i++)
      {
         params = params+"&"+document.forms[0].elements[i].name+"="+document.forms[0].elements[i].value;
      }      
      return params;
  }    
  

};


//-------------------- mDoubleCombo.js

function DoubleCombo( masterId, slaveId, url, options,otherParams, fieldEvent ) {
   //alert("In double combo");     
   this.master     = masterId.split(",");
   this.AllSlaves     = slaveId;   
   this.slaveId    = slaveId.split(",");
   this.options    = options;
   this.fieldEvent = fieldEvent;
   this.otherParams = (otherParams != false)?otherParams.split(","):[];
   this.ajaxHelper = new net.ContentLoader( this, url, "POST", options.requestParameters || [] );

   this.initializeBehavior();
}

DoubleCombo.prototype = {

   initializeBehavior: function() {
      //alert("In initializeBehavior");
      var oThis = this;             
      for(i=0;i<this.master.length;i++)
      {         
         if(this.fieldEvent == 1)//onChange
         {  
            document.getElementById(this.master[i].split("=")[1]).onchange = function() { oThis.masterComboChanged();};
         }   
         else if(this.fieldEvent == 2)//onClick
         {
            document.getElementById(this.master[i].split("=")[1]).onclick = function() { oThis.masterComboChanged();};
         }  
      }
      
      //this.master.onchange = function() { oThis.masterComboChanged(); };
   },

   masterComboChanged: function() {
       setMousePointer();
       //displayProgressImage(this.slaveId);
      //alert("masterComboChanged:"+fieldObj.name);
      var masters = new Array(this.master.length);
      for(var i=0;i<this.master.length;i++)
      {
         masters[i] = this.master[i].split("=")[1];
      }
      if(window.userOnchangeFunction)
      {
         userOnchangeFunction(masters);
      }
      //alert("this.master.length"+this.master.length);
      var masterValue = 'TotalFields='+this.master.length;
      //alert("this.fieldEvent"+this.fieldEvent);
      if(this.fieldEvent == 1)
      {   
          if(this.master.length > 1 || ( this.otherParams != null && this.otherParams.length > 0 ) )
          {
              for(j=0;j<this.master.length;j++)
              {
                 keyValue = this.master[j].split("=");
                 mstObj = document.getElementById(keyValue[1]);         
                 masterValue = masterValue+'&'+keyValue[0]+'='+ mstObj.value;
                 if(j==0)
                 {
                    masterValue = masterValue + '&Master1='+ mstObj.value;
                 }
              }
              masterValue = masterValue+'&AllSlaves='+this.AllSlaves;
          }
          else
          {
              keyValue = this.master[0].split("=");              
              mstObj = document.getElementById(keyValue[1]);         
              masterValue = masterValue+'&Master1='+ mstObj.value+'&'+keyValue[0]+'='+ mstObj.value;
              masterValue = masterValue+'&AllSlaves='+this.AllSlaves;
          }
      }
      else if(this.fieldEvent == 2)
      {
          this.master =[];
      }      
      if(this.otherParams != null && this.otherParams.length >0)
      {
        for(j=0;j<this.otherParams.length;j++)
        {           
           keyValue = this.otherParams[j].split("=");
           mstObj = document.getElementById(keyValue[1]);           
           masterValue=masterValue+'&'+keyValue[0]+'='+mstObj.value;           
        }
        masterValue = masterValue+'&AllSlaves='+this.AllSlaves;
      }  
      //var query = fieldObj.options[fieldObj.selectedIndex].value;
      //alert("masterValue2:"+masterValue);
      this.ajaxHelper.sendRequest( masterValue ); 
   },

   ajaxUpdate:  function(request) {
      for(var j=0;j<this.slaveId.length;j++)
      {
          //var slaveOptions = this.createOptions(request.responseXML.documentElement, this.slaveId[j]);
    	  var slaveOptions = this.createOptions(request, this.slaveId[j]);
          slaveObj = document.getElementById(this.slaveId[j]);
          slaveObj.length = 0;
          var optionsObj = slaveObj.options;
          for ( var i = 0 ; i < slaveOptions.length ; i++ )
             optionsObj.add( slaveOptions[i] );
          //removeProgressImage(this.slaveId[j]);
      }  
      resetMousePointer();
   },

   createOptions: function(ajaxResponse, slaveId) {
      var newOptions = [];      
      var entries = ajaxResponse.getElementsByTagName(slaveId);      
      for ( var i = 0 ; i < entries.length ; i++ ) {
         var text  = this.getElementContent(entries[i],'optionText');         
         var value = this.getElementContent(entries[i],'optionValue');         
         newOptions.push( new Option(text, value) );
      }
      return newOptions;
   },

   handleError: function(request) {
      if ( this.options.errorHandler )
         this.options.errorHandler(request);
   },

   getElementContent: function(element,tagName) {
      var childElement = element.getElementsByTagName(tagName)[0];
      return childElement.text != undefined ? childElement.text : childElement.textContent;
   }   
   
};

function getDOMFromXML(xmlString){	
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

  function displayProgressImage(arrSlaveId)
  {
     for(var i=0;i<arrSlaveId.length;i++)
     {
        var rData = document.getElementById(arrSlaveId[i]);
        var cid = 'Img_'+arrSlaveId[i];
        var imgElem = document.createElement("img");
        imgElem.setAttribute("id",cid);
        imgElem.setAttribute("src", "images/ajax_loader.gif");
        var parent = rData.parentNode;
        var newChild = parent.appendChild(imgElem);
        //rData.parentNode.innerHTML+="<img id='" +cid+ "' src='/IWAS/APPS/images/ajax_loader.gif'>";
     }
     
  }
  
  function removeProgressImage(slaveId)
  {     
     var cid = 'Img_'+slaveId;     
     var child = document.getElementById(cid);     
     var parent = child.parentNode;     
     parent.removeChild(child);     
  }
  
  function setMousePointer()
  { 
    if(document.all) 
      for (var i=0;i < document.all.length; i++) 
        document.all(i).style.cursor = 'wait';         
  } 
  
  function resetMousePointer() 
  { 
     if(document.all)
       for (var i=0;i < document.all.length; i++) 
          document.all(i).style.cursor = 'default';
  } 
  
  //Added By Atul for Common Ajax Request and Cross browser Compatibility
    
  
  function SendAjaxRequest(url,functionCall,requestType)
  {
	var AjaxReq=new Ajax.Request(url,
  	{
  		method:'post',
  		asynchronous:requestType,
  		onSuccess: eval(functionCall),
  		onFailure: eval(AjaxError)
  		}
  	);
  } 

  function AjaxError()
  {
  	alert("Sorry,There might be Some Errors in Request");
  } 