document.addEventListener("DOMContentLoaded", () => {
    const flowersAndPlants = [{
            name: 'Ixora',
            image: 'images/ixora.jpg',
            description: 'Ixora is a genus of flowering plants in the family Rubiaceae. It is commonly known for its bright clusters of flowers, which bloom in a variety of colors including red, orange, pink, and yellow.'
        },
        {
            name: 'Crossandra',
            image: 'images/crossandra.jpg',
            description: 'Crossandra, also known as Firecracker Flower, is a tropical plant known for its bright orange flowers and glossy, dark green leaves. It is often grown as an ornamental plant in gardens.'
        },
        {
            name: 'Crown of Thorns',
            image: 'images/crown-of-thorns.jpg',
            description: 'The Crown of Thorns is a popular houseplant known for its thorny stems and vibrant red or pink bracts. It is a succulent that can thrive in warm, sunny environments and is often associated with Christian symbolism.'
        },
        {
            name: 'Golden Duranta',
            image: 'images/golden-duranta.jpg',
            description: 'Golden Duranta is a fast-growing evergreen shrub known for its bright, golden-yellow foliage. It is often used in landscaping as a hedge or ornamental plant, and can produce lavender-colored flowers and golden berries.'
        },
        {
            name: 'Ti Plant',
            image: 'images/ti-plant.jpg',
            description: 'The Ti Plant, also known as the Good Luck Plant or Hawaiian Ti, is known for its colorful foliage, which can range from green to red, purple, or even variegated patterns. It is a popular choice for tropical landscaping.'
        },
    ];

    const gallery = document.getElementById('garden-gallery');

    flowersAndPlants.forEach(plant => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = plant.image;
        img.alt = plant.name;
        galleryItem.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = plant.name;
        galleryItem.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = plant.description;
        galleryItem.appendChild(p);

        gallery.appendChild(galleryItem);
    });
});