//...function to serve up a different random quote each time it is called...
function writeARandomQuote(){
 var noOfQuotes=3;
 var rndNum = Math.floor(Math.random()*noOfQuotes)+1;
 switch (rndNum){
  case 1:document.write("\"To be; or, <b>not</b> to be...; that is the ?\" - (Shakespeare)"); break;      
  case 2:document.write("\"I am the GREATEST!\" - (Ali)");break;
  case 3:document.write("\"On a clear day, one can see forever...\" - (Nat King Cole)");
 }
}
