# javascript

JAVASCRIPT CODE

Here are some Javascript code snippets which you can freely study/learn from.

**Document last modified**: *Sat 19th Aug 2023 15:20 PM GMT*

-----

SEE/INTERACT WITH THE JAVASCRIPT CODE INSIDE OF THIS REPOSITORY

- https://prg-js.netlify.app   

-----

Table Of Contents:-

**1.00 JAVASCRIPT - A VERY HIGHLY POPULAR WEB PAGE PROGRAMMING LANGUAGE**  
**1.01 HOW TO INCLUDE JAVASCRIPT INSIDE OF WEB PAGES**  
**1.02 STARTING THE SCRIPT RUNNING**  
**1.03 TESTING JAVASCRIPT**  
**1.04 LINKS**

-----

**1.00 JAVASCRIPT - A VERY HIGHLY POPULAR WEB PAGE PROGRAMMING LANGUAGE** 

Javascript is, usually, the main 'front end' programming language that is used inside of web browsers, now-a-days; either in the form of...

a> pure 100% Javascript code (HTML web page: internal Javascript - head/body section; or, external Javascript file: [.js])      
b> the use of a Javascript library/or, framework such as: JQuery, Bootstrap, React, Angular, Vue, Svelte/-etc. (there are, quite literally, 100's of these available)    

Javascript code can also be employed in the 'back end' by installing NodeJS  

c> then, you can simply run Javascript code directly from the Windows Command Prompt; also, commonly referred to as: CLI/Command Line Interface.    
d> alternatively, instead of Windows Command Prompt...you could also use Windows Powershell to execute the Javascript code    

...using either the Windows Command Prompt/or, Powershell...the command to execute Javscript code is:   

C:\>node filename.js

**WRITE/RUN PURE 100% JAVASCRIPT CODE**

The really good thing about learning to write/run pure 100% Javascript code...is there is absolutely nothing to either set up/or, download. 

In order to work successfully with Javascript; then, you will need just 2 things, which tend to come already built into any modern day operating system platform, namely:-

1> A text editor...I usually use the built in Windows Notepad; (which is mainly due to long term 'bad' habit!).  

Other text editors you can download and use for FREE are...    

-> Notepad++  
-> SublimeText  
-> Atom  
-> Visual Studio Code  
-> Bracketts  
-> -etc.  

...these other text editors are by far preferable to using Windows Notepad plain text editor software; in that they often offer a much wider range of options:    

- MDI/Multiple Document Interface, meaning you can open, all at once, within the same editor multiple files, including: HTML/CSS/Javascript  
- Other editors give you 'syntax highlighting'...; this makes finding errors much easier to spot before runnning the code  
- Other editors include: intellisense...this gives you hints as to what valid keywords you should type, next...as you are typing code in on the fly; thus, making the web development process...not just faster/but, also, a lot more accurate, as well  
- Other editors also have loads of add in's...automatic code formatting  
- Other editors can include 'syntax highlighting' for other programming languages, too...such as: Python, C, -etc.  

2> A web browser software...most Operating System platforms now-a-days already come with 'web browser' software built-in; in the case of Windows plaforms it usually comes with IE-Internet Explorer web browser. 

Your web browser software already contains a built-in Javascript code interpeter program...which both knows how to read Javascript codes/and, so display the Javascript output, effectively.

Other web browsers you can download and use for FREE are...
  
-> Google Chrome  (highly recommended for use by most web developers)    
-> Mozilla Firefox  
-> Apple Safari  
-> Opera  
-> Brave
-> -etc.

(**NOTE**: As a form of best practice, some developers like to test that both their web page/script code works correctly inside of 'multiple' different web browsers; before they release the final code...; as some browsers will accept what are the 'latest' additions to the Javascript language such as: ES6/ES7/ES8/ES9/-etc.; whilst older browsers won't be able to accept/understand what are those new additions at all...?!)       

(**NOTE**: Javascript, is actually an application of ECMAScript/European Computer Manufacturer Association Script. There are other applications, also, known as: ActionScript/LiveScript/Microsoft JScript/-etc. So, this is what the ES part represents in the abbreviation ES6/ECMAScript 6.)   

**WRITE/RUN/TEST JAVASCRIPT CODE DIRECTLY INSIDE OF GOOGLE CHROME WEB BROWSER**

It might also be well worthwhile noting that...; I often tend to use Google Chrome web browser; -(which a lot of web developers tend to recommend over using other web browsers as offering the best development platform)-; it is possible to 'write/test/run' Javascript code directly inside of the Chrome web browser itself. 

Inside of Chrome web browser...

1> Just press function key: [F12] to open up Chrome's set of web development tools   
2> next, select the Console tab  
3> then, type in your Javascript code  
4> press [Enter] key; and, the code should, automatically, execute  

**NOTE**: Pressing the 'up/down' arrow keys will take you through any previous commands you may have typed; (so, you don't need to type that same code in, again) 

-----

**1.01 HOW TO INCLUDE JAVASCRIPT INSIDE OF WEB PAGES**

Javascript, is generally written to run inside of web pages in one of 2 different ways...

1> Inside of the HTML web page itself; where the Javascript code may be included inside of either...

a> the HEAD-/HEAD tags, at the top of the web page  
b> the BODY-/BODY tags; at the bottom of the page...that way the entire page can finish loading before the script runs.  
c> as inline code...that is included inside of the HTML tag itself  
 
2> In the HEAD-/HEAD section of the web page you can include a link to an external Javascript file: [.js]...  

(<)script type="text/javascript" src="js01.js(>)(<)/script(>)    

**NOTE**: Please, take out the pair of curly brackets: () that you see being inserted inside of the above code to surround the angle brackets: <>; I had to include these as otherwise the code would not display here.

-----

**1.02 STARTING THE SCRIPT RUNNING**

If your script is not enclosed inside of a function; then, it will run instantly, right away.

alert(0);  

If your script is enclosed inside of a function...; then, nothing runs until when the function name actually gets called:  

// function declaration block...  
function test(){  
 alert(0);  
}

test(); // function call  

Sometimes, the start BODY tag will add something like the following to start the scripts running when the web page has already finished loading...

(<)BODY onLoad="javascript:test();"(>)

NOTE: Please, take out the pair of curly brackets: () that you see being written inside of the above code to surround the angle brackets: <>; I had to include these as otherwise the code would not display here.

-----

**1.03 TESTING JAVASCRIPT**

There are 2 ways to test javascript...

Method 1: (short form) : USING A SIMPLE [.html] filename extension

(<)script(>)alert("hi, from Javascript!")(<)/script(>)  

NOTE: Please, take out the pair of curly brackets: () that you see being written inside of the above code to surround the angle brackets: <>; I had to include these as otherwise the code would not display here.

Save the file as...

filename.html

...and, left double click to run it; your web browser will launch; read/execute the source code; and, then, display the Javascript output.

Method 2: (long form) : USING A [barebone.html] DOCUMENT

(<)DOCTYPE html(>)    
(<)html lang="en"(>)    
 (<)meta charset="utf-8"(>)    
 (<)head(>)  
  (<)title(>)Test Javascript(<)/title(>)        
  (<)script(>)alert("hi, from Javascript!")(<)/script(>)      
 (<)/head(>)      
 (<)body(>)    
 (<)/body(>)    
(<)/html(>)  

NOTE: Please, take out the pair of curly brackets: () that you see being written inside of the above code to surround the angle brackets: <>; I had to include these as otherwise the code would not display here.

Save the file as...  
filename.html  
...again, left double click to run it; your web browser should automatically launch itself; read/execute the Javascript source code; and, then, display the output.

Using this 2nd method is the 'correct' way of doing things. However, when I'm in a hurry; and, don't wish to write a [barebone.html] file, first; then, I just simply use the more straight forwards Method 1; which, I find usually works inside of most web browsers. Basically, if the web browser doesn't see any [barebone.html] already having been included; then, the web browser will automatically add that [barebone.html] code all on it's own.

-----

## **1.04 LINKS**

Microsoft (FREE/just register)...  
- https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript?WT.mc_id=beginner-c9-niner  

### Resources

- https://babeljs.io/  
- https://caniuse.com/
- https://www.ecma-international.org/ecma-262/6.0/  
- https://kangax.github.io/compat-table/es6/  

## WRITE/RUN JAVASCRIPT CODE INSIDE OF YOUR OWN WEB BROWSER ONLINE

- http://codepen.io/  
- http://codesandbox.io  
- http://jsbin.com  
- http://jsconsole.com      
- http://jsfiddle.net  
- http://www.jscompress.com  
- http://playcode.io  
- http://www.w3schools.com/js  

## YouTube Videos

JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours  - (Channel: Dave Gray)    
- https://www.youtube.com/watch?v=EfAl9bwzVZk&t=2819s  

JavaScript Programming All-in-One Tutorial Series (9 HOURS!) - (Channel: Caleb Curry)   
- https://www.youtube.com/watch?v=9M4XKi25I2M&t=361s    

JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)  - (Channel: Clever Programmer)  
- https://www.youtube.com/watch?v=lI1ae4REbFM&t=12919s  

Learn JavaScript by Building 7 Games - Full Course - (Channel: FreeCodeCamp.org)  
- https://www.youtube.com/watch?v=ec8vSKJuZTk  


-----


HTML CSS JS projects (Beginner): 16 projects using HTML CSS and JavaScript - (Channel: JavaScript King)  
- https://www.youtube.com/watch?v=EWv2jnhZErc&t=121s  











