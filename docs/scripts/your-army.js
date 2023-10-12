// Retrieving DOM elements for displaying resource counts.
const goldCountElement = document.querySelector("#gold-count");
const metalCountElement = document.querySelector("#metal-count");
const woodCountElement = document.querySelector("#wood-count");

// Function to update the displayed resource counts for gold, metal, and wood.
function updateYourArmy() {
  let savedGoldCount = parseInt(localStorage.getItem("gold")) || 0;
  let savedMetalCount = parseInt(localStorage.getItem("metal")) || 0;
  let savedWoodCount = parseInt(localStorage.getItem("wood")) || 0;

  goldCountElement.textContent = `${savedGoldCount}`;
  metalCountElement.textContent = `${savedMetalCount}`;
  woodCountElement.textContent = `${savedWoodCount}`;
}
// Calling the function to update resource counts in the UI.
updateYourArmy();

// Retrieving warrior data from localStorage and filtering warriors and war machines.
const warriorsContainer = document.getElementById("warriors");
const warMachinesContainer = document.getElementById("war-machines");
const warriorShoppingCart =
  JSON.parse(localStorage.getItem("warriorShoppingCart")) || [];
console.log(warriorShoppingCart);

// Creating and displaying warrior cards in the warriors container.
const warriors = warriorShoppingCart.filter((item) => item.includes("warrior"));
console.log(warriors);

warriors.forEach((element) => {
  const card = document.createElement("div");
  card.className = "card mx-3";
  card.style.width = "100px";

  const imageElement = document.createElement("img");
  imageElement.src = element;

  card.appendChild(imageElement);

  warriorsContainer.appendChild(card);
  //   warriorsContainer.innerHTML = "";
});

// Creating and displaying war machine cards in the war machines container.
const warMachines = warriorShoppingCart.filter(
  (item) => !item.includes("warrior")
);

warMachines.forEach((element) => {
  const card = document.createElement("div");
  card.className = "card mx-3 p-2";
  card.style.width = "100px";
  const imageElement = document.createElement("img");

  imageElement.src = element;
  card.appendChild(imageElement);
  warMachinesContainer.appendChild(card);
});
