/* 
  Created: Tue 12 Aug 2025 15:06 PM GMT
  Updated: Tue 12 Aug 2025 18:00 PM GMT
*/

// variable declarations...

totalQuestions = 4;
currentQuestion = 1;
correct = 0;
wrong = 0;

// functions...

function init(){
 totQuestions=document.getElementById("idDivTotalQuestions");
 totQuestions.innerText=totalQuestions;

 currQuestion=document.getElementById("idDivCurrentQuestion");
 currQuestion.innerText=currentQuestion;

 displayScores();
}

function displayScores(){
 correctScore=document.getElementById("idDivCorrectScore");
 correctScore.innerText=correct;

 wrongScore=document.getElementById("idDivWrongScore");
 wrongScore.innerText=wrong;
}

function check(num){


 alert("num="+num)

 selObj=document.getElementById("selQ"+num).value;

 alert("selObj="+selObj)

 if (num==1) {
   if (selObj=="London"){
    alert('correct1');
    correct += 1;
   } else {
    alert('wrong1');
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==2) {
   if (selObj=="Charles"){
    alert('correct2');
    correct += 1;
   } else {
    alert('wrong2');
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==3) {
   if (selObj=="France"){
    alert('correct3');
    correct += 1;
   } else {
    alert('wrong3');
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==4) {
   if (selObj=="18"){
    alert('correct4');
    correct += 1;
   } else {
    alert('wrong4');
    wrong += 1;
   }
   currentQuestion += 1;
 }

 displayScores();

 if (currentQuestion == totalQuestions+1) {
  alert("End of quiz! Your score is: " + correct + " out of a possible " + totalQuestions + " answers.");
 }

}


 
