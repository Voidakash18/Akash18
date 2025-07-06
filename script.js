$(document).ready(function () {
  $("#submitbutton").click(function () {
    let missingfield = "";
    let errormessage = "";

    let email = $("#email").val();
    let phone = $("#phoneno").val();
    let password = $("#password").val();
    let confirm = $("#confirmpassword").val();

    // Check for empty fields
    if (email === "") {
      missingfield += "<p>Email not filled</p>";
    }

    if (phone === "") {
      missingfield += "<p>Phone number not filled</p>";
    }

    if (password === "") {
      missingfield += "<p>Password not filled</p>";
    }

    // Validate formats
    if (!isValidEmail(email)) {
      errormessage += "<p>Email id is not valid</p>";
    }

    if (!isNumeric(phone) || phone.length !== 10) {
      errormessage += "<p>Phone number is not valid (must be 10 digits)</p>";
    }

    if (!isStrongPassword(password)) {
      errormessage += "<p>Password must be at least 8 characters, include upper case, lower case, and number</p>";
    }

    if (password !== confirm) {
      errormessage += "<p>Passwords do not match</p>";
    }

    // Show success or error
    if (errormessage === "" && missingfield === "") {
      $("#success").html("You are registered");
      $("#errors").html("");
    } else {
      $("#errors").html(errormessage + missingfield);
      $("#success").html("");
    }
  });

  // Show/hide password
  $("#showPassword").on("change", function () {
    const type = this.checked ? "text" : "password";
    $("#password, #confirmpassword").attr("type", type);
  });

  // Email validation
  function isValidEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(email);
  }

  // Numeric check
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  // Strong password check
  function isStrongPassword(pwd) {
    let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongRegex.test(pwd);
  }
});
