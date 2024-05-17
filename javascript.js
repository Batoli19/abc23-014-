const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryContainer = document.querySelector('.gallery-container');

let index = 0;

prevButton.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    updateGallery();
});

nextButton.addEventListener('click', () => {
    index = Math.min(index + 1, galleryContainer.children.length - 4);
    updateGallery();
});

function updateGallery() {
    galleryContainer.style.transform = `translateX(-${index * 25}%)`; // Move by 25% for each image
}

