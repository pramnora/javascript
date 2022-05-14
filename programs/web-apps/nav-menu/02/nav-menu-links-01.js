/*

 Created: 04:29 03/09/2019
 Updated: 02:53 07/09/2019

 This code will add an automatic horizontal navigation menu bar to your web pages:
  
  Home | Page1 | Page2 | Page3  
 
 For it to work, properly, you have to call it from each individual web page as follows...

1> Change the following line...to page names used in your actual web site...
 var strArrayPageName = ["index","page1","page2","page3","page4"];

2> Save this page as being an external script file called:
nav-menu-links-01.js

3>  Link to the external script file...from the calling page...
 <script language="javascript" type="text/javascript" src="nav-menu-links-01.js"></script>

4> From the calling page...call the following function...
 <script>
  writeNavMenuLinks("pageName"); //....replace pageName...with the actual page name you're calling the script from
 </script>

*/

function writeNavMenuLinks(strSelectedPageName){

 var strArrayPageName = ["index","page1","page2","page3"];

 document.write("<p>");

 //*** for each link inside of the array...
 for (var intEachLink = 0; intEachLink < strArrayPageName.length; intEachLink ++) {

  //*** if the 'selected page name' matches the 'array[indexPos] name'...
  if (strSelectedPageName == strArrayPageName[intEachLink]){ // outer if/else block...

   //*** if the 'selected page name' is called: index...
   if (strSelectedPageName == "index"){ // inner if/else block...

    document.write("<a href='" + strArrayPageName[intEachLink] + ".html" + "'>" 
                               + "<b><i>home</i></b>"
                               + "</a>");

   } else {

    //*** if the 'selected page name' is NOT called: index...
    document.write("<a href='" + strArrayPageName[intEachLink] + ".html" + "'>" 
                               + "<b><i>" + strArrayPageName[intEachLink] + "</i></b>"
                               + "</a>");
   }// end inner if-else decision block

  } else {

   //*** if the page name is NOT the selected page name...
   document.write("<a href='" + strArrayPageName[intEachLink] + ".html" + "'>" 
                              + strArrayPageName[intEachLink]
                              + "</a>");

  } //end outer if-else decision block

  //*** write a bar separator symbol in between each link...except the last...
  if (intEachLink != strArrayPageName.length - 1){ document.write(" | "); }

 }// end for

 document.write("</p>");

} // end function writeNavMenuLinks()

