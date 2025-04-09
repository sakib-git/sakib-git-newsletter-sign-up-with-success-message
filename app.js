
const btn1 = document.getElementById('btn1');
const paraP = document.querySelector('.paraP');
const emailId = document.getElementById('emailId');
const wrapper = document.querySelector('.wrapper');
const hiddenDiv = document.querySelector('.hidden-div');
const btn2 = document.getElementById('btn2');

const emailRegex = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;

btn1.addEventListener('click', () => {
  const emailValue = emailId.value.trim();

  if (emailValue === '' || !emailRegex.test(emailValue)) {
    // Show error
    paraP.classList.add('show');
    emailId.classList.add('errorbordr');
    emailId.classList.add('inputerro');
  } else {
    // Valid email - go to success screen
    paraP.classList.remove('show');
    emailId.classList.remove('errorbordr');
    emailId.classList.remove('inputerro');

    wrapper.style.display = "none";
    hiddenDiv.style.display = "block";
  }
});

// Live validation while typing
emailId.addEventListener('keyup', () => {
  if (!emailId.value.match(emailRegex)) {
    paraP.classList.add('show');
    emailId.classList.add('errorbordr');
    emailId.classList.add('inputerro');
  } else {
    paraP.classList.remove('show');
    emailId.classList.remove('errorbordr');
    emailId.classList.remove('inputerro');
    document.getElementById('emailchange').innerText = emailId.value
  }
});

// Dismiss success message
// btn2.addEventListener('click', () => {
//   hiddenDiv.style.display = "none";
//   wrapper.style.display = "flex"; // or "block", depends on your layout
// });


document.getElementById('btn2').addEventListener('click', function () {
  window.location.reload();
})