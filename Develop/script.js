

var generateBtn = document.querySelector("#generate");

//This function generates the password.
function wPassword() {
    //This loop checks the size of the password and test if that is between 8 to 128 carachters as well if that is a number or not
    let size = 0;
    while (size < 8 || size > 128) {

        size = prompt ("Choose a password from 8 to 128 carachters");

        if (size < 8 || size > 128) {
            alert("Please choose a password from 8 to 128 carachters");
        }
        if (isNaN(size)) {
            alert('Is not a number'); size = 0;
        }
    }

    //Create variables for numbers, lowercase, uppercase, and characters and confirm whether or not the user wants to include them in the password.
    let numbers = confirm ("Include numbers [1-9] (OK=Yes, Cancel=No)");
    let lCase = confirm ("Include lowercase [a-z] (OK=Yes, Cancel=No)");
    let uCase = confirm ("Include uppercase [a-z] (OK=Yes, Cancel=No)");
    let char = confirm ("Include special carachters [!#$%&'()*+,-./:;<=>?@[\]^_`{|}~] (OK=Yes, Cancel=No)");

    //If all the options were marked as "NO" it gives an alert  to choose at least one character
    if (!numbers && !lCase && !uCase && !char) {
     alert ('You must choose at least one character!');
        return wPassword();
    }

    //It adds the variables chosen in the previous test, to the variable that will be used as the basis for generating the password.
    let lPassword = "";

     if (numbers == true){
        lPassword = lPassword + "0123456789";
     }

     if (lCase == true){
        lPassword = lPassword + "abcdefghijklmnopqrstuvwxyz";
     }

     if (uCase == true){
        lPassword = lPassword + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     }

     if (char == true){
        lPassword = lPassword + "!#$%&*+,-.:;<=>?@^|~";
     }


     //Once the base variable has been filled in, the number of characters in this variable is checked and then the password is generated.
     let password ="";  
     let len= lPassword.length

     for (let i = 0; i < size; i++) { password += lPassword[Math.floor(Math.random() * len)] };

     //Linking JS to HTML file
    // document.getElementById("demo1").innerHTML = "Your Secure Password:";
     document.getElementById("demo").innerHTML = password;
}
