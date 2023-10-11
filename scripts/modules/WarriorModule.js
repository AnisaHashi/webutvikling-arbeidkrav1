const WarriorModule = (() => {
  const warrior = [
    { name: "Snake", image: "warrior-1.jpg", price: 200 },
    { name: "Giant", image: "warrior-2.jpg", price: 500 },
    { name: "Big Axe", image: "warrior-3.jpg", price: 150 },
    { name: "Thief", image: "warrior-4.jpg", price: 50 },
    { name: "Tanks", image: "warrior-5.jpg", price: 250 },
    { name: "Berserker", image: "warrior-6.jpg", price: 275 },
  ];

  const getWarriors = () => {
    return structuredClone(warrior);
  };

  const getWarriorByName = (categoryName) => {
    return warrior.find((w) => w.name === categoryName);
  };

  return {
    getWarriors,
    getWarriorByName,
  };
})();

export default WarriorModule;
