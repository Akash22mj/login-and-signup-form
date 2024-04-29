const loginText =document.querySelector(".title-text .login");
const loginForm =document.querySelector("form .login");
const loginBtn =document.querySelector("label .login");
const signupBtn =document.querySelector("label .signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick= () => {
    loginForm.style.marginleft="-50%";
    loginText.style.marginleft="-50%";

};
loginBtn.onclick= () => {
    loginForm.style.marginleft = "0%";
    loginText.style.marginleft = "0%";

};
signupLink.onclick = () =>{
    signupBtn.click();
    return false;
};