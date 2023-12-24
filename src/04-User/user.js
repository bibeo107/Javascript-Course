function welcomeUser() {
    const fullName = document.getElementById('fullName').value.trim();
    const userElement = document.getElementById('user');
    userElement.textContent = fullName ? `Welcome ${fullName}!` : `Please enter full name`;
}
// this condition will not show console error in browser
if (typeof module === 'object') {
    module.exports = welcomeUser;
}
