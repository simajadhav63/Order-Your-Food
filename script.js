function redirectToSearchResults() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    } else {
        alert('Please enter a food name to search.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('query');
    const searchResultElement = document.getElementById('searchResult');
    const searchResultsElement = document.getElementById('searchResults');

    if (query) {
        searchResultElement.textContent = `Search Results for: ${query}`;
        // Replace placeholder logic with actual logic to display food images
        displayFoodImage(query);
    } else {
        searchResultElement.textContent = 'No search query provided.';
    }
});

function displayFoodImage(query) {
    // Replace this logic with your actual logic to display food images based on the search query
    const foodImages = {
        pizza: 'https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg',
        burger: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LA8wWHsThm-asn5Erc8DPfreqHmsnu_dUcSG5ra7UA&s',
        pasta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fHO10G_8nKiK1dWMVUMH2ne-4wM3iBH06g&usqp=CAU',
        // Add more food images as needed
    };

    const imageSrc = foodImages[query.toLowerCase()];
    if (imageSrc) {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = query;
        searchResultsElement.appendChild(imgElement);
    } else {
        searchResultsElement.textContent = 'No image found for the search query.';
    }
}

