// script.js

// Sélection de tous les boutons de choix
const buttons = document.querySelectorAll(".choices button");

// Ajout d'un événement sur chaque bouton
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.innerText; // Récupère le texte du bouton
        alert(`Super ! Tu as choisi : ${choice} 🎉`);
        // Ici tu peux aussi ajouter des effets, animations ou sons
    });
});
