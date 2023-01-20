
const form=document.getElementById('form')
const password=document.getElementById('password')
const confirm=document.getElementById('confirmpassword')
const message=document.getElementById('message')

function isValid(){
     formValid=form.checkValidity();
     isMatch=false;
    //if form is not valid then an error occurs
    if(!formValid){
        message.textContent="Please fill all textfields!";
        message.style.color="red";
		return ;
    }
//if 2 passowrds doen't match then error occurs
    if(password.value !== confirm.value){
        message.textContent="Passwords should match";
        message.style.color="red";
    }else{
        isMatch=true;
    }
//if all fields are filed and password matches then user registerd successfully
    if(formValid && isMatch){
		message.textContent="Succesfully Registered";
		message.style.color="green";
	}
}

function processFormData(e){
    //prevents default action of code after submitting form
	e.preventDefault();
	//check for validation of form
	isValid();
}

form.addEventListener('submit',processFormData);
