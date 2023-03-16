
function leapYear() {
    Year = document.getElementById('year').value;
    res = + Year;
    if(res % 4 === 0){
        if(res % 100 === 0){
            if(res % 400 === 0) {
                document.getElementById('result').style.visibility="visible";
                document.getElementById('result').value = "This is a leap year.";
                document.getElementById('result').style.fontWeight="bold";
                document.getElementById('result').style.color="green";
            }
            else{
                document.getElementById('result').style.visibility="visible";
                document.getElementById('result').value = "This is not a leap year.";
                document.getElementById('result').style.fontWeight="bold";
                document.getElementById('result').style.color="red";            
            }
        }
        else {
            document.getElementById('result').style.visibility="visible";
            document.getElementById('result').value = "This is a leap year.";
            document.getElementById('result').style.fontWeight="bold";
            document.getElementById('result').style.color="green";       
        }
    }
    else{
        document.getElementById('result').style.visibility="visible";
        document.getElementById('result').value = "This is not a leap year.";
        document.getElementById('result').style.fontWeight="bold";
        document.getElementById('result').style.color="red";

    }
}

