// Preparazione
// Recupero gli elementi
const grid = document.getElementById("grid");
const playButton = document.getElementById("play-button");
const form = document.querySelector("form");
const levelSelect = document.getElementById("select-level");

// Funzioni
// Funzione per la creazione di una cella
const createCell = (cellNumber) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = cellNumber;
  return cell;
};
// Funzione per reagire al click di una cella
const onCellClick = (event) => {
  console.log(event.target.innerText);
  //   Aggiungo classe per colorare la cella
  event.target.classList.add("clicked");
};

const startGame = (event) => {
  // Preparazione
  // Blocco l'invio del form
  event.preventDefault();
  // Svuoto la griglia
  grid.innerHTML = "";
  // Cambio il testo del bottone gioca
  playButton.innerText = "Ricomincia";
  //Prendo il valore dalla tendina
  const level = levelSelect.value;
  let rows;
  let cols;
  // Decido quante colonne e righe generare
  switch (level) {
    case "hard":
      rows = 7;
      cols = 7;
      break;
    case "normal":
      rows = 9;
      cols = 9;
      break;
    case "easy":
      rows = 10;
      cols = 10;
  }

  //   Genero 100 celle
  for (let i = 1; i <= 100; i++) {
    // Creo una cella
    const cell = createCell(i);
    // Al click >
    cell.addEventListener("click", onCellClick);
    // La inserisco nella griglia
    grid.appendChild(cell);
  }
};

// Elaborazione
form.addEventListener("submit", startGame);
