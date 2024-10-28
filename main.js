const charactersContainer = document.querySelector(".characters-container");
const characterInput = document.getElementById("characterInput")
const searchBtn = document.getElementById("searchBtn")
console.log(searchBtn);

const getCharacters = async () => {
    // console.log(characterInput.value);
    try {
        charactersContainer.innerHTML =""
  const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterInput.value}`);
  // console.log(res.data.results);
  const characters = res.data.results;
  console.log(characters);
  characters.forEach((element) => {
    console.log(element.name);

    //sino ponemos el + se reasigna cada vez que entra y al final solo pinta el ultimo valor del bucle
    // charactersContainer.innerHTML += `<p>${element.name}</p>`;
    charactersContainer.innerHTML += `<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
  <div class="card-header">${element.name}</div>
  <div class="card-body d-flex flex-column align-items-center">
    <h4 class="card-title">${element.gender}</h4>
    <p class="card-text">${element.status}</p>
    <div >
    <img src="${element.image}" alt="${element.name} image" >
    </div>
  </div>`;
  });
    } catch (error) {
        console.error("ERROOOOR")
        charactersContainer.innerHTML = "Character not found"
    }
};
// getCharacters();
searchBtn.addEventListener("click",getCharacters)
