

var commonPasswords = new Array('password', 'pass', '1234', '1246'); 
 
var numbers = "0123456789"; 
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var punctuation = "!.@$£#*()%~<>{}[]"; 
 
function checkPassword(password) { 
 	//alert(password);
    var combinations = 0; 
    var calPara=0;
    
 
    if (contains(password, numbers) > 0) { 
        combinations += 10; 
        calPara++;

    } 
 
    if (contains(password, lowercase) > 0) { 
        combinations += 26; 
        calPara++;
    } 
 
    if (contains(password, uppercase) > 0) { 
        combinations += 26;
        calPara++;
    } 
 
    if (contains(password, punctuation) > 0) { 
        combinations += punctuation.length; 
        calPara++;
    } 
 
    // work out the total combinations 
    var totalCombinations = Math.pow(combinations, password.length); 
 
    // if the password is a common password, then everthing changes... 
    if (isCommonPassword(password)) { 
        totalCombinations = 75000 // about the size of the dictionary 
    } 
 
    // work out how long it would take to crack this (@ 200 attempts per second) 
    var timeInSeconds = (totalCombinations / 200) / 2; 
 
    // this is how many days? (there are 86,400 seconds in a day. 
    var timeInDays = timeInSeconds / 86400 
 
    // how long we want it to last 
    var lifetime = 365; 
 
    // how close is the time to the projected time? 
    var percentage = timeInDays / lifetime; 
 
    var friendlyPercentage = cap(Math.round(percentage * 100), 100); 
    if (totalCombinations != 75000 && friendlyPercentage < (password.length * 5)) { 
        friendlyPercentage += password.length * 5; 
    } 
 
    var progressBar = document.getElementById("progressBar"); 
    progressBar.style.width = friendlyPercentage + "%"; 
    //alert(calPara);
    if (percentage > 1 && calPara>=3) { 
        // strong password 
        progressBar.style.backgroundColor = "#3bce08";
        document.getElementById("spnStrength").innerText ="Strong";
        //document.getElementById("spnStrength").color="#3bce08";
        return; 
    } 
 
    if (percentage > 0.5 && calPara>=2) { 
        // reasonable password 
        progressBar.style.backgroundColor = "yellow";
        document.getElementById("spnStrength").innerText ="Reasonable";
        //document.getElementById("spnStrength").color="#ffd801";
        return; 
    } 
 
    if (percentage > 0.00 && calPara>=1) { 
        // weak password 
        progressBar.style.backgroundColor = "red"; 
        document.getElementById("spnStrength").innerText ="Weak";
        //document.getElementById("spnStrength").color="orange";
        return; 
    } 
 
    // useless password! 
//    if (percentage <= 0.02) { 
//        // weak password 
//        progressBar.style.backgroundColor = "red"; 
//        document.getElementById("spnStrength").innerText ="Not Valid";
//        return; 
//    } 
 
 
} 
 
function cap(number, max) { 
    if (number > max) { 
        return max; 
    } else { 
        return number; 
    } 
} 
 
function isCommonPassword(password) { 
 
    for (i = 0; i < commonPasswords.length; i++) { 
        var commonPassword = commonPasswords[i]; 
        if (password == commonPassword) { 
            return true; 
        } 
    } 
 
    return false; 
 
} 
 
function contains(password, validChars) { 
 
    count = 0; 
 
    for (i = 0; i < password.length; i++) { 
        var char = password.charAt(i); 
        if (validChars.indexOf(char) > -1) { 
            count++; 
        } 
    } 
 
    return count; 
} 
 
 
 
 
 


