//*** Here I'm using the map function to add +1 all the members inside of a numbers array...

//*** NOTE: I find it really interesting that using the map function...;  
//          this can all be achieved with just 1 single line of code.


[1,2,3].map(num => num + 1);
//output...
//[2, 3, 4]

//...the above code can be re-written as...

var arrayNums = [5,6,7];
arrayNums.map(num => num + 1);
//output...
//[6, 7, 8]

//...using the map function to find the number squared...

arrayNums.map(num => num * num);
//output...
//[25, 36, 49]



