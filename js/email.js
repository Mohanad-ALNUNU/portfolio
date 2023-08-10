document.addEventListener("DOMContentLoaded", function() {
    const formElements = {
        firstName: document.getElementById("fname"),
        lastName: document.getElementById("lname"),
        email: document.getElementById("email"),
        subject: document.getElementById("subject"),
        message: document.getElementById("message"),
    };

    const sendButton = document.getElementById("sendBtn");

    sendButton.addEventListener("click", function() {
        const { firstName, lastName, email, subject, message } = formElements;
        sendEmail(firstName.value, lastName.value, email.value, subject.value, message.value, sendButton);
    });
});

(function(){
    emailjs.init("dmIkDg0TBpJoW923D");
})();

function sendEmail(firstName, lastName, email, subject, message, sendButton) {
    
    sendButton.disabled = true; 
    sendButton.value = "Sending...";
    sendButton.classList.add("send-wait");

    const fullName = `${firstName} ${lastName}`;
    const fullMessage = `sender email: ${email}\nSubject: ${subject}\nmessage content: ${message}`;
    const templateParams = {
        from_name: fullName,
        message: fullMessage,
        reply_to: email,
    };

    function handleSendResponse(response) {
        console.log('SUCCESS!', response.status, response.text);
    }

    function handleSendError(error) {
        console.log('FAILED...', error);
        // Handle error appropriately
    }

    Promise.all([
        emailjs.send('service_gehjcb7', 'template_541exi4', templateParams),
        emailjs.send("service_gehjcb7","template_3lv9f6d", { from_name: fullName, reply_to: email })
    ]).then(handleSendResponse).catch(handleSendError);

    setTimeout(() => {
        const form = document.getElementById("contactForm");
        const sentLogo = document.getElementById("sentLogo");
        form.classList.add("hidden");
        sentLogo.classList.remove("hidden");
        setTimeout(() => {
            window.location.replace("https://yip.su/portfolio_redirect");
        }, 1000); // Wait for 1 second after "Done!" is displayed
    }, 1500);
}
