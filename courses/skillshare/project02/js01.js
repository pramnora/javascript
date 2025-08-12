/* 
  Created: Tue 12 Aug 2025 15:06 PM GMT
  Updated: Tue 12 Aug 2025 18:55 PM GMT
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

 displayScores();
}

function displayScores(){

 if (currentQuestion <= totalQuestions){
  currQuestion=document.getElementById("idDivCurrentQuestion");
  currQuestion.innerText=currentQuestion;
 }

 correctScore=document.getElementById("idDivCorrectScore");
 correctScore.innerText=correct;

 wrongScore=document.getElementById("idDivWrongScore");
 wrongScore.innerText=wrong;

}

function check(num){

 selObj=document.getElementById("selQ"+num).value;

 if (num==1) {
   if (selObj=="London"){
    correct += 1;
   } else {
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==2) {
   if (selObj=="Charles"){
    correct += 1;
   } else {
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==3) {
   if (selObj=="France"){
    correct += 1;
   } else {
    wrong += 1;
   }
   currentQuestion += 1;
 }

 if (num==4) {
   if (selObj=="18"){

    correct += 1;
   } else {
      wrong += 1;
   }
   currentQuestion += 1;
 }

 displayScores();
 printFinalScore();


}

function printFinalScore(){
  if (currentQuestion > totalQuestions) {
   x=document.getElementById("idDivFinalResultsScore"); 
   x.innerHTML="<strong>-End of quiz!-</strong><br>Your score is: " + correct + " out of a possible " + totalQuestions + " correct answers.";
  }
 }

 
