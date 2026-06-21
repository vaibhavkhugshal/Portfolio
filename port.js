
  emailjs.init({
    publicKey: "XjG58UChl-tQCDiBE",
  });

    let canSend = true;

    document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!canSend) return;

    canSend = false;

    emailjs.sendForm("service_b3fjtxh", "template_6xi6pcx", this)
        .then(() => {
        alert("Message sent successfully!");
        this.reset();
        })
        .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
        })
        .finally(() => {
        setTimeout(() => {
            canSend = true;
        }, 20000); // 20 sec cooldown
        });
    });


    // Disable right click
    document.addEventListener("contextmenu", e => e.preventDefault());

    // Disable key shortcuts
    document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey && e.key.toLowerCase() === "u" ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
    ) {
        e.preventDefault();
    }
    });

    // Disable copy
    document.addEventListener("copy", e => e.preventDefault());