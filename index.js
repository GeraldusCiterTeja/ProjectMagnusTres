const formSearch = document.querySelector(".form-search");
const searchBox = document.querySelector("#search-box");
const search_Button = document.getElementById("search-button");

search_Button.addEventListener("click",(e)=>{
    formSearch.classList.toggle('active')
    searchBox.focus();
  
});

// click di luar element
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", (e) => {
  if (!formSearch.contains(e.target) && !searchButton.contains(e.target)) {
    formSearch.classList.remove("active");
  }
});
