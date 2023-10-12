// WarriorModule is defined as an Immediately Invoked Function Expression (IIFE).
const WarriorModule = (() => {
  // Array containing warrior objects with name, image filename, and price.
  const warrior = [
    { name: "Snake", image: "warrior-1.jpg", price: 200 },
    { name: "Giant", image: "warrior-2.jpg", price: 500 },
    { name: "Big Axe", image: "warrior-3.jpg", price: 150 },
    { name: "Thief", image: "warrior-4.jpg", price: 50 },
    { name: "Tanks", image: "warrior-5.jpg", price: 250 },
    { name: "Berserker", image: "warrior-6.jpg", price: 275 },
  ];

  // Function to retrieve a copy of the warrior array.
  const getWarriors = () => {
    // Using structuredClone to create a deep copy of the warrior array.
    return structuredClone(warrior);
  };

  // Function to find a warrior by its name in the warrior array.
  const getWarriorByName = (categoryName) => {
    return warrior.find((w) => w.name === categoryName);
  };

  return {
    getWarriors,
    getWarriorByName,
  };
})();

// Exposing methods for external use.
export default WarriorModule;
