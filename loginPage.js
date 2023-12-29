function setFormMessage(formElement, type, message){
    const messageElement= formElement.querySelector(".message-form");
    messageElement.textContent= message;
    messageElement.classList.remove("message-form--success","message-form--error");
    messageElement.classList.add(`message-form--${type}`);


}
function setInputError(inputElement,message){
  inputElement.classList.add("input-error-form");
  inputElement.parentElement.querySelector("input-error").textContent=message;

}

document.addEventListener("DOMContentLoaded",()=>{
    const loginForm= document.querySelector("#login");
    const createAccount= document.querySelector("#createAccount");

    document.querySelector("#linkCreate").addEventListener("click",e=>{
        e.preventDefault();
      loginForm.classList.add("form-non");
      createAccount.classList.remove("form-non");
    });
    document.querySelector("#linkLogIn").addEventListener("click",e=>{
        e.preventDefault();
        loginForm.classList.remove("form-non");
        createAccount.classList.add("form-non");
      });
      loginForm.addEventListener("submit", e=>{
          e.preventDefault();
          window.location.href = "index.html";
      });
    
      
});
