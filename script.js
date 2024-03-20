const form = document.getElementById("form");
const username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  validateInputs();
})

const validateInputs = () =>{
  const usernameValue = username.value.trim() 
  const EmailValue = email.value.trim() 
  const passwordValue = password.value.trim() 
  const cPasswordValue = cPassword.value.trim()
  
  if(usernameValue === ''){
    setError(username, 'username is required')
  }else{
    setSuccess(username)
  }
  if (passwordValue==='') {
    setError(password, 'Password is required')
  }else if(passwordValue.length<8){
    setError(password,'Password should greater than 8')
  }else{
    setSuccess(password)
  }
  if (cPasswordValue==='') {
    setError(cPassword, 'Please Confirm your password')
  }else if(cPasswordValue!==passwordValue){
    setError(cPassword,"Confirm Password does not matched")
  }else{
    setSuccess(cPassword)
  }
  if (EmailValue==='') {
    setError(email, 'Email is required')
  }else if(!isValidEmail(EmailValue)){
    setError(email, 'Provide a valid email address')
  }else{
    setSuccess(email)
  }
}

const setError = (element, message) =>{
  const inputValue = element.parentElement
  const errorValue = inputValue.querySelector('.error')
  errorValue.innerText = message;

  inputValue.classList.add('error')
  inputValue.classList.remove('success')
}
const setSuccess = (element) =>{
  const inputValue = element.parentElement
  const errorValue = inputValue.querySelector('.error')
  errorValue.innerText = ""

  inputValue.classList.add('success')
  inputValue.classList.remove('error')
}

function isValidEmail(e){
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(e)
}