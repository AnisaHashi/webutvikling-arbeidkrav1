// Importing WarriorModule from a specified path.
import WarriorModule from "./modules/WarriorModule.js";

// Retrieving DOM elements using their IDs.
const goldCountElement = document.querySelector("#gold-count");
const metalCountElement = document.querySelector("#metal-count");
const woodCountElement = document.querySelector("#wood-count");
const warriorSection = document.querySelector("#warrior-section");

// Retrieving warriors data from the WarriorModule.
const warriors = WarriorModule.getWarriors();
const getWarriorByName = WarriorModule.getWarriorByName;

// Function to populate the warrior cards in the interface.
const getWarriors = () => {
  let html = "";
  warriors.forEach((warrior) => {
    html += `
        <article class="col-md-6 col-lg-3">
        <div class="card text-center d-flex justify-content-center align-items-center">
        <h5 class="card-title mt-5">${warrior.name}</h5>
        <img  class="me-2" style="height: 300px; width: 150" src="./images/${warrior.image}" alt="Warrior 1">
        <div class="card-body">
        
        <button id="btn-gold-warrior" class="btn btn-success d-flex justify-content-center align-items-center">Buy Warrior ${warrior.price}
        <img width="18px" src="./images/gold-coin.png">
        
        </button>
        </div>
        </div>
        </article>
        `;
  });

  // Setting the generated HTML content to the warriorSection element.
  warriorSection.innerHTML = html;
};

// Calling the function to populate warrior cards.
getWarriors();

// Function to update the shopping cart with purchased warriors' images.
function updateWarriorShoppingCart(item) {
  const key = "warriorShoppingCart";

  const cart = JSON.parse(localStorage.getItem(key)) || [];

  console.log("cart: ", cart);

  const image = item.includes("images") ? item : `./images/${item}`;
  cart.push(image);
  localStorage.setItem(key, JSON.stringify(cart));
}

// Function to update the displayed resource counts.
function updateResources() {
  let savedGoldCount = parseInt(localStorage.getItem("gold")) || 0;
  let savedMetalCount = parseInt(localStorage.getItem("metal")) || 0;
  let savedWoodCount = parseInt(localStorage.getItem("wood")) || 0;

  goldCountElement.textContent = `${savedGoldCount}`;
  metalCountElement.textContent = `${savedMetalCount}`;
  woodCountElement.textContent = `${savedWoodCount}`;
}

// Calling the function to update resource counts.
updateResources();

// Function to update the displayed count for a specific resource.
function updateResourceCount(resource, count) {
  const element = document.getElementById(`${resource}-count`);
  if (element) {
    element.textContent = count;
  }
}

// Functions to handle purchasing units with gold, metal, and wood resources.
function buyUnitGoldWarrior(category) {
  const warrior = getWarriorByName(category);

  const { image, price } = warrior;

  let goldCount = parseInt(goldCountElement.textContent);

  if (goldCount >= price) {
    goldCount -= price;
    updateResourceCount("gold", goldCount);
    localStorage.setItem("gold", goldCount.toString());

    updateWarriorShoppingCart(image);

    alert(`Kjøpt ${category} for ${price} gull`);
  } else {
    alert("Ikke nok ressurser til å kjøpe denne enheten.");
  }
}

function buyUnitGoldAnimal(category, price, image) {
  let goldCount = parseInt(goldCountElement.textContent);

  if (goldCount >= price) {
    goldCount -= price;
    updateResourceCount("gold", goldCount);
    localStorage.setItem("gold", goldCount.toString());

    updateWarriorShoppingCart(image);

    alert(`Kjøpt ${category} for ${price} gull`);
  } else {
    alert("Ikke nok ressurser til å kjøpe denne enheten.");
  }
}

//Function for Metal

function buyUnitMetal(category, priceMetal, item) {
  let metalCount = parseInt(metalCountElement.textContent);

  console.log(priceMetal);

  if (metalCount >= priceMetal) {
    metalCount -= priceMetal;
    updateResourceCount("metal", metalCount);
    localStorage.setItem("metal", metalCount.toString());

    updateWarriorShoppingCart(item);

    alert(`Kjøpt ${category} for ${priceMetal} metal`);
  } else {
    alert("Ikke nok ressurser til å kjøpe denne enheten.");
  }
}
//Function for Wood

function buyUnitWood(category, priceWood, item) {
  let woodCount = parseInt(woodCountElement.textContent);

  if (woodCount >= priceWood) {
    woodCount -= priceWood;
    updateResourceCount("wood", woodCount);
    localStorage.setItem("wood", woodCount.toString());

    updateWarriorShoppingCart(item);

    alert(`Kjøpt ${category} for ${priceWood} wood`);
  } else {
    alert("Ikke nok ressurser til å kjøpe denne enheten.");
  }
}


// Event listeners for gold warrior buttons.
const buyButtonsGoldWarrior = document.querySelectorAll("#btn-gold-warrior");

// Event listeners for gold animal buttons.
const buyButtonsGoldAnimal = document.querySelectorAll("#btn-gold-animal");

buyButtonsGoldWarrior.forEach((element) => {
  element.addEventListener("click", (event) => {
    const category =
      event.target.parentElement.parentElement.querySelector(
        ".card-title"
      ).textContent;
    buyUnitGoldWarrior(category);
  });
});

buyButtonsGoldAnimal.forEach((element) => {
  element.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    const image = event.target.dataset.image;
    const price = parseInt(event.target.dataset.price);

    console.log({ category, price, image });
    buyUnitGoldAnimal(category, price, image);
  });
});

// Event listeners for metal buttons.
const buyButtonsMetal = document.querySelectorAll("#btn-metal");

buyButtonsMetal.forEach((element) => {
  element.addEventListener("click", function (event) {
    const category =
      event.target.parentElement.parentElement.querySelector(
        ".card-title"
      ).textContent;
    const item = event.target.dataset.image;
    const priceMetal = parseInt(event.target.textContent.match(/\d+/)[0]);
    buyUnitMetal(category, priceMetal, item);
  });
});

// Event listeners for wood buttons.
const buyButtonsWood = document.querySelectorAll("#btn-wood");

buyButtonsWood.forEach((element) => {
  element.addEventListener("click", function (event) {
    const category =
      event.target.parentElement.parentElement.querySelector(
        ".card-title"
      ).textContent;

    const item = event.target.dataset.image;
    const priceWood = parseInt(event.target.textContent.match(/\d+/)[0]);
    buyUnitWood(category, priceWood, item);
  });
});
