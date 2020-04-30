/*
  PROGRAM: Find primes
 LANGUAGE: Javascript

 COMPUTER: Home based PC/Windows 10 Professional
   EDITOR: Windows Notepad
  BROWSER: Google Chrome

   AUTHOR: Mr. Paul Ramnora
    EMAIL: pramnora@yahoo.com
COPYRIGHT: (c)2020-, Mr. Paul Ramnora./All rights reserved.

  CREATED: 23:17 29/04/2020
  UPDATED: 23:18 29/04/2020
*/

function checkIfPrime(){

 var intCount=0;
 var intNo=0;
 var strOutput="";
 var strFactors="";
 var strYesNo="";
 var intMaxNo = document.getElementById("idMaxNo").value;
 var divOutput = document.getElementById("idOutput");

 for (var intNo=1 ; intNo <= intMaxNo ; intNo++) {
   if (intMaxNo % intNo == 0) {
    intCount++;
    strFactors = strFactors + intNo + " "	 
   }
 }

 if (intCount == 2) {
  strYesNo = "Y";
 } else {
  strYesNo = "N";
 }

 strOutput = strOutput + "<hr><p><b>Number</b>: " + intMaxNo + "</p>";

 strOutput = strOutput + "<p><b>Factors</b>: " + strFactors + "</p>" 

 strOutput = strOutput + "<p><b>Total factors</b>: " + intCount + " " + "</p>";

 strOutput = strOutput + "<p><b>Prime</b>: " + strYesNo + "</p>";

 divOutput.innerHTML=strOutput;

}

