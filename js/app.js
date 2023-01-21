const alert = document.querySelector(".alert");
const searchValue = document.querySelector(".search_input").value;
const stringPassIn = `https://ffxivcollect.com/api/minions?name_en_cont=${searchValue}`;

//***FUNCTIONS***
// search function
function search(e) {
  console.log(searchValue);
  console.log(stringPassIn);
  if (searchValue != "") {
    fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        returnToDefault();
      });
  } else {
    displayError();
  }
}

function displayError() {
  alert.textContent = "Please enter a value";
  alert.classList.remove("hidden");
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.add("hidden");
  }, 1000);
}
function returnToDefault() {
  searchValue.textContent = "";
}

// event listeners
document.querySelector(".search-button").addEventListener("click", search);
