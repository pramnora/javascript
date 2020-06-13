# QNA/Question And Answer Test

-----

## EXPLANATION

I tried to create a very simple, and, straight forwards 'question and answer' test...;  
which does NOT keep any scores of the user guesses.  

Basically, this type of Q&A application is really just a form of practice 'drilling'...where the user can...  
- step through each question/answer (without needing to guess)  
- repeatedly, guessing/and, guessing, again...at the answers as many times as they please  
...there are no marks being given; and, therefore, there are no penalties if you fail.  

## LIST OF POSSIBLE FUTURE UPDATES  

I hope to be able to at some later stage update it...by adding on a totals scores, indicating:     
-Right number of guesses  
-Wrong number of guesses  
-Also, headings to state...  
-- what is the total number of questions  
-- what particular question we're on  
-etc.  

-----

## 8 x Files (including this [README.md])    

5 x HTML Web pages...  

1 - index.html  (user instructions/introductory explanations of how to use the program)  
2 - q1.html  (multiple choice question 1 with 4 possible answers)    
3 - q2.html  (multiple choice question 2 with 4 possible answers)    
4 - q3.html  (multiple choice question 3 with 4 possible answers)    
5 - finish.html (end of test page)   

*NOTE*: Each [.html] web page contains buttons: [Start]/[Next]/[Previous]/[End];  
      some of these buttons may be disabled to start with.

Plus, 2 x Resource files...  

6 - css01.css  (the CSS sheet using CSS3 rules such as: 'linear-gradient'/and, 'text-shadow' effects  
7 - js01.js  (the JS file controls displaying which answer is: 'selected'/also, which answer is: 'correct'...
              it does this by changing colours:   
              'silver' indicates user selected that particular answer by 'clicking' on it;      
              'green' indicates which is the correct answer...user clicks button [Show answer] to display which answer is correct.  
              
The combination of both Javascript/CSS...gives user feedback right throughout the entire quiz;      
instead, of being overly serious...the constantly changing colours of the UI/User Interface...;  
makes it feel a lot more like playing a 'game'.

-----

## Links

Here is the link to where this web page can be see/interacted with 'live'...
https://prg-javascript.netlify.app/qna/001/index.html
