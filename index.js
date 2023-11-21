const forma = document.querySelector('form')
const inputFirstName = document.querySelector('#firstname')
const inputLastName = document.querySelector('#lastname')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const errorMessageFirstName = document.querySelector('.error-message-firstname')
const errorMessageLastName = document.querySelector('.error-message-lastname')
const errorMessageEmail = document.querySelector('.error-message-email')
const errorMessagePassword = document.querySelector('.error-message-password')

const labelFirstName = document.querySelector('.firstname')
const labelLastName = document.querySelector('.lastname')
const labelEmail = document.querySelector('.email')
const labelPassword = document.querySelector('.password')

const svgError = document.querySelector('svg')



forma.addEventListener("submit", (event) => {
    event.preventDefault()
    if(inputFirstName.value.trim() === "") {
        errorMessageFirstName.textContent = "Firstname cannot be empty"
        labelFirstName.style.borderColor = "#d33030"
        svgError.style.display = "inline"
        setTimeout(() => {
            errorMessageFirstName.textContent = ""
            labelFirstName.style.borderColor = "#808080"
            svgError.style.display = "none"
        }, 2000)
        return
    }
    if(inputLastName.value.trim() === "") {
        errorMessageLastName.textContent = "Lastname cannot be empty"
        labelLastName.style.borderColor = "#d33030"
        svgError.innerHTML = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g>
        </svg>
        setTimeout(() => {
            errorMessageLastName.textContent = ""
            labelLastName.style.borderColor = "#808080"
            svgError.style.display = "none"
        }, 2000)
        return
    }
    if(!inputEmail.value.includes("@")) {
        errorMessageEmail.textContent = "Looks like this is not an email"
        labelEmail.style.borderColor = "#d33030"
        svgError.style.display = "inline"
        setTimeout(() => {
            errorMessageEmail.textContent = ""
            labelEmail.style.borderColor = "#808080"
            svgError.style.display = "none"
            }, 2000)
        return
    }
    if(inputPassword.value.trim() === "") {
        errorMessagePassword.textContent = "Password cannot be empty"
        labelPassword.style.borderColor = "#d33030"
        svgError.style.display = "inline"
        setTimeout(() => {
            errorMessagePassword.textContent = ""
            labelPassword.style.borderColor = "#808080"
            svgError.style.display = "none"
            }, 2000)
        return
    }
    

})