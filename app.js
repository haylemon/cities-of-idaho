document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;

    if (email !== confirmEmail) {
        alert("The email addresses you entered do not match. Please check your entries and try again");
        event.preventDefault(); 
    }
});
