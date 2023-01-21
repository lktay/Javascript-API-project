const alert = document.querySelector(".alert");
const infoContainer = document.querySelector(".container");
const minionImgContainer = document.querySelector(".img-container");
const minionNameContainer = document.querySelector(".name-container");
const descriptionBox = document.querySelector("#nav-description");
const enDescriptionBox = document.querySelector("#nav-enhanced-description");
const toolTip = document.querySelector("#nav-tooltip");

//***FUNCTIONS***
// search function
async function search(e) {
  e.preventDefault();
  let searchValue = document.querySelector(".search_input").value;
  let stringPassIn = `https://ffxivcollect.com/api/minions?name_en_cont=${searchValue}`;

  console.log(searchValue);
  console.log(stringPassIn);
  if (searchValue != "") {
    await fetch(stringPassIn)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        console.log(data);
        //defining data name
        minionData = data.results;
        minionName = minionData[0].name;
        minionImg = minionData[0].image;
        minionDescription = minionData[0].description;
        minionEnDescription = minionData[0].enhanced_description;
        minionTooltip = minionData[0].tooltip;

        //showing the info in divs
        minionImgContainer.classList.remove("hidden");
        minionImgContainer.innerHTML = `<img src="${minionImg}" alt="image of ${minionName}">`;
        infoContainer.classList.remove("hidden");
        minionNameContainer.innerHTML = `<p>${minionName}</p>`;
        descriptionBox.innerHTML = `<p>${minionDescription}</p>`;
        enDescriptionBox.innerHTML = `<p>${minionEnDescription}</p>`;
        toolTip.innerHTML = `<p>${minionTooltip}</p>`;
        searchValue.value = "";
        alert.textContent = "";
        alert.classList.add("hidden");
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  } else {
    displayError();
  }
}

//random Search

function randSearch(e) {
  e.preventDefault();
  let rand = Math.floor(Math.random() * 472);
  let stringPassIn = `https://ffxivcollect.com/api/minions/${rand}`;
  fetch(stringPassIn)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      //defining data name
      minionData = data;
      minionName = minionData.name;
      minionImg = minionData.image;
      minionDescription = minionData.description;
      minionEnDescription = minionData.enhanced_description;
      minionTooltip = minionData.tooltip;

      //showing the info in divs
      minionImgContainer.classList.remove("hidden");
      minionImgContainer.innerHTML = `<img src="${minionImg}" alt="image of ${minionName}">`;
      infoContainer.classList.remove("hidden");
      minionNameContainer.innerHTML = `<p>${minionName}</p>`;
      descriptionBox.innerHTML = `<p>${minionDescription}</p>`;
      enDescriptionBox.innerHTML = `<p>${minionEnDescription}</p>`;
      toolTip.innerHTML = `<p>${minionTooltip}</p>`;
      searchValue.value = "";
      alert.textContent = "";
      alert.classList.add("hidden");
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

//error function
function displayError() {
  alert.textContent = "Please enter a value";
  alert.classList.remove("hidden");
}

// event listeners
document.querySelector(".search-button").addEventListener("click", search);
document.querySelector(".random-button").addEventListener("click", randSearch);
