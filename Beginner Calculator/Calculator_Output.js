// This is for making the buttons to display its values when clicked
result = document.getElementById('result');

result.disabled = true;

let first_input = [];
let main_first = [];
let operator_sign;
let second_input = [];
let output = [];
let output2 = [];
let output_final = [];
let unknown = [];
let substring;
let substring2;

let m;

let callcount = 0; // for counting the number of times the operator buttons were clicked
let callcounts = 0; // for counting the number of times the calculation() function was 
let callcountss = 0; // for counting the number of times the number of dots (decimals) button was clicked 
let countingofminus = 0; // for counting the number of times the minus button was clicked

function displaybuttons4(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined  && output2.length < 8){
        if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
            second_input.push("7");
            output2 = second_input.join("");
            result.value = output2;
        } else {
            first_input.push("7");
            output = first_input.join("");
            result.value = output;
        }
    }
}
function displaybuttons5(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("8");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("8");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons6(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("9");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("9");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons8(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("4");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("4");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons9(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("5");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("5");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons10(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("6");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("6");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons12(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("1");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("1");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons13(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("2");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("2");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons14(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("3");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("3");
        output = first_input.join("");
        result.value = output;
    }
}
}
function displaybuttons15(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (callcountss < 1 || operator_sign != undefined){
        if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
            for (let i=0; i==callcountss; i++) // This loop prevents the user from inputting a decimal the second time
            {
                second_input.push(".");
                output2 = second_input.join("");
                result.value = output2;
            }
        } else  {
            first_input.push(".");
            output = first_input.join("");
            result.value = output;
        }
    }
    callcountss += 1;
}
}
function displaybuttons16(){
    if (operator_sign == undefined){
        output = [];
    }
    if (output.length < 8 || operator_sign != undefined && output2.length < 8){
    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.push("0");
        output2 = second_input.join("");
        result.value = output2;
    } else {
        first_input.push("0");
        output = first_input.join("");
        result.value = output;
    }
}
}

// This is the section for operators
function displaybuttons17(){
    callcountss = 0;
    countingofminus = 0;
    if (operator_sign == undefined){
        result.value = "";
    }
    if (output.length > 0){ //Prevents the operator buttons from being clicked multiple times
        callcount += 1;
        console.log("D")    }

    if (output.length == 0 && output2.length == 0){
        result.value = "";
        console.log("A") 
    } else {
        if (output.length != 0){ //Prevents the operator from starting the calculation first instead of an integer
            console.log("B") 
            if (callcount % 2 == 0){
                console.log("I") 
                if (output2.length > 0){
                    console.log("T") 
                    calculation();
                }
                operator_sign = "add";
            } else if (callcount % 2 != 0 && callcount != 1 && output2.length != 0) {
                console.log("C") 
                calculation();
                operator_sign = "add";
            } else {
                console.log("H") 
                calculation();
                operator_sign = "add";
            }
        } else {
            console.log("S") 
            result.value = "";
        }
    }
}
function displaybuttons1(){
    callcountss = 0;
    countingofminus = 0;
    if (operator_sign == undefined){
        result.value = "";
    }
    if (output.length > 0){ //Prevents the operator buttons from being clicked multiple times
        callcount += 1;
        console.log("D")    }

    if (output.length == 0 && output2.length == 0){
        result.value = "";
        console.log("A") 
    } else {
        if (output.length != 0){ //Prevents the operator from starting the calculation first instead of an integer
            console.log("B") 
            if (callcount % 2 == 0){
                console.log("I") 
                if (output2.length > 0){
                    console.log("T") 
                    calculation();
                }
                operator_sign = "divide";
            } else if (callcount % 2 != 0 && callcount != 1 && output2.length != 0) {
                console.log("C") 
                calculation();
                operator_sign = "divide";
            } else {
                console.log("H") 
                calculation();
                operator_sign = "divide";
            }
        } else {
            console.log("S") 
            result.value = "";
        }
    }
}

function displaybuttons11(){
    addingofminus();
    subtraction();
}

function subtraction(){
    callcountss = 0;
    console.log (output)
    let str = output.charAt(0)
    console.log ("H")
    if (str == 1 || str == 2 || str == 3 || str == 4 || str == 5 || str == 6 || str == 7 || str == 8 || str == 9 || str == 0 || output.length > 1){ //Prevents the operator from starting the calculation first instead of an integer
        console.log ("a")
        if (operator_sign == undefined){
            console.log ("p")
            result.value = "";
        }
        if (output.length > 1){ //Prevents the operator buttons from being clicked multiple times
            callcount += 1;
        }
        console.log (callcount)
        if (callcount % 2 == 0 && operator_sign != undefined){
            console.log ("i")
            if (output2.length > 1){
                console.log ("b")
                calculation();
                countingofminus = 0;
            }
            operator_sign = "subtract";
        } else if (callcount % 2 != 0 && callcount != 1 && str == '-') {
            console.log ("o")
            if (output2.length > 1){
                console.log ("y")
                calculation();
                countingofminus = 0;
            }
        } else if (operator_sign == undefined){
            console.log ("z")
            operator_sign = "subtract";
        } else if (callcount == 1 || callcount % 2 != 0 || callcount % 2 == 0) {
            calculation();
            countingofminus = 0;
        }
    } 
}


function displaybuttons3(){
    callcountss = 0;
    countingofminus = 0;
    if (operator_sign == undefined){
        result.value = "";
    }
    if (output.length > 0){ //Prevents the operator buttons from being clicked multiple times
        callcount += 1;
        console.log("D")    }

    if (output.length == 0 && output2.length == 0){
        result.value = "";
        console.log("A") 
    } else {
        if (output.length != 0){ //Prevents the operator from starting the calculation first instead of an integer
            console.log("B") 
            if (callcount % 2 == 0){
                console.log("I") 
                if (output2.length > 0){
                    console.log("T") 
                    calculation();
                }
                operator_sign = "multiply";
            } else if (callcount % 2 != 0 && callcount != 1 && output2.length != 0) {
                console.log("C") 
                calculation();
                operator_sign = "multiply";
            } else {
                console.log("H") 
                calculation();
                operator_sign = "multiply";
            }
        } else {
            console.log("S") 
            result.value = "";
        }
    }
}
function displaybuttons2(){
    callcountss = 0;
    countingofminus = 0;
    if (operator_sign == undefined){
        result.value = "";
    }
    if (output.length > 0){ //Prevents the operator buttons from being clicked multiple times
        callcount += 1;
        console.log("D")    }

    if (output.length == 0 && output2.length == 0){
        result.value = "";
        console.log("A") 
    } else {
        if (output.length != 0){ //Prevents the operator from starting the calculation first instead of an integer
            console.log("B") 
            if (callcount % 2 == 0){
                console.log("I") 
                if (output2.length > 0){
                    console.log("T") 
                    calculation();
                }
                operator_sign = "percent";
            } else if (callcount % 2 != 0 && callcount != 1 && output2.length != 0) {
                console.log("C") 
                calculation();
                operator_sign = "percent";
            } else {
                console.log("H") 
                calculation();
                operator_sign = "percent";
            }
        } else {
            console.log("S") 
            result.value = "";
        }
    }
}
/*****************************************************************/

function addingofminus(){ //Allows the minus sign to be added as an input

    if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        for (let i=0; i==countingofminus; i++) // This loop prevents the user from inputting a decimal the second time
            {
                if (output2.length < 1){ // Delete incase
                    console.log ("N")
                    second_input.push("-");
                    output2 = second_input.join("");
                    result.value = output2;
                }
            }
    } else if (output.length > 0){
        console.log ("G")
    }
     else {
         console.log ("S")
        first_input.push("-");
        output = first_input.join("");
        result.value = output;
    }
    countingofminus += 1;
}
function calculation() {  // The calculation of the inputs take place here
    callcounts += 1;
    if (output2.length == 0 && operator_sign == undefined){ // This IF allows us to only key-in a single digit even add negative numbers
        result.value = output;
    } else {
        switch (operator_sign){
            case "add":
                output_final = parseFloat(output) + parseFloat(output2); // With parseFloat the system is able to recognise the dot (decimals) as inputs 
                break;
        
            case "subtract":
                output_final = parseFloat(output) - parseFloat(output2);
                break;
        
            case "multiply":
                output_final = parseFloat(output) * parseFloat(output2);
                break;
        
            case "divide":
                output_final = parseFloat(output) / parseFloat(output2);
                break;  
            case "percent":
                output_final = parseFloat(output) * 0.01;
                result.value = output_final;
        }
            
        m = Number((Math.abs(output_final) * 10000000).toPrecision(15)); // This helps approximate the output to five decimal places.
        substring = Math.round(m) / 10000000 * Math.sign(output_final);
        substring2 = substring.toString(); // This then converts the answer in number form into a string
        result.value = substring2.substring(0, 8); // In string form, the system then rounds up the answer to eight significant figures

        output = output_final;

    if (callcount % 2 != 0 || callcounts > 1){
        operator_sign = undefined;
    }

    first_input = [];
    second_input = [];
    output2 = [];
    callcount = 0;
    }   
}

function clearscreen(){
    result.value = "";
    output = [];
    output2 = [];
    callcount = 0;
    callcounts = 0;
    callcountss = 0;
    operator_sign = undefined;
    first_input = [];
    second_input = [];
    output_final = [];
    m = [];
}

function displaybuttons19(){ // Used to for reducing the inputs and final amnswer of the user by one digit
    if (callcounts < 2 && operator_sign!="multiply" && operator_sign!="percent"  && operator_sign!="subtract"  && operator_sign!="divide" && operator_sign!="add"){ 
        first_input.pop();
        output = first_input.join("");
        result.value = output;
    } 
    else if (operator_sign == "add" || operator_sign == "subtract" || operator_sign == "multiply" || operator_sign == "divide" || operator_sign == "percent"){
        second_input.pop();
        output2 = second_input.join("");
        result.value = output2;
    }
}


