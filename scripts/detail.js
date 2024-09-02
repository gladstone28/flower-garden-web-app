document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const flower = queryParams.get('flower');

    const flowersAndPlants = {
        'ixora': {
            name: 'Ixora',
            image: 'images/ixora.jpg',
            description: 'Ixora is growing in the Roseberry Garden. Ixora is a popular ornamental shrub known for its clusters of brightly colored flowers, which can range from red, orange, pink, to yellow. It is often used in gardens and landscaping due to its vibrant appearance and ability to attract pollinators like butterflies. This plant is commonly found in tropical and subtropical regions.'
        },
        'crossandra': {
            name: 'Crossandra',
            image: 'images/crossandra.jpg',
            description: 'This flower which is located at the grill at Roseberry is known as Crossandra. Specifically, this looks like the Crossandra infundibuliformis, commonly referred to as the Firecracker Flower. It is a popular ornamental plant in tropical regions, admired for its bright orange or salmon-colored flowers and shiny, dark green leaves. Crossandra is often grown in pots or gardens and blooms throughout the year in warm climates.'
        },
        'crown-of-thorns': {
            name: 'Crown of Thorns',
            image: 'images/crown-of-thorns.jpg',
            description: 'This flower at the corner of the house at Roseberry is known as the Crown of Thorns (Euphorbia milii). It is a popular ornamental plant, known for its vibrant red or pink bracts (which are often mistaken for flowers) and its thorny stems. The actual flowers are small and found at the center of the colorful bracts. Crown of Thorns is a hardy succulent that thrives in warm, sunny environments and is often grown in pots or as part of a garden landscape. It is also associated with Christian symbolism due to its thorny appearance, resembling the crown of thorns worn by Jesus during the crucifixion.'
        },
        'golden-duranta': {
            name: 'Golden Duranta',
            image: 'images/golden-duranta.jpg',
            description: 'The plant along the wall by the swimming pool is named the Golden Duranta (Duranta erecta "Golden Edge" or Duranta repens). This plant is known for its bright, golden-yellow foliage, which makes it a popular choice for hedges and borders in gardens. The Golden Duranta is a fast-growing, evergreen shrub that can also produce small, lavender-colored flowers and golden berries. It thrives in warm, sunny climates and is often used in landscaping for its vibrant color and ease of care. Other names for the plant are Golden Dewdrop, Pigeon Berry or Skyflower.'
        },
        'ti-plant': {
            name: 'Ti Plant',
            image: 'images/ti-plant.jpg',
            description: 'This plant in the Roseberry Garden is the Ti Plant (Cordyline fruticosa), also known as the Hawaiian Ti Plant or Good Luck Plant. This plant is known for its striking foliage, which can range in color from green to red, purple, or even variegated patterns. The leaves are typically long, broad, and pointed, often with a glossy finish. ' +
                        'The Ti Plant is often used in landscaping for its vibrant color and is also popular in tropical and subtropical gardens. In many cultures, it is believed to bring good luck and is sometimes used in religious or spiritual ceremonies.'
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
