# javascript
Javascript code

-----

JAVASCRIPT - A VERY HIGHLY POPULAR WEB PAGE PROGRAMMING LANGUAGE 

Javascript is, usually, the main 'front end' programming language that is used inside of web browsers, now-a-days; either in the form of...

a> pure 100% Javascript code  
b> JQuery, which is a Javascript related library of functions

The really good thing about learning to write/run Javascript code...is there is absolutely nothing to either set up/or, download. In order to work with Javascript; then, you will need just 2 things, which tend to come already built in to any modern day operating system platform, namely:-

1> A text editor...I usually use the built in Windows Notepad. 

Other text editors you can download for FREE are...  
-> Notepad++  
-> SublimeText  
-> -etc.

2> A web browser software...most Operating System platforms now-a-days already come with 'web browser' software built-in; in the case of Windows plaforms it usually comes with IE-Internet Explorer web browser. 

Your web browser software already contains a built-in Javascript code interpeter program...which both knows how to read Javascript codes/and, so display the Javascript output, effectively.

Other web browsers you can download for FREE are...
-> Google Chrome  
-> Mozilla Firefox  
-> Apple Safari  
-> Opera  
-> -etc.

(Some developers like to test that both their web page/script code works correctly inside of 'multiple' different web browsers.) 

-----

HOW TO INCLUDE JAVASCRIPT INSIDE OF WEB PAGES

Javascript, is generally written to run inside of web pages in one of 2 different ways...

1> Inside of the HTML web page itself; where the Javascript code may be included inside of either...

a> the HEAD-/HEAD tags, at the top of the web page  
b> the BODY-/BODY tags; at the bottom of the page...that way the entire page can finish loading before the script runs.

2> As an external script file; that is linked to from inside of the HTML web page. 

(<)script type="text/javascript" src="js01.js(>)(<)/script(>)    

STARTING THE SCRIPT RUNNING

If your script is not enclosed inside of a function; it will run instantly, right away.

alert(0);

If your script is enclosed inside of a function...; then, nothing runs until when the function name actually gets called: 

function test(){  
 alert(0);  
}

Sometimes, the start BODY tag will add something like the following to start the scripts running when the web page has already finished loading...

<BODY onLoad="javascript:test();">

-----

TESTING JAVASCRIPT

There are 2 ways to test javascript...

Method 1: (short form) : USING A SIMPLE [.html] filename extension

<script>alert("hi, from Javascript!")</script>  

Save the file as...

filename.html

...and, left double click to run it; your web browser will launch; read/execute the source code; and, then, display the Javascript output.

Method 2: (long form) : USING A [barebone.html] DOCUMENT

<DOCTYPE html>  
<html lang="en">  
 <meta charset="utf-8">  
 <head>
  <title>Test Javascript</title>      
  <script>alert("hi, from Javascript!")</script>    
 </head>    
 <body>  
 </body>  
</html>  

Save the file as...  
filename.html  
...again, left double click to run it; your web browser should automatically launch itself; read/execute the Javascript source code; and, then, display the output.

Using this 2nd method is the 'correct' way of doing things. However, when I'm in a hurry; and, don't wish to write a [barebone.html] file, first; then, I just simply use the more straight forwards Method 1; which, I find usually works inside of most web browsers. Basically, if the web browser doesn't see any [barebone.html] already having been included; then, the web browser will automatically add that [barebone.html] code all on it's own.




