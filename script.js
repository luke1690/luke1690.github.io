const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password_confirm');

//Show error message for function argument
function showError(input, message){
    const formControl = input.parentElement;
    const error_msg = formControl.querySelector('.error-message');

    //Show error message and set color equal to red
    error_msg.style.display = 'block';
    error_msg.innerHTML = `${message}`;

    //Set input class to error, changing color to red
    formControl.className = 'element error';
}

//Reset error messages for function argument 
function resetError(input, error_name){
    const formControl = input.parentElement;
    const error_msg = formControl.querySelector('.error-message');
    
    //Hide error message
    error_msg.style.display = 'none';

    //Change input class to sucess, changing border to green
    formControl.className = 'element success';
}

//Show success
function showSuccess(input){
    const formControl = input.parentElement;
    const error_msg = formControl.querySelector('.error-message');

    formControl.className = 'element success';
}

//Return passed string with first letter capitalized 
function toName(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//Iterate through each each input element and check if empty
function checkRequired(inputArr){
    inputArr.forEach(function(element){
        
        if(element.value == ''){
            showError(element, `${toName(element.id)} is required`);
        }
        else if(element.value != ''){
            resetError(element, toName(element.id));
        }
    });
}

function checkLength(input, min, max){

    if(input.value.length < min){
        showError(input, `${toName(input.id)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${toName(input.id)} must be less than ${max} characters`);        
    }
    else{
        showSuccess(input);
    }
}

function checkEmail(input){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(re.test(input.value)){
        console.log('success');
        showSuccess(input);
    }
    else{
        console.log('no success');
        showError(input, 'Invalid Email');
    }

}

form.addEventListener('click', function(e){
        e.preventDefault();
  
        checkRequired([username, email, password, password_confirm]);
        checkLength(username, 5, 18);
        checkLength(password, 5, 22);
        checkEmail(email);
        console.log(email);
});