/* Created: 21:44 20/08/2019
   Updated: 08:03 21/08/2019 */

function markGuess(x){
 resetColours();
 var x = document.getElementById(x);
 x.style.backgroundColor='silver';
 x.style.color='white';
}

function markCorrectAnswer(x){
 var x = document.getElementById(x);
 x.style.backgroundColor='green';
 x.style.color='white';  
}

function resetColours(){
 var x = new Array('a','b','c','d');
 for (var y = 0; y < x.length; y++){
  var z = document.getElementById(x[y]);
  z.style.backgroundColor='white';
  z.style.color='black';
 }
}

