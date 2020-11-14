//*** This alert message box...is called from the web page HEAD-/HEAD section;
//     and, will display itself, instantly, right away; and,
//     'before' the rest of the web page BODY-/BODY section loads...

alert("Javascript message box alert.\n\nDemo: Linking to an external Javascript file:\n\njs-write.html\n...linked to...\njs-write.js.");

//*** This function...being called from the web page initial BODY tag...by using the onLoad="" event...; 
//     will only display itself after all the rest of the web page has fully loaded, first...

function showMessage(){
 alert("Javascript message box alert.\n\nDemo: Javascript, onLoad='' event, external file function call.");
}
