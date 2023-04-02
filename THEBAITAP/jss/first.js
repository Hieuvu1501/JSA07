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
    localStorage.setItem('e', email.value);
    localStorage.setItem('us', username.value);
    localStorage.setItem('pw', password.value);
    console.log(localStorage);
    noti.innerHTML = tbaothanhcong
 }
  else{2
    noti.innerHTML = tbaoloi
  }
  }


const tbaoloi1 = `<p style="color: red;" >login failed!</p>`

function check() {

  event.preventDefault()
  const storedE = localStorage.getItem('e');
  const storedName = localStorage.getItem('us');
  const storedPw = localStorage.getItem('pw');

  const userName = document.querySelector('#username1');
  const userPw = document.querySelector('#password1');
  const userE = document.querySelector('#username1');

  const valueName = userName.value
  const valuePw = userPw.value
  const valueE = userE.value
  
  console.log(storedE);

  if(valuePw == storedPw && valueName == storedName || valueE == storedE)  {
    window.location.assign("start.html")
  }else {
    notilogin.innerHTML = tbaoloi1;
  }
}