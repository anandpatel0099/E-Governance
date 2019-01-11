var attributes = {id:'WBApplet' , code:'MahaSignedAppletController.class', codebase:'.', name:'WBApplet',  archive:'maha.jar,md5.jar,utils.jar',  width:0, height:0} ;
var parameters = {attachmentPath:''} ;
var version = '1.6' ;
var WBApplet;
deployJava.runApplet(attributes, parameters, version);
var numberOfUploads = 0;
function getSizeOfUploadFile(control){
	if(getExtention(control)){
		var newControl = ""; 
		var path  = control.value;
		var sizeOfAttachment = "";
		//alert('path'+path);
		if(path != ''){//alert('path inside'+path);
			if (control.files){
				var sizeOfAttachmentInBytes = control.files.item(0).fileSize;
				sizeOfAttachment = (sizeOfAttachmentInBytes / (1024 * 1024));
			}else{
				
				try{
					//var mahaApplet = document.getElementById("mahaApplet");alert('mahaApplet'+mahaApplet);
					sizeOfAttachment = WBApplet.getSizeOfAttachment(path);
				}catch (e){
					//alert(e.message);
				}
			}
			
			
			if (sizeOfAttachment > 5){
				alert("Please attach a file of less than 5 MB.");

				if (control.files){
				  newControl = document.createElement('input');
				  newControl.id    = control.id ;
				  newControl.type  = control.type ;
				  newControl.name  = control.name ;
				  newControl.size  = control.size ;
				  //newControl.class = control.class ;		//not in IE
				}else{
					newControl= control.cloneNode(false);  //this will cause value attrib to replicate in firefox
				}
				
				newControl.onchange= control.onchange;// events are not cloned  so we need to explicitly handle them
				control.parentNode.replaceChild(newControl, control); 
				
			}
			else if (sizeOfAttachment <= 0){
				alert("Please attach a non empty file ");

				if (control.files){
				  newControl = document.createElement('input');
				  newControl.id    = control.id ;
				  newControl.type  = control.type ;
				  newControl.name  = control.name ;
				  newControl.size  = control.size ;
				 // newControl.class = control.class ;	//not in IE
				}else{
					newControl= control.cloneNode(false);  //this will cause value attrib to replicate in firefox
				}
				  
				newControl.onchange= control.onchange;// events are not cloned  so we need to explicitly handle them
				control.parentNode.replaceChild(newControl,control);
			}
		}
	}
}
function getTotalUploadedFiles(formId){
	var form = document.getElementById(formId);
	if(form){

		for (var k=0; k<document.forms[0].elements.length; k++){
			 if (document.forms[0].elements[k].type == "file" && document.forms[0].elements[k].value !=''){   
					  numberOfUploads++;
			  } //if
		  } //for
		numberOfUploads++;

	}
	return numberOfUploads;
}

function getEncryptedPassword(control, salt)
{
	var cryptedPassword = '';
	var newCrypt = '';
	var password = control.value;

	if(password != ''){
		WBApplet=document.getElementById("WBApplet");
		cryptedPassword = WBApplet.encryptPassword(password.toString());
		
		if(!salt)
		{
			control.value=cryptedPassword;
			return cryptedPassword;
		}
		else
		{
			var saltKey = salt.value;
			var finalPwd = saltKey.toString() + cryptedPassword.toString();
			newCrypt = WBApplet.encryptPassword(finalPwd.toString());
			control.value=newCrypt;
			return newCrypt;
		}
	}
	return false;
}
function encryptPassword(control, salt)
{
	var cryptedPassword = '';
	var newCrypt = '';
	var password = control.value;
	var saltKey = salt.value;
	
	if(password != ''){
		WBApplet = document.getElementById("WBApplet");
		cryptedPassword = WBApplet.encryptPassword(password.toString());
		newCrypt = WBApplet.getEncryptedPassword(cryptedPassword.toString() + '|' + saltKey.toString());
		control.value = newCrypt;
	}
	return newCrypt;
}

function getEncryptedFormData11(dataString){
	
	var cryptedDataString = '';
	
	if(dataString != ''){
		WBApplet=document.getElementById("WBApplet");
		cryptedDataString = WBApplet.encryptPassword(dataString);
		
	}
	return cryptedDataString;
}
