
function asciiEncoder(){

 /*
  In the case of the Encoding process...
  1. Grab a single letter at a time: A-Z      (possible check if A-Z was entered...?)
  2. Encode: Letter -> 2 digit number: 01-26  ()possible check numbers are in range: 01-26)
  */

 // variable declarations...

 var idDivOutput = document.getElementById("idDivOutput");                  // use variable to point to form div output object...so, that we can write to it, later
 var outputString = "";                                                      // working variable used inside of loop to build output string
 var userString = document.frm1.txt1.value;                                  // capture user string value that has been typed in from form

 // main program...

   /*
    -(NOTE: There are 2 basic methods to show each separate number:-

      1. Use a comma:(,) seperator in between each number;
         in order to quite clearly be able to distinguish one number from a next:
         eg.1111 could mean: 1,11,1 or 11,1,1 or 1,1,1,1 ?!
         a comma clearly separates up each number: 1,11,1/so, we know exactly what it is.

      2. Alternatively, add a  0 prefix...
         will also, clearly separate each number: 01,11...are both NOT the same.)- 
   */


 userString = userString.toUpperCase();                                      // convert user string to being all upper case letters
  
 for (var eachCharNo = 0 ; eachCharNo < (userString.length) ; eachCharNo++){ // for loop cycles through each character in user string

   asciiNumber = userString[eachCharNo].charCodeAt()-64;                     // gets the asciiNumber code: A = 1, B =2, -etc.        

   if(asciiNumber < 10){                                                     // if the asciiNumber is a single digit (less than 10)
    asciiNumber = '0' + asciiNumber;                                         // then, add a prefix digit of 0 to the number: 1 = 01, 2 = 02, -etc.
   }

   outputString += asciiNumber;                                              // add to the output string the asciiNumber

/* start of commented out code...NOT used...
   if (eachCharNo != userString.length-1){                                   // if the loop end number isn't yet reached;
    outputString += ",";                                                     // then, show comma after each asciiNumber
   } 
   ...end of commented out code */

 }

 idDivOutput.innerText = outputString;                                       //...write to div output object

}

