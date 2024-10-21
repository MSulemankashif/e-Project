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
const searchInput = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('.title').textContent.toLowerCase();
    const description = card.querySelector('.description').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
