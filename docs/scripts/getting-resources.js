// Initializes variables for gold, metal, and wood by retrieving values from local storage or setting them to 0 if they don't exist.
let gold = parseInt(localStorage.getItem("gold") ?? 0);
let metal = parseInt(localStorage.getItem("metal") ?? 0);
let wood = parseInt(localStorage.getItem("wood") ?? 0);

// Retrieves references to HTML elements using their IDs.
let minesContainer = document.getElementById("mines-container");
let woodContainer = document.getElementById("wood-container");

// Function to clear local storage and reset variables for metal, gold, and wood.
const clear = () => {
  localStorage.removeItem("metal");
  localStorage.setItem("metal", 0);

  localStorage.removeItem("gold");
  localStorage.setItem("gold", 0);

  localStorage.removeItem("wood");
  localStorage.setItem("wood", 0);

  metal = 0;
  wood = 0;
  gold = 0;
};
// Updates the metal count in the interface and local storage.
const updateMetalCount = () => {
  const metalElement = document.getElementById("metal-count");
  if (metalElement) {
    metal = parseInt(localStorage.getItem("metal") ?? 0);
    metalElement.innerHTML = metal;
  }
};
// Updates the gold count in the interface and local storage.
const updateGoldCount = () => {
  const goldElement = document.getElementById("gold-count");
  if (goldElement) {
    gold = parseInt(localStorage.getItem("gold") ?? 0);
    goldElement.innerHTML = gold;
  }
};
// Adds an event listener to minesContainer to increase metal or gold based on a random decision.
minesContainer.addEventListener("click", function () {
  if (Math.random() < 0.75) {
    metal += 100;
    localStorage.setItem("metal", metal);
    updateMetalCount();
  } else {
    gold += 100;
    localStorage.setItem("gold", gold);
    updateGoldCount();
  }
});

// Updates the wood count in the interface and local storage.
function updateWoodCount() {
  const woodElement = document.getElementById("wood-count");
  if (woodElement) {
    const wood = parseInt(localStorage.getItem("wood") ?? 0);
    woodElement.innerHTML = wood;
  }
}
// Adds an event listener to woodContainer to increase the wood count and updates the interface and local storage.
woodContainer.addEventListener("click", function () {
  wood += 100;
  localStorage.setItem("wood", wood);
  updateWoodCount();
});
// Adds an event listener to a clear button element to reset everything.
document.getElementById("clear-btn").addEventListener("click", () => {
  clear();
});
