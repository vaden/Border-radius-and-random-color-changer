const slider = document.getElementById("slider");
const square = document.getElementById("square");
const colorButton = document.getElementById("colorButton");
const sliderValue = document.getElementById("sliderValue");

function updateSquareBorderRadius(value) {
  square.style.borderRadius = `${value}px`;
  const borderRadiusLabel = document.getElementById("borderRadiusLabel");
  borderRadiusLabel.innerText = value; // Met à jour le label avec la valeur courante
}

slider.addEventListener("input", (event) => {
  const value = event.target.value;
  updateSquareBorderRadius(value);
});

// Appelle la fonction une première fois pour initialiser le carré avec la valeur courante
const initialValue = slider.value;
updateSquareBorderRadius(initialValue);


let previousPageColor = null; // Stocke la couleur précédente pour le fond de page
let previousSquareColor = null; // Stocke la couleur précédente pour le carré

function getRandomColor() {
  let newColor = null;
  do {
    // Génère une nouvelle couleur aléatoire
    newColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  } while (newColor === previousPageColor || newColor === previousSquareColor); // Répète si la nouvelle couleur est identique à une des deux couleurs précédentes
  previousPageColor = previousSquareColor; // Stocke la couleur précédente pour le fond de page dans la variable pour le carré
  previousSquareColor = newColor; // Stocke la nouvelle couleur pour le carré
  return newColor;
}

colorButton.addEventListener("click", () => {
  const randomPageColor = getRandomColor(); // Génère une nouvelle couleur aléatoire pour le fond de page
  const randomSquareColor = getRandomColor(); // Génère une nouvelle couleur aléatoire pour le carré
  document.body.style.backgroundColor = randomPageColor;
  square.style.backgroundColor = randomSquareColor;
});
