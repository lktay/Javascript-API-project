const alert = document.querySelector(".alert");

//***FUNCTIONS***
// search function
async function search(e) {
  let searchValue = document.querySelector(".search_input").value;
  let stringPassIn = `https://ffxivcollect.com/api/minions?name_en_cont=${searchValue}`;

  console.log(searchValue);
  console.log(stringPassIn);
  if (searchValue != "") {
    await fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        minionData = data.results;
        minionName = minionData[0].name;
        minionDescription = minionData[0].description;
        minionEnDescription = minionData[0].enhanced_description;
        minionTooltip = minionData[0].tooltip;
        console.log(minionTooltip);
        // returnToDefault();
      });
  } else {
    await displayError();
  }
}

//error function
function displayError() {
  alert.textContent = "Please enter a value";
  alert.classList.remove("hidden");
}
//default function
// function returnToDefault() {
//   searchValue.value = "";
//   alert.textContent = "";
//   alert.classList.add("hidden");
// }

// event listeners
document.querySelector(".search-button").addEventListener("click", search);
