const images = document.getElementById('images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menu = document.getElementById('menu');
const navi = document.querySelector('nav');

// Event listener for opening the modal
images.addEventListener("click", openModal);

function openModal(event) {
    // Code to show modal  - Use event parameter 'e'   
    console.log(event);
    let imageSrc = event.target.src;

    // select img tag inside dialog, give it src
    console.log(modalImage);
    modalImage.src = imageSrc.replace(".jpg", "-full.jpg");
    console.log(typeof(imageSrc))
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Event listener for opening the menu
menu.addEventListener("click", toggleMenu)

function toggleMenu(event) {
    // Show or hide the menu
    navi.classList.toggle('dropdown');
}