$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector('#email')


function store() {
  event.preventDefault()
  if(email.value.length >= 6 && email.value.includes("@") && username.value.length >= 6 && password.value.length >=6 && username.value != password.value )  { 
    localStorage.setItem('e', JSON.stringify(email.value));
    localStorage.setItem('us', JSON.stringify(username.value));
    localStorage.setItem('pw', JSON.stringify(password.value));
    console.log(localStorage);
    alert('LOGUP SUCCESSFULLY')
 }
else{
  alert('ERROR')
}
}


function check() {

  // stored data from the register-form
  const storedE = JSON.parse(localStorage.getItem('e'));
  const storedName = JSON.parse(localStorage.getItem('us'));
  const storedPw = JSON.parse(localStorage.getItem('pw'));

  // entered data from the login-form
  const userName = document.getElementById('username1');
  const userPw = document.getElementById('password1');

  // check if stored data from register-form is equal to data from login form
  if(userName.value == storedName || userName.value == storedE && userPw.value == storedPw) {
    window.location.href="start.html"
    alert('You are loged in.');
}else {
    alert('ERROR.');
}
}