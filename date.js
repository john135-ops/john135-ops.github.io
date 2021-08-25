var date = document.forms['form']['date'];



var date_error = document.getElementById('date_error');
email.addEventListener('textInput', date_verify);

function validated() {
    if (date.value.length < 2015) {
        date.style.border = "1px solide red";
        email_error.style.display = "block";
        email.focus();
        return false;
    } 
 }
    function date_verify(){
        if (date.value.length >= 201) {
            date.style.border = "1px solide silver";
            date_error.style.display = "none";
            return true;
        }
    }