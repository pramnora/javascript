/*** Javascript for...
      Your Name's web site

      Created: 15:14 12/05/2022
      Updated: 15:29 14/05/2022
***/ 

function showMainMenu(){
 document.write("<br><span style='background-color:yellow'><b>&nbsp;~~~ Main Menu ~~~&nbsp;</b></span><br><br>");
 document.write("<b>Arts</b>: " +
                "<a href='drawings.html'>Drawings</a><br>");
 document.write("<b>Education</b>: " +
                "<a href='maths.html'>Maths</a><br>");
 document.write("<b>General</b>: " +
                "<a href='index.html'>Homepage</a> - " +
                "<a href='links.html'>Links</a><br>");
 document.write("<b>Writings</b>: " +
                "<a href='diary.html'>Diary</a> - " +
                "<a href='phonebook.html'>Phonebook</a> - " +
                "<a href='to-do.html'>To do...</a><br><br>");
}

function writeH1HeaderText(){
 document.write("<h1><br>Your Name's<br>") +
 document.write("--- ") +
 document.write("<span id='idWebSiteTitleText'>") +
 document.write("web site") +
 document.write("</span>") +
 document.write(" ---<br><br>") +
 document.write("</h1>");
}

