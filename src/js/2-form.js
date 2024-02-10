const form = document.querySelector(".feedback-form");

function inputHandler(event) {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const formValues = {
        email: email,
        message: message
    };
    const jsonData = JSON.stringify(formValues);
    localStorage.setItem('feedback-form-state', jsonData);
}

form.addEventListener("input", inputHandler);

 const rawData = localStorage.getItem('feedback-form-state');
    if (rawData) {
        const data = JSON.parse(rawData);
        form.elements.email.value = data.email || '';
        form.elements.message.value = data.message || '';
    }


function formSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email && message) {
        console.log({ email, message });
        
        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
}

form.addEventListener("submit", formSubmit);


