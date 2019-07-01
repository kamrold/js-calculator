   
  
var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
function numone(){  
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "1";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "1";  
 }  
   
}  
function numtwo(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "2";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "2";  
 }  
   
}  
function numthree(){  
    
  if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "3";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "3";  
 }  
    
}  
function numfour(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "4";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "4";  
 }  
   
}  
function numfive(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "5";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "5";  
 }  
   
}  
function numsix(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "6";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "6";  
 }  
   
}  
function numseven(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "7";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "7";  
 }  
}  
function numeight(){  
   
 if (document.calculator.display.value == "0"){  
    
  document.calculator.display.value = "8";  
      
 }  
 else if (document.calculator.display.value == result)  
 {  
  document.calculator.display.value = "8";  
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "8";  
 }  
   
}  
function numnine(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  document.calculator.display.value = "9";  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "9";  
 }  
   
}  
function numzero(){  
   
 if (document.calculator.display.value == "0"){  
    
  document.calculator.display.value = "0";  
      
 }  
 else if (document.calculator.display.value == result)  
 {  
  document.calculator.display.value = "0";  
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "0";  
 }  
   
}  
function numdobuzero(){  
   
 if (document.calculator.display.value == "0" || document.calculator.display.value == result){  
    
  return;  
      
 }  
 else //if(document.calculator.display.value != "0")  
 {  
  documentdocument.calculator.display.value = document.calculator.display.value + "00";  
 }  
   
}  
function clr(){  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = "";  
 return;  
}  
  
function operationplus(){  
   
 operation = "+";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = firstnumber + operation;  
 //alert(firstnumber);  
    
}  
function operationmult(){  
   
 operation = "*";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = firstnumber + operation;  
   
}  
function operationminus(){  
   
 operation = "-";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = firstnumber + operation;  
   
}  
function operationdivid(){  
   
 operation = "/";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = firstnumber + operation;  
   
}  
function operationperc(){  
   
 operation = "%";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
 document.calculator.displayu.value = firstnumber + operation;  
   
}  
function equalsto(){  
   
 secondnumber = parseInt(document.calculator.display.value);  
   
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
 }  
 else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
    
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;  
     
 }  
 else if (operation == "%"){  
    
  if (document.calculator.display.value == "0"){  
    
  result = firstnumber ;  
  document.calculator.displayu.value = firstnumber + operation + "";  
  }  
  else if (document.calculator.display.value != "0")  {  
   result = firstnumber / secondnumber ;  
   document.calculator.displayu.value = firstnumber + operation + secondnumber + "* = " + result;  
  }  
 }  
 else if (operation == "^"){  
    
  for (var i = 0; i < secondnumber; i++){  
     
   result = firstnumber * i;  
  }  
    
    
 }  
 document.calculator.display.value ="";  
 document.calculator.display.value = result.toString();  
 document.calculator.displayu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
 return;  
   
}  
  
function sqrots(){  
 firstnumber = document.calculator.display.value;  
 result = Math.sqrt(parseInt(document.calculator.display.value));  
 document.calculator.display.value = result;  
 document.calculator.displayu.value = "sqrt(" + firstnumber + ") = " + result;  
   
}  
  
function operationraistop(){  
   
 operation = "^";  
 firstnumber = parseInt(document.calculator.display.value);  
 document.calculator.display.value = "0";  
   
}  
  
