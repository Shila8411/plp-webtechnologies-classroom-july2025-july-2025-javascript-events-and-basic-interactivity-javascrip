// THEME TOGGLE 
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

// TRAVEL COUNTER 
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

//  FAQ SECTION 
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

//  FORM VALIDATION 
const signupForm = document.getElementById("signupForm");
const formFeedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const nameField = document.getElementById("name");
  const nameError = nameField.nextElementSibling;
  if (nameField.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailField = document.getElementById("email");
  const emailError = emailField.nextElementSibling;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordField = document.getElementById("password");
  const passwordError = passwordField.nextElementSibling;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passwordRegex.test(passwordField.value)) {
    passwordError.textContent =
      "Password must be at least 6 characters and contain a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (valid) {
    formFeedback.textContent = " Welcome aboard, explorer!";
    formFeedback.style.color = "green";
    signupForm.reset();
  } else {
    formFeedback.textContent = "Please fix the errors above.";
    formFeedback.style.color = "red";
  }
});
