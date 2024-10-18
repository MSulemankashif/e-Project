document.getElementById("homeIcon").addEventListener("click", function(e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); // For scroll

const searchIcon = document.querySelector('.fas.fa-search');
const searchBar = document.querySelector('.search-bar input');

searchIcon.addEventListener('click', () => {
  searchBar.focus();
});