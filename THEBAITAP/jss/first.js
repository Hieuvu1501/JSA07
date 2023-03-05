$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector('#email');
const rpw = document.querySelector('#retype')
const noti = document.querySelector('#notification')
const notilogin = document.querySelector('#notificationlogin')

const tbaothanhcong = `<p style="color: green;" >logup successfully!</p>`
const tbaoloi = `<p style="color: red;" >logup failed!</p>`

function store() {
  if(rpw.value = password.value && email.value.length >= 6 && email.value.includes("@") && username.value.length >= 6 && password.value.length >=6 && username.value != password.value )  { 
    localStorage.setItem('e', JSON.stringify(email.value));
    localStorage.setItem('us', JSON.stringify(username.value));
    localStorage.setItem('pw', JSON.stringify(password.value));
    console.log(localStorage);
    noti.innerHTML = tbaothanhcong
 }
else{
  noti.innerHTML = tbaoloi
}
}

const tbaothanhcong1 = `<p style="color: green;" >login successfully!</p>`
const tbaoloi1 = `<p style="color: red;" >login failed!</p>`

function check() {

  const storedE = JSON.parse(localStorage.getItem('e'));
  const storedName = JSON.parse(localStorage.getItem('us'));
  const storedPw = JSON.parse(localStorage.getItem('pw'));

  const userName = document.getElementById('username1');
  const userPw = document.getElementById('password1');

  if(userName.value == storedName || userName.value == storedE && userPw.value == storedPw) {
    window.location.href="start.html"
    notilogin.innerHTML = tbaothanhcong1
}else {
    notilogin.innerHTML = tbaoloi1
}
}