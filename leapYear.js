function isLeap(year){

    const remainder = year % 4;

    if (remainder == 0)
    {
         console.log("Its a leap Year");
        return true;
        
      
                    }

                        else
            {

                    console.log("Not  a leap Year");

             return false;
            
    }

}

const check = isLeap(2018);

console.log(check);