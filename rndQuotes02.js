<!DOCTYPE html>

<html lang="en">

 <head>

  <meta charset="UTF-8">

  <title>Javascript Function, serves random quotes</title>

  <script>

function init(){
 var noOfQuotes=3;
 var rndNum=Math.floor(Math.random()*noOfQuotes)+1;
 var strText="";
 var names = [
              "Ali",
              "Shakespeare",
              "Nat King Cole",
             ];
 var quotes = [
               "\"I am the Greatest!\"",
               "\"To be, or not to be...that is the ?\"",
               "\"On a clear day one can see forever...\"",
              ]; 

/* NOTE: I had to use formula: (rndNum-1); 
          because, Javascript arrays start at index number: 0; 
          thus, the selected random number range is as follows: 1-1=0, 2-1=1, 3-1=2...or,...0,1,2/
          as opposed to being: 1,2,3...where 3 would have produced an 'undefined' error message, instead!
*/

 strText=quotes[rndNum-1] + " -" + names[rndNum-1] 
document.getElementById("divRndQuotes").innerHTML="<p>"+strText+"</p>";
}

  </script>

 </head>

 <body onLoad="init()">

  <div id="divRndQuotes"></div>

 </body>

</html>
