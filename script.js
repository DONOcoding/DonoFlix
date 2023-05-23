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

  // Code JavaScript pour les emplacements des seriess récents
  var seriesCards = document.querySelectorAll(".series-card");
  
  // Fonction de gestionnaire d'événement pour le clic sur un emplacement de series
  function handleseriesCardClick() {
    var title = this.querySelector("h3").innerText;
    alert("Vous avez cliqué sur le series : " + title);
  }
  
  // Ajout du gestionnaire d'événement pour chaque emplacement de series
  seriesCards.forEach(function(card) {
    card.addEventListener("click", handleseriesCardClick);
  });
  