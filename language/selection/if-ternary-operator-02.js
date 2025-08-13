/* Illustrating the use of Javascript's 'ternary' operator...;

   It's called ternary...because it has 3 different parts to it...;
   test ? doOption1 : doOption2

   In reality, it's just a 1 line shortened version of the multi-line statement: if/else.
   So, this program could be re-written using the longer version as:

   x = 1; 

   if (x){
    alert(1);
   } else {
    alert(0);   
   }

*/

x = 1; // global var

function doTest(y){ // create function accepting a single parameter: y

 // if var y equals 1 then display an alert message box(1) else display an alert message box(0)...

 y == 1 ? alert(1) : alert(0);

}

doTest(x); // do function call with a single argument being passed in
