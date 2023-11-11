const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.querySelector('.form')


form.addEventListener('submit', function (e){
 
if(password.value.length <= 6){
  alert("Password must be at least 7 characters long")
}

 e.preventDefault
})