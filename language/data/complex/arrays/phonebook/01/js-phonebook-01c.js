   function showNoOfRecords(){
    var noOfRecords = phonebook.length;
    document.getElementById("inpNoOfRecs").value = noOfRecords;
   }   function showAll(){
    showNoOfRecords();
    output = "";
    for (var x = 0; x < phonebook.length; x++){
     buildOutput(x+1,x);
    }
    document.getElementById("divOutput").innerHTML = output;
   }
   function clearOutput(){
    output = "";
    document.getElementById("inpNoOfRecs").value = 0;
    document.getElementById("inpSearchText").value = "";
    document.getElementById("divOutput").innerHTML = output;
   }
   function search(){
    output = "";
    var noOfRecordsFound = 0;
    var searchText = document.getElementById("inpSearchText").value;
    for (var x = 0; x < phonebook.length; x++){
     var n = (phonebook[x].category).includes(searchText);
     if (n) { 
      buildOutput(++noOfRecordsFound,x);
     }
    }
    document.getElementById("inpNoOfRecs").value = noOfRecordsFound;
    document.getElementById("divOutput").innerHTML = output;
   } //...end of function/search()
   function buildOutput(recNo,x){
    output += "<hr />" + recNo + "&gt;"
                                                        + "<br /><b>Category</b>: " + phonebook[x].category
           + "<br /><b>Name</b>: "                                                  + phonebook[x].name
      if (phonebook[x].reference  != null)  {output += "<br /><b>Reference</b>: "   + phonebook[x].reference;} 
      if (phonebook[x].number     != null)  {output += "<br /><b>Number</b>: "      + phonebook[x].number;} 
      if (phonebook[x].mobile     != null)  {output += "<br /><b>Mobile</b>: "      + phonebook[x].mobile;} 
      if (phonebook[x].url        != null)  {output += "<br /><b>URL</b>: "         + phonebook[x].url;}
      if (phonebook[x].address    != null)  {output += "<br /><b>Address</b>: "     + phonebook[x].address;} 
      if (phonebook[x].email      != null)  {output += "<br /><b>Email</b>: "       + phonebook[x].email;} 
      if (phonebook[x].notes      != null)  {output += "<br /><b>NOTES</b>: "       + phonebook[x].notes;}
                         + "<hr />";    
                return output;				
   }   
