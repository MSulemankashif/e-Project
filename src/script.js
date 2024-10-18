// document.getElementById("homeIcon").addEventListener("click", function(e) {
//     e.preventDefault(); // Prevent the default link behavior
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth" // This enables smooth scrolling
//     });
// });
const searchIcon = document.querySelector('.fas.fa-search');
const searchBar = document.querySelector('.search-bar input');

searchIcon.addEventListener('click', () => {
  searchBar.focus();
});