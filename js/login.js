//Login credentials
const adminUserName="admin";
const adminPassword="admin123";

//constants 
const inputUserNameField=document.getElementById("inputUsername");
const inputPasswordField=document.getElementById("inputPassword");
const signInBtn=document.getElementById("signInBtn");
const loginFailAlert=document.getElementById("failAlert");
const successModal = document.getElementById("successModal")
//get Input value
signInBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const inputUserName = inputUserNameField.value.trim();
    const inputPassword = inputPasswordField.value;

    if(inputUserName === adminUserName && inputPassword === adminPassword)
    {
        successModal.showModal();
        setTimeout(() => {
            window.location.href = "./pages/dashboard.html";
        }, 2000);
    }
    else
    {
        showError();
    }
})

function showError(){
    loginFailAlert.classList.remove("hidden")
    setTimeout(()=>{
        loginFailAlert.classList.add("hidden")
    },3000)
}