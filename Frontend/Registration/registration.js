const forms= document.querySelector(".forms"),
        pwShowHide= document.querySelectorAll(".eye-icon"),
        links = document.querySelectorAll(".link");

        pwShowHide.forEach(eyeIcon => {
            eyeIcon.addEventListener("click", () => {
                let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
                
                pwFields.forEach(password => {
                    if(password.type === "password"){
                        password.type = "text";
                        eyeIcon.classList.replace("bx-hide", "bx-show");
                        return;
                    }
                    password.type = "password";
                    eyeIcon.classList.replace("bx-show", "bx-hide");
                })
                
            })
        }) 
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const googleLogins = document.querySelectorAll('.field.Google');
const githubLogins = document.querySelectorAll('.field.github');

googleLogins.forEach(function(googleLogin) {
  googleLogin.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.google.com/accounts/';
  });
});

githubLogins.forEach(function(githubLogin) {
  githubLogin.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://github.com/login';
  });
});

// make password which is contain 8 character and 1 number and 1 special character//
const passwordInput = document.getElementById("password-input");

passwordInput.addEventListener("focus", () => {
  const password = passwordInput.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(!regex.test(password)){
    alert("Password must contain 8 characters, 1 number and 1 special character");
    passwordInput.focus();
  }
});
