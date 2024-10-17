const formSearch = document.querySelector('.form-search');
const searchBox = document.querySelector('#search-box');


document.querySelector('#search-button').onclick = (e) => {
  formSearch.classList.toggle('active')
  searchBox.focus();
  e.preventDefault();
}

// click di luar element
const searchButton = document.querySelector('#search-button')

document.addEventListener('click', (e)=>{
    if(!formSearch.contains(e.target)&& !searchButton.contains(e.target)){
      formSearch.classList.remove('active');
    }
  })
  