function signup(e) {
    var inputtxt = document.getElementById("signup-name");
    var contact = document.getElementById("contact");
    var signemail = document.getElementById("okemail");
    var address = document.getElementById("add").value;
    var p = document.getElementById('pass').value;
    var user = document.getElementById('UserName').value;
    var gender = document.querySelector("input[name=radio-stacked]:checked").value;

    console.log(user);

    var xname = new Boolean(false);
    var yconatact = new Boolean(false);
    var zpassword = new Boolean(false);
    var kemail = new Boolean(false);
    var userbool = new Boolean(false);


    // alert(xname +"name"+yconatact+"contact"+ kemail+"mail"+ userbool+"user"+ zpassword+"pass");

    console.log(signemail)
    errors = [];
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var numbers = /^[0-9]+$/;

    var usercheck = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;



    if (inputtxt.value.length == 0 || contact.value.length == 0 || signemail.value.length == 0 || address.length == 0 || user.length == 0 || gender.length == 0) {
        alert(
            "Please fill all the fiels then sign up"
        );
        e.preventDefault();
    }
    else {

       // Name Validation
        if (inputtxt.value.length != 0) {
            if (!inputtxt.value.search(/[0-9]/)) {
                errors.push("No Number is allowed in Name field .");
                alert("No Number is allowed in Name field .")
            }
            else if (!inputtxt.value.search(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
                console.log(inputtxt.value.search(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/));
                errors.push("No special charactr is not allowed in Name field");
                alert("No special charactr is not allowed in Name field");
            }
            else {
                xname = true;
            }
        }

        // Email Validation

         if (signemail.value.match(mailformat)) {
            kemail = true;
             console.log("Email Check")
         } else {
             errors.push("Enter Correct Email.")
             alert("Enter Correct email");
         }

        // Contact Validation

        var z = contact.value;
        console.log(z.length)
        if (z.match(numbers) && z.length == 10) {
            yconatact = true;

        }
        else {
            if (z.length < 10) {
                errors.push("Enter 10 digit mobile number")
                alert("Enter 10 digit mobile number")
            } else {
                errors.push("Please only enter Contact Number in only numeric characters   and only 10 digit is allowed")
                alert("Please only enter Contact Number in only numeric characters   and only 10 digit is allowed");
            }
        }


        // User Name Validation
        if (user.match(usercheck)) {
            userbool = true;
        } else {
            userbool=false;
            errors.push("Enter Correct UserId with alphanueric")
            alert("Enter Correct Userid");
        }



        // Password Validation

        if (p.length != 0) {
            zpassword = true;
            if (p.length < 8) {
                errors.push("Your password must be at least 8 characters");

            }
            if (p.search(/[a-z]/i) < 0) {
                errors.push("Your password must contain at least one letter.");

            }
            if (p.search(/[0-9]/) < 0) {
                errors.push("Your password must contain at least one digit.");
            }
            if (errors.length > 0) {
                alert(errors.join("\n"));
                e.preventDefault();
                return false;
            }
        }

        // alert(xname +" =name "+yconatact+" =contact"+ kemail+" =mail"+ userbool+" =user"+ zpassword+" =pass");

        if (xname && yconatact && kemail && userbool && zpassword) {
            let UserData = {
                Name: inputtxt.value,
                Contacat: contact.value,
                Email: signemail.value,
                UserName: user,
                Password: p,
                Address: address,
                Gender: gender
            }
            localStorage.setItem("userData", JSON.stringify(UserData));
            let detail = JSON.parse(localStorage.getItem('userData'));
            // console.log(detail);
            // console.log(JSON.parse(localStorage.getItem('userData')));
            e.preventDefault();
            window.location.href = "login.html";
        } else {
            e.preventDefault();
            alert(errors);
        }

    }

}


// Login Function.......

function login() {

    let detail = JSON.parse(localStorage.getItem('userData'));
    var p = document.getElementById('pass').value;
    errors = [];
    var emaiil = document.getElementById('email').value;
    if (emaiil.length == 0 && p.length == 0) {

        alert("Please Fill all the fields");
        window.location.href = 'user.html';
    }
    else {
        if (emaiil.length == 0) {
            alert("Please fill email field");
        }
        else {
            if (emaiil.length == 0) {
                alert("Please fill email field");
            }
            if (p.length == 0) {
                alert("Please fill password field");

            }
            if (p.length != 0) {
                if (p.length < 8) {
                    errors.push("Your password must be at least 8 characters");
                }
                if (p.search(/[a-z]/i) < 0) {
                    errors.push("Your password must contain at least one letter.");
                }
                if (p.search(/[0-9]/) < 0) {
                    errors.push("Your password must contain at least one digit.");
                }
                if (errors.length > 0) {
                    alert(errors.join("\n"));
                    return false;
                }
            }

            if (emaiil == detail.Email && p == detail.Password) {
                window.open("user.html");
            } else {
                alert("Please Enter Correct Email id and Password");
            }

        }

        e.preventDefault();


    }

}
