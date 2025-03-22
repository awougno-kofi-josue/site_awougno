document.addEventListener("DOMContentLoaded", function () {
    // Animation au survol des boutons
    document.querySelectorAll("button, .bouton a").forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s ease";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Message de confirmation lors de l'envoi du formulaire
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi réel du formulaire
        alert("Votre message a bien été envoyé ! Je vous répondrai dès que possible.");
        this.reset(); // Réinitialise le formulaire
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        // Animation sur les projets
        let projets = document.querySelectorAll(".project");
        projets.forEach(projet => {
            projet.addEventListener("mouseover", function () {
                this.style.transform = "scale(1.05)";
                this.style.boxShadow = "2px 8px 10px rgb(12, 12, 12)";
            });
    
            projet.addEventListener("mouseout", function () {
                this.style.transform = "scale(1)";
                this.style.boxShadow = "none";
            });
        });
    
        // Animation sur les compétences
        let skills = document.querySelectorAll(".skill .progress");
        skills.forEach(skill => {
            skill.parentElement.addEventListener("mouseover", function () {
                skill.style.backgroundColor = "rgba(4, 7, 5, 0.5)";
            });
    
            skill.parentElement.addEventListener("mouseout", function () {
                skill.style.backgroundColor = "";
            });
        });
    });
