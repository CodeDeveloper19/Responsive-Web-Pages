const x = document.getElementById("number_of_letters"); // This line of code allows me to read the user inputs from the input field tag.
const y = document.getElementById("number_of_numbers");
const z = document.getElementById("number_of_symbols");

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["@", "#", "$", "%", "&", "*", "!"];

// function at_the_start(){
//     alert("Please note that the maximum length of your generated password will be 8 digits. \nSo select the exact number of number of letters, numbers, and symbols.");
// }

function checker() {

    let num_x = parseInt(x.value)
    let num_y = parseInt(y.value)
    let num_z = parseInt(z.value)

    var password = []

    for (i=0; i<num_x; i++) {
        var l = letters[Math.floor(Math.random()*letters.length)];
        password.push(l)
    }
    for (i=0; i<num_y; i++) {
        var m = numbers[Math.floor(Math.random()*numbers.length)];
        password.push(m)
    }
    for (i=0; i<num_z; i++) {
        var n = symbols[Math.floor(Math.random()*symbols.length)];
        password.push(n)
    }

    const final_password = password.sort(() => Math.random() - 0.5) // The sort attributes helps scatter the inputs in the password array*/

    const final_result = final_password.join ("");  // The join class helps merge the elements of the array together with a chosen seperator in-between the brackets.  

    alert ("Your newly generated password is " + final_result);
}




