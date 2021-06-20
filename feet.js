function inchesTofeet(inch)
{
    var num = inch / 12;
    
    var unit = "inches";

    var result = num.concat(unit);

    console.log(result);
    
    return num;


}


inchesTofeet(40)