
// SEARCH BAR FUNCTIONALITY //

const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const imgs = document.querySelector('a').getElementsByTagName('data-title');
    Array.from(imgs).forEach(function(img) {
        const description = img.textContent;
        if (description.toLowerCase().indexOf(seacrhTerm) != -1) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});