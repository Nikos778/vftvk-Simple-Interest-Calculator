function compute() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years)
    var interest = principal * years * rate /100;
    result = document.getElementById("result");
    result.innerHTML=
    "If you deposite" + "<mark>" + (principal) + "</mark>" + " <br> " + 
    "At an interest rate of" + "<mark>" + (rate) + "</mark>" + " <br> "+ 
    "You will recieve an amount of" + "<mark>" + (interest) + "</mark>" + " <br>" + 
    "In the year" + "<mark>" + (year) + "</mark>";


}
    
function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
function validation() {

    var num = /^[0]+$/;
    if (principal.value.match(num))  {

    alert("Enter Positive Number");

    

    }
    else {

        null;
    }

}
        
