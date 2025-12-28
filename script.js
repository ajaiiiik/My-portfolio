
let submitform = document.getElementById("submit-form")
submitform.addEventListener("submit", function(event) {
    event.preventDefault(); 

    emailjs.send("service_6sfu0vb", "template_o88ggwl", {
        name: document.getElementById("name").value,
        email: document.querySelector("input[name='email']").value,
        phone: document.querySelector("input[name='phone']").value,
        subject: document.querySelector("input[name='subject']").value,
        message: document.querySelector("textarea[name='message']").value,
    })
    .then(function() {
        alert("Message sent successfully ✅");
        document.getElementById("submit-form").reset();
    }, function(error) {
        alert("Failed ❌ " + error);
    });
});

