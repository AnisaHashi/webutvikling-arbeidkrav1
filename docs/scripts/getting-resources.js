// alert("Hey")

let gold = parseInt(localStorage.getItem("gold") ?? 0);
let metal = parseInt(localStorage.getItem("metal") ?? 0);
let wood = parseInt(localStorage.getItem("wood") ?? 0);

let minesContainer = document.getElementById("mines-container");
let woodContainer = document.getElementById("wood-container");

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

const updateMetalCount = () => {
  const metalElement = document.getElementById("metal-count");
  if (metalElement) {
    metal = parseInt(localStorage.getItem("metal") ?? 0);
    metalElement.innerHTML = metal;
  }
};

// const updateMetalCount = () => {
//   const metalElement = document.getElementById("metal-count");
//   const metal = parseInt(localStorage.getItem("metal") ?? 0);

//   metalElement.innerHTML = metal;
// };

const updateGoldCount = () => {
  const goldElement = document.getElementById("gold-count");
  if (goldElement) {
    gold = parseInt(localStorage.getItem("gold") ?? 0);
    goldElement.innerHTML = gold;
  }
};

// const updateGoldCount = () => {
//   const goldElement = document.getElementById("gold-count");
//   const gold = parseInt(localStorage.getItem("gold") ?? 0);

//   goldElement.innerHTML = gold;
// };

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
function updateWoodCount() {
  const woodElement = document.getElementById("wood-count");
  if (woodElement) {
    const wood = parseInt(localStorage.getItem("wood") ?? 0);
    woodElement.innerHTML = wood;
  }
}

// function updateWoodCount() {
//   const woodElement = document.getElementById("wood-count");
//   const wood = parseInt(localStorage.getItem("wood") ?? 0);

//   woodElement.innerHTML = wood;
// }

woodContainer.addEventListener("click", function () {
  wood += 100;
  localStorage.setItem("wood", wood);
  updateWoodCount();
});

document.getElementById("clear-btn").addEventListener("click", () => {
  clear();
});
