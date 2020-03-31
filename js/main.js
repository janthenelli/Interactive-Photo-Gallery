
// SEARCH BAR FUNCTIONALITY //

const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
        $('.thumbnail').removeClass('hidden');
        return;
    }
    const imgs = $('.thumbnail a[data-title*="' + searchTerm + '"]');
    $('.thumbnail').addClass('hidden');
    imgs.parent().removeClass('hidden');
});