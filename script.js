// script.js

// Function to handle form submission for login
function submitLoginForm() {
    var signInForm = document.getElementById("signInForm");
    var formData = new FormData(signInForm);
  
    var formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    fetch('process.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = 'page2.html';
      } else {
        console.error(data.message);
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  }
  
  // Function to handle form submission for signup
  function submitSignUpForm() {
    var signUpForm = document.getElementById("signUpForm");
    var formData = new FormData(signUpForm);
  
    var formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    fetch('process.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = 'page2.html';
      } else {
        console.error(data.message);
      }
    })
    .catch(error => {
      console.error('Error during signup:', error);
    });
  }
  
  // Toggle active class on click of sign-in and sign-up links
  const signInBtnLink = document.querySelector('.signInBtn-link');
  const signUpBtnLink = document.querySelector('.signUpBtn-link');
  const wrapper = document.querySelector('.wrapper');
  
  signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });
  
  signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });
  