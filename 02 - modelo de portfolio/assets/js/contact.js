/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact_form'),
contactMessage = document.querySelector('#contact_message');

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1p3bfes', 'template_2vdxq3f', '#contact_form', 'KnuYeI7-OYNx7DYEk')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
    })
}

contactForm.addEventListener('submit', sendEmail);