// Below code about sum upto 1000 using for and while loop & displaying in console.  
function sum1(){
    // using for loop
    var sum =0; 
     for (var i = 1; i <= 1000; i++) { 
         sum = sum + i; 
    }  
    console.log("Sum of number using for loop= " + sum );  
}
sum1();

function sum2(){
   // using while loop
    var j   = 0;
    var add = 0;
    while (j <= 1000) {
    add += j;
    j++;
    }
    console.log("Sum of number using while loop= " + add );  
}
sum2();
 