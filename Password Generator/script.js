const button = document.querySelector('.btn');
const pass = document.querySelector('.password');

const generatePassword = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~_+-=|';/.,<>?:";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

button.addEventListener("click", (e) => {
    e.preventDefault();
    const length = Number(document.querySelector('.length').value);

    if (length > 0) {
        pass.innerText = generatePassword(length); // Use innerText for <p> element
    } else {
        pass.innerText = "Please enter a valid length";
    }
});
