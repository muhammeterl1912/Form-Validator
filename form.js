// Getting DOM element 
const form = document.getElementById("form");
const username = document.getElementById("username");
const e_mail = document.getElementById("e-mail");
const password = document.getElementById("password");
const password2= document.getElementById("password-2");

// Showing in an error message input  
const showError = (input,message) => {
const  formControl = input.parentElement;
formControl.className = "ct-form error";
const small = formControl.querySelector("small");
small.innerText = message;
};

// Showing in an success message in outline
const showSuccess = input => {
    const  formControl = input.parentElement;
    formControl.className = "ct-form success";
   
    };



const checkRequired = inputArr => {
    inputArr.forEach(input=>{
     
        if(input.value.trim() ===""){
            showError( input,"is required");
        }
        else{
            showSuccess(input);
        }
    })

}


// Adding Event Listeners
form.addEventListener("submit" , e =>{
    e.preventDefault();
    checkRequired([username, e_mail, password, password2 ])
 
});