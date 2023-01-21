//***FUNCTIONS***
// search function
let search = (e) => {
  const searchValue = document.querySelector(".search_input").value;
  const stringPassIn = `https://ffxivcollect.com/api/minions?name_en_cont=${searchValue}`;
  console.log(stringPassIn);
  fetch(stringPassIn)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

document.querySelector(".search-button").addEventListener("click", search);
