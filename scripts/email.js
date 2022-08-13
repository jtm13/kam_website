

let realForm = document.createElement('form');
realForm.method = "POST";
realForm.action = "https://formspree.io/f/xpznzlwg";
realForm.innerHTML = '<input type="email" name="email" id="real-email" />\
    <input type="text" name="message" id="real-message" />\
    <button id="my-form-button">Submit</button>';
realForm.style.display = 'none';

async function handleSubmit(event) {
    let form = document.getElementById("consultation-form");
    event.preventDefault();
    var status = document.getElementById("consultation-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}

async function consult(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let body = `Name: ${data.get('first-name')} ${data.get('last-name')}`;
    body += `\nPhone Number: ${data.get('phone')}`;
    body += `\nEmail: ${data.get('email')}`;
    body += `\nDetails: ${data.get('misc')}`;
    realForm.children[0].value = "jtm08993@uga.edu";
    realForm.children[1].value = body;
    realForm.submit();
    let form = document.getElementById("consultation-form");
    form.reset();
}

window.addEventListener('load', () => {
    realForm.addEventListener("submit", handleSubmit);
    document.body.appendChild(realForm);
    let form = document.getElementById("consultation-form");
    form.addEventListener('submit', handleSubmit);
});
