function isSpecialCharacter(character) {
    if ((character.charCodeAt(0) >= 32 && character.charCodeAt(0) <= 47) || (character.charCodeAt(0) >= 58 && character.charCodeAt(0) <= 64) || (character.charCodeAt(0) >= 91 && character.charCodeAt(0) <= 96) || (character.charCodeAt(0) >= 123 && character.charCodeAt(0) <= 126)) {
        return true;
    }
    else {
        return false;
    }
}

function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validatePassword() {
    let uname = username.value;
    let passkey = password.value;

    lower = 0, upper = 0, numb = 0, special = 0;
    if (passkey.length >= 12) {
        for (let i = 0; i < passkey.length; i++) {
            if (passkey.charCodeAt(i) >= 48 && passkey.charCodeAt(i) <= 57) {
                numb++;
            }
            else if (passkey.charCodeAt(i) >= 97 && passkey.charCodeAt(i) <= 122) {
                lower++;
            }
            else if (passkey.charCodeAt(i) >= 65 && passkey.charCodeAt(i) <= 90) {
                upper++
            }
            else if (isSpecialCharacter(passkey[i])) {
                special++;
            }
        }
        if (lower == 0 || upper == 0 || special == 0 || numb == 0) {
            document.getElementById("output-message").innerHTML = 'Please choose a stronger password. Try a mix of letters, numbers and symbols.';
            document.getElementById("output-message").removeAttribute('style');
        }
        else {
            document.getElementById("output-message").innerHTML = 'Strong Password';
            document.getElementById("output-message").style.color = "green";
        }
    }
    else {
        document.getElementById("output-message").innerHTML = 'Password must be at least 12 characters long';
        document.getElementById("output-message").removeAttribute('style');
    }
}

document.addEventListener("keydown", (event) => {
    if (event.which == 13)
        validatePassword();
})