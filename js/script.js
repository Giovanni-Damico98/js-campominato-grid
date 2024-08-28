// Preparazione
// Recupero gli elementi
const grid = document.getElementById("grid");
const playButton = document.getElementById("play-button");

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
  cell.classList.add("clicked");
};
const startGame = () => {
  // Svuoto la griglia
  grid.innerHTML = "";
  // Cambio il testo del bottone gioca
  playButton.innerText = "Ricomincia";
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
playButton.addEventListener("click", startGame);
