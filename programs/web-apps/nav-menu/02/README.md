Created: 17:36 14/05/2022  
Updated: 17:36 14/05/2022
-----

17:36 14/05/2022

As any experienced programmer knows...; 
if you haven't been working on code for a long while...;  
then, one tends to completely forget what that code, actually, does...?

When I visted this repository...I found only 1 x file being included there...   
nav-menu-links-01.js  
...so, I next decided to find out for myself exactly 'how' this file works.

-----

From my GitHub Javascript repository...

https://github.com/pramnora/javascript/tree/master/programs/web-apps/nav-menu/02

...downloaded file...  
nav-menu-links-01.js  
...in order to go test it out.

Next, I went and created: 4 x separate web pages...

page1.html  
page2.html  
page3.html  
page4.html  

...each linking to the [.js] file...by using a pair of script tags in the head section of each web page document.

And, inside of the body section, each page calls the function...  

writeNavMenuLinks("pageName")  

**NOTE**: The pageName call doesn't use any [.html] extension.  

...and, so the menu gets written out as...  

*home*|page 1|page 2|page 3|page 4  

...with the particular page you are on being 'highlighted'...as italic text.  

-----

I also created/updated the Netlify GitHub [index.html] file...  
which allows the end user to both 'view/test' all files being found inside of this Javascript repository.

https://prg-js.netlify.app/ 

-(**NOTE:** The Netlify/GitHub [index.html] file...still needs to be further updated...;      
as not all links are ready...or, fully up and working, yet.)-
