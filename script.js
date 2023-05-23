// Code JavaScript ici

// Exemple de fonction pour afficher un message dans la console
function showMessage() {
    console.log("Bienvenue sur DonoFlix !");
  }
  
  // Exemple de fonction pour changer la couleur de fond de la section hero
  function changeHeroBackground() {
    var heroSection = document.querySelector(".hero");
    heroSection.style.backgroundColor = "#000";
  }
  
  // Exemple de gestionnaire d'événement pour le clic sur le bouton Commencer
  var startButton = document.querySelector(".btn");
  startButton.addEventListener("click", function() {
    alert("Le visionnage commence !");
  });
  
  // Appel des fonctions ou ajout de tout autre code JavaScript nécessaire
  showMessage();
  changeHeroBackground();

  // Code JavaScript pour les emplacements des films récents
  var filmCards = document.querySelectorAll(".film-card");
  
  // Fonction de gestionnaire d'événement pour le clic sur un emplacement de film
  function handleFilmCardClick() {
    var title = this.querySelector("h3").innerText;
    alert("Vous avez cliqué sur le film : " + title);
  }
  
  // Ajout du gestionnaire d'événement pour chaque emplacement de film
  filmCards.forEach(function(card) {
    card.addEventListener("click", handleFilmCardClick);
  });
  