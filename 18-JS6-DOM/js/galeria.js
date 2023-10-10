const imagesData = [
    {
        src: 'img/img1.jpg',
        alt: 'Imagen 1',
    },
    {
        src: 'img/news-2.jpg',
        alt: 'Imagen 2',
    },
    {
        src: 'img/news-3.jpg',
        alt: 'Imagen 3',
    },
    {
        src: 'img/news-3.jpg',
        alt: "Imagen 4"
    }
];

const imageGallery = document.getElementById('imageGallery');
const fullImageContainer = document.getElementById('fullImageContainer');
const fullImage = document.getElementById('fullImage');
const closeButton = document.getElementById('closeButton');

// Crear miniaturas de imágenes a partir de los datos del array
imagesData.forEach((imageData, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = imageData.src;
    thumbnail.alt = imageData.alt;
    thumbnail.classList.add('thumbnail');

    thumbnail.addEventListener('click', () => {
        fullImage.src = imageData.src;
        fullImage.alt = imageData.alt;
        fullImageContainer.style.display = 'block';
    });

    imageGallery.appendChild(thumbnail);
});

closeButton.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});

fullImageContainer.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});

fullImage.addEventListener('click', (event) => {
    event.stopPropagation();
});
