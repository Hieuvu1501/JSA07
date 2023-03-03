$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

const username = document.querySelector("#username");
const password = document.querySelector("#password");

function store() {
  localStorage.setItem('name', username.value);
  localStorage.setItem('pw', password.value);
}

function check() {

  // stored data from the register-form
  const storedName = localStorage.getItem('username');
  const storedPw = localStorage.getItem('password');

  // entered data from the login-form
  const userName = document.getElementById('userName');
  const userPw = document.getElementById('userPw');

  // check if stored data from register-form is equal to data from login form
  if(userName.value !== storedName || userPw.value !== storedPw) {
      alert('ERROR');
  }else {
      alert('You are loged in.');
  }
}