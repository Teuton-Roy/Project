document.querySelector("#submit-button").addEventListener("click", function(){
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message");
    if (validateEmail(email)) {
      // Code to send password reset link to the entered email
      message.innerHTML = "Password reset link has been sent to " + email;
    } else {
      message.innerHTML = "Invalid email address. Please enter a valid email.";
    }
  });
  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  