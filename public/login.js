document.addEventListener('DOMContentLoaded', function() {  
  const logincontainer=document.getElementById("login_container");
    logincontainer.style.display="none";
      pwShowHide = document.querySelectorAll(".pw_hide"),
      registerBtn = document.querySelector("#register");
  
    // Open form container on button click
    formOpenBtn.addEventListener("click", () => home.classList.add(" show"));
  
    // Close form container on close button click
    formCloseBtn.addEventListener("click", () => home.classList.remove(" show"));
  
    // Toggle password visibility
    pwShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("fa-eye-slash", "fa-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("fa-eye", "fa-eye-slash");
        }
      });
    });
  
    // Switch to signup form
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.add("active");
    });
  
    // Switch to login form
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.remove("active");
    });

  });
  
  const loginClose=()=>{
    const logincontainer=document.getElementById("login_container");
    logincontainer.style.display="none";
  }
  const openLogin=()=>{
    const logincontainer=document.getElementById("login_container");
    logincontainer.style.display="block";
  }