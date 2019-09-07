/*
 Created: 04:29 03/09/2019
 Updated: 02:53 07/09/2019
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

