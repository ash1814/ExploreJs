function isPrime(number)
{
    for (i = 2; i < number; i++)
{
    if (number % i == 0)
    {
        return "Not a prime number";

        
        }
       
}
      return "is a Prime Number";
}

    var result = isPrime(57);
    console.log(result);
