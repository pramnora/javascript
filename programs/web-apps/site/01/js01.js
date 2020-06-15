/*
  NOTE: 
  This script will create an automatic header for your web page; containing
  black coloured buttons; and, also, 'selected' page highlighted red.
  The script works in conjunction with the corresponding stylesheet.
  All the user has to do from within the linked to web page is...
   doNav("Home"); 
   Replace "Home" with your own page name, instead.
*/
/* Web page navigation menu links... */
var links = [ 
  {
   pageName:"index.html",
   linkName:"Home"
  },
  {
   pageName:"page1.html",
   linkName:"Page 1"
  },
  {
   pageName:"page2.html",
   linkName:"Page 2"
  },
  {
   pageName:"page3.html",
   linkName:"Page 3"
  }
]
function doNav(strLinkName){
 document.write("<nav>");
 document.write("<ul>");
 for (var intEachLink=0; intEachLink < links.length; intEachLink++){
  if (links[intEachLink].linkName == strLinkName) {
                document.write("<li class='clsSelected'>" 
                + links[intEachLink].linkName 
                + "</li>");
  } else {
                document.write("<li><a href='" 
                + links[intEachLink].pageName + "'>" 
                + links[intEachLink].linkName 
                + "</a></li>");
  }
 }
 document.write("</ul>");
 document.write("</nav>");
}
