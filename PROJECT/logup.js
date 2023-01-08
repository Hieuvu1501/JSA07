const passwordA = document.querySelector('#password')
const retypeA = document.querySelector('#retype')
const emailA = document.querySelector('#email')
const usernameA = document.querySelector('#username')
function handleLogup() {
    const emailA_value = emailA.value;
    const passwordA_value = passwordA.value;
    const retypeA_value = retypeA.value;
    const usernameA_value = usernameA.value;
if (emailA_value.length >= 6 && emailA_value.includes('@') && passwordA_value.length >= 6
    && retypeA_value == passwordA_value ) {
    localStorage.setItem('user', JSON.stringify({
        email: emailA_value, password: passwordA_value, username: usernameA_value
    }))
    alert('logup successfully')

} 
if(emailA_value.length < 6 || emailA_value.includes('@')==false || retypeA_value != passwordA_value){
    alert('please re-check your email address, password or password confirmation')
}

}

