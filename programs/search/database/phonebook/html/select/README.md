# Phonebook app.

**CREATED**: *Fri 22 Aug 2025 22:59 PM GMT*  
**UPDATED**: *Sat 23 Aug 2025 02:47 AM GMT*  

-----

## Introduction

I wanted to be able to **test** my WebDev skills to see just how *fast* I could build a simple and straight forwards: Javascript phonebook application, of the type where you...  

- select name  
- then, click a button to retrieve phone number  

...to be honest, I didn't find this exercise to be particularly easy.  

At first, I thought it would take me just 1/2 an hour or less...  

- keep all 'HTML/CSS/Javascript' code being located together inside of 'one' single web page file    
- develop the UI    
- test the Javascript works  

...then, hours later on...I found myself still working away on it...trying to fix bugs...???    

Also, having to re-write the application...so that it works...  

- not just on the surface UI-User Interface level  
- but, also, that the underlying 'source code' was laid out clear/and, is well commented.  
 

-----

# App. design  
 
The overall application design is really quite simple, and, straight forwards enough...;    
basically, there are just 2 objects:  

1. A HTML select drop down list object,    
   (used to store all of the 'names/phone numbers' data)    
       
2. A div id object,  
   (used for outputting the found data)  

3. Javascript code,    
   (used to get the selected form name/phone number;  
   and, to display that phone number inside of the div object)  

-----

# There are 4 separate versions of this code...

-----

1> CodePen.io

- https://codepen.io/paulramnora/pen/KwdRJWR

**NOTE**: I started off by trying to build the project at CodePen.io;   
but, found a number of bugs...; so, later on, decided to work on fixing all the bugs offline. 

Later on, I returned back to work on the code at CodePen.io...until when I had a fully working application.  

-----

2> GitHub source code  

When I had finished working on the version I'd created offline...;  
then, I uploaded that same 'source code' into my GitHub online a/c. Javascript repository:   

- https://github.com/pramnora/javascript/blob/master/programs/search/database/phonebook/html/select/js-phonebook-app-a.html

-----

3> Next, I created a separate 'live' version of this code which is being stored inside of my Netlify a/c.:

- https://pr-phonebook.netlify.app/

-----

4> 
  
## Code compression

When I looked at what was the original 'source code'...I noticed that it consisted of 182 lines in length.  

When I removed...  

- all unnecessary code comment lines   
- all unnecessary blank vertical space lines  
   
...then, I very quickly discovered these lines were, in fact, 'halved'.  
-(Not entirely a huge surprise to me...; as I've experienced seeing such things many times before.)-        
    
But, what if it was possible to compress that code down even further still...;  
with the ultimate aim of compressing it down to reach what is it's ultimate 'limit'...???       
Well, eventually, I was able to compress 182 lines down to become just 4 lines in length...!    

Of course, this very highly 'compressed' code version...  
does no longer function exactly the same as did the original full blown version;        
however, it is essentially the same code as was there before.   
You select a name/click the button: [Phone number]/and, the corresponding phone number of that name appears.  

You just have to add further select:   
option="value"  
...statements...by using 'copy and paste'. 

Naturally, of course, the more you copy and paste:   
option="value"...;       
...then, the longer the code gets...; or, rather the database just grows.   

The final 4 line compressed version of the code is here:  

- https://github.com/pramnora/javascript/blob/master/programs/search/database/phonebook/html/select/js-phonebook-app-j.html  

...though, I have to admit...one can never really state that any code is, in fact, final...;  
when there are endless possible versions of it which one can produce...???  
