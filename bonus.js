function largestElement(num)
{
    var largest = num[0];

    for (i = 0; i < num.length; i++)
    {
        element = num[i];
        

        if (element > largest)
        {
            largest = element;
        }


        }
    return largest;



}

var num = [12231, 123, 3213, 213, 12, 12123, 4545, 1231];

var output = largestElement(num);

console.log(output);