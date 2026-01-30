    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Tsy mamelona ny pejy indray (anti-reload)

    // Maka ny sanda (valeur) ao anatin'ny input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Azo aseho amin'ny Console aloha ho fitsapana
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Asehoy hafatra kely ilay mpampiasa
    const responseMsg = document.getElementById('response-msg');
    responseMsg.innerText = "Mercie " + name + ", votre message!";
    responseMsg.style.color = "green";

    // Fafana ny formulaire rehefa avy eo
    this.reset();
});