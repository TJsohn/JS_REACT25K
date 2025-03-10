const animals = [
  { name: "Fox", type: "Mammal" },
  { name: "Bear", type: "Mammal" },
  { name: "Eagle", type: "Bird" },
  { name: "Horse", type: "Mammal" },
  { name: "Lizard", type: "Reptile" },
  { name: "Frog", type: "Amphibian" },
  { name: "Shark", type: "Fish" },
];

const animalList = document.querySelector("#animalList");
const addAnimalButton = document.querySelector("#addAnimal");
const filterType = document.querySelector("#filterType");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");

/*function displayAnimals(animals) {
  const listElement = document.getElementById("animalList");
  listElement.innerHTML = "";

  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.textContent = `${animal.name} (${animal.type})`;
    listElement.appendChild(li);
  });
}

displayAnimals(animals);
*/

const displayAnimals = (animalArray) => {
  animalList.innerHTML = "";

  if (animalArray.length === 0) {
    animalList.innerHTML = "<li>No animals found.</li>";
    return;
  }

  animalArray.forEach((animal, index) => {
    const li = document.createElement("li");
    li.textContent = `${animal.name} (${animal.type})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = () => removeAnimal(index);

    li.appendChild(removeButton);
    animalList.appendChild(li);
  });
};

const addAnimal = () => {
  event.preventDefault();

  const nameInput = document.querySelector("#newAnimalName").value.trim();
  const typeInput = document.querySelector("#newAnimalType").value;
  animals.push({ name: nameInput, type: typeInput });
  displayAnimals(animals);
  document.querySelector("#newAnimalName").value = "";
  document.querySelector("#newAnimalType").value = "";
};

const removeAnimal = (index) => {
  animals.splice(index, 1);
  displayAnimals(animals);
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );
  displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filterType.value;

  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

const sortAnimal = () => {
  animals.sort((a, b) => a.name.localeCompare(b.name));
  displayAnimals(animals);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
filterType.addEventListener("change", filterByTypeAnimal);

displayAnimals(animals);
