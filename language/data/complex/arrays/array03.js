//*** Create an associative array: {}...

var person = {name:"Paul",age:51,sex:"M"};
var text="";
var eachDataItem="";

for (eachDataItem in person){
  text += person[eachDataItem] + " ";
}

alert(text); //Paul 51 M
