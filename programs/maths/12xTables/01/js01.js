function printTimesTables(){

 //*** Variable declarations...

 var strOut = "";
 var tablesNo = Number(document.form1.text1.value);


 //*** use loop to calculate times tables.../
 //    and, then, store result inside of an output string...

 for (var timesNo=1;timesNo<13;timesNo++){
  strOut += "" + timesNo + " x " + tablesNo + " = " + timesNo * tablesNo + "<br>";
 }

 //*** display times tables output...

 displayTimesTables = document.getElementById("idDisplayTimesTables");
 displayTimesTables.innerHTML = strOut;

}
