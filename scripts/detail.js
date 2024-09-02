document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const flower = queryParams.get('flower');

    const flowersAndPlants = {
        'ixora': {
            name: 'Ixora',
            image: 'images/ixora.jpg',
            description: 'Ixora is a genus of flowering plants in the family Rubiaceae. It is commonly known for its bright clusters of flowers, which bloom in a variety of colors including red, orange, pink, and yellow.'
        },
        'crossandra': {
            name: 'Crossandra',
            image: 'images/crossandra.jpg',
            description: 'Crossandra, also known as Firecracker Flower, is a tropical plant known for its bright orange flowers and glossy, dark green leaves. It is often grown as an ornamental plant in gardens.'
        },
        'crown-of-thorns': {
            name: 'Crown of Thorns',
            image: 'images/crown-of-thorns.jpg',
            description: 'The Crown of Thorns is a popular houseplant known for its thorny stems and vibrant red or pink bracts. It is a succulent that can thrive in warm, sunny environments and is often associated with Christian symbolism.'
        },
        'golden-duranta': {
            name: 'Golden Duranta',
            image: 'images/golden-duranta.jpg',
            description: 'Golden Duranta is a fast-growing evergreen shrub known for its bright, golden-yellow foliage. It is often used in landscaping as a hedge or ornamental plant, and can produce lavender-colored flowers and golden berries.'
        },
        'ti-plant': {
            name: 'Ti Plant',
            image: 'images/ti-plant.jpg',
            description: 'The Ti Plant, also known as the Good Luck Plant or Hawaiian Ti, is known for its colorful foliage, which can range from green to red, purple, or even variegated patterns. It is a popular choice for tropical landscaping.'
        }
    };

    if (flower && flowersAndPlants[flower]) {
        document.getElementById('flower-name').textContent = flowersAndPlants[flower].name;
        document.getElementById('flower-image').src = flowersAndPlants[flower].image;
        document.getElementById('flower-image').alt = flowersAndPlants[flower].name;
        document.getElementById('flower-description').textContent = flowersAndPlants[flower].description;
    } else {
        document.getElementById('flower-name').textContent = 'Flower not found';
        document.getElementById('flower-description').textContent = 'We couldn\'t find the flower you were looking for.';
    }

    // Back Button Functionality
    document.getElementById('back-button').addEventListener('click', () => {
        window.history.back();
    });

    // Home Button Functionality
    document.getElementById('home-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
