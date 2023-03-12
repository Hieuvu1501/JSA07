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

const regUs = /[^a-z0-9]/igm
const regPw = /[^a-z0-9]/igm
const regEm = /[^a-z0-9@.]/igm

function store() {
  if(rpw.value = password.value && email.value.length >= 6 && email.value.includes("@") && username.value.length >= 6 && password.value.length >=6 && username.value != password.value
      && rpw.value.length >=6 && regUs.test(username.value) == false && regPw.test(password.value) == false && regEm.test(email.value) == false)  { 
    event.preventDefault();
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


const tbaoloi1 = `<p style="color: red;" >login failed!</p>`

function check() {

  const storedE = JSON.parse(localStorage.getItem('e'));
  const storedName = JSON.parse(localStorage.getItem('us'));
  const storedPw = JSON.parse(localStorage.getItem('pw'));

  const userName = document.querySelector('#username1');
  const userPw = document.querySelector('#password1');

  const valueName = userName.value
  const valuePw = userPw.value

  if(valuePw == storedPw && valueName == storedName || valueName.value == storedE)  {
    window.location.href="start.html"
  }else {
    notilogin.innerHTML = tbaoloi1
  }
}