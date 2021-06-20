function checkFactorial(num)
{
    var factorial = 1;
    
   for (var i = 1; i<=num; i++)

{   
     factorial = factorial * i;

}
    return factorial;
    

}
var result = checkFactorial(3);

console.log(result);
