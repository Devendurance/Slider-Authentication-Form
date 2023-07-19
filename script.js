let loginText = document.querySelector(".title-text .login");
let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");
let signupLink = document.querySelector("form .signup-link a");
const signUpButton = document.querySelector('.signupBTN');
const loginButton = document.querySelector('.loginBTN');



// console.log(loginForm);
signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});    


signUpButton.addEventListener('click', (e) => {
    //prevent form from sending data
    e.preventDefault();


    //get values from input fields
    const signUpEmail = document.querySelector('.signupEmail').value;
    const signUpUsername = document.querySelector('.signupUsername').value;
    const signUpPassword = document.querySelector('.signupPassword').value;

    // collect input fields into an object

    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    // console.log(formData);

    // to prevent multiple user data
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).find((data)=> data.email == signUpEmail && data.password == signUpPassword)


    if(!exist){
        formData.push({
            email: signUpEmail,
            username: signUpUsername,
            password: signUpPassword
        })
            // send to localstorage
    localStorage.setItem('formData', JSON.stringify(formData)); 

    //clear form
    document.querySelector(".mySignup").reset();
    document.querySelector('.signupEmail').focus()
    }

    else{
        alert("Sorry user already exists")
        //clear form
    document.querySelector(".mySignup").reset();
    document.querySelector('.signupEmail').focus()
    }


})



loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    //get values from login form


    //get data from local storage


    //check if data in local storage is same as value inputted



    //redirect to mainpage


    //if not, alert sorry wrong user details, reset form
})


