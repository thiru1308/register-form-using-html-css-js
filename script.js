var registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var userNameInput = document.getElementById("userName");
  var emailInput = document.getElementById("email");
  var phoneNumberInput = document.getElementById("phoneNumber");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");

  var isValid = true;

  // Reset error messages
  clearErrorMessages();

  // Validate user name
  if (!validateUserName(userNameInput)) {
    isValid = false;
  }

  // Validate email
  if (!validateEmail(emailInput)) {
    isValid = false;
  }

  // Validate phone number
  if (!validatePhoneNumber(phoneNumberInput)) {
    isValid = false;
  }

  // Validate password
  if (!validatePassword(passwordInput)) {
    isValid = false;
  }

  // Validate confirm password
  if (!validateConfirmPassword(passwordInput, confirmPasswordInput)) {
    isValid = false;
  }

  if (isValid) {
    // Submit the form
    registerForm.submit();
  }
});

function validateUserName(input) {
  var value = input.value.trim();
  if (value === "") {
    showError(input, "User Name is required", "userNameError");
    return false;
  }
  return true;
}

function validateEmail(input) {
  var value = input.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError(input, "Invalid email address", "emailError");
    return false;
  }
  return true;
}

function validatePhoneNumber(input) {
  var value = input.value.trim();
  var phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(value)) {
    showError(input, "Invalid phone number", "phoneNumberError");
    return false;
  }
  return true;
}

function validatePassword(input) {
  var value = input.value.trim();
  if (value === "") {
    showError(input, "Password is required", "passwordError");
    return false;
  }
  return true;
}

function validateConfirmPassword(passwordInput, confirmPasswordInput) {
  var passwordValue = passwordInput.value.trim();
  var confirmPasswordValue = confirmPasswordInput.value.trim();
  if (confirmPasswordValue === "") {
    showError(
      confirmPasswordInput,
      "Confirm Password is required",
      "confirmPasswordError"
    );
    return false;
  } else if (passwordValue !== confirmPasswordValue) {
    showError(
      confirmPasswordInput,
      "Passwords do not match",
      "confirmPasswordError"
    );
    return false;
  }
  return true;
}

function showError(input, message, errorId) {
  input.classList.add("error");
  var errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
}

function clearErrorMessages() {
  var errorElements = document.getElementsByClassName("error-message");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}
