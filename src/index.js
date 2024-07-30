console.log('%c HI', 'color: firebrick')
// JavaScript to handle Dog CEO API

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');

    // Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.message;
            images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Dog Image';
                img.style.width = '200px'; // Adjust size as needed
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

    // Fetch and display dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = data.message;
            Object.keys(breeds).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                li.addEventListener('click', () => {
                    li.style.color = li.style.color === 'red' ? 'black' : 'red'; // Toggle color
                });
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

    // Filter breeds based on selected letter
    breedDropdown.addEventListener('change', () => {
        const filter = breedDropdown.value;
        const items = breedList.querySelectorAll('li');
        items.forEach(item => {
            const breed = item.textContent;
            if (breed.startsWith(filter)) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
