// JavaScript to handle modal and password prompt
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('info-modal');
    const infoButton = document.getElementById('info-button');
    const closeButton = document.querySelector('.close-button');
    const phoneNumberSpan = document.getElementById('phone-number');

    infoButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    phoneNumberSpan.addEventListener('click', () => {
        const password = prompt('Enter password:');
        if (password === 'iwanttooffmyself') {
            phoneNumberSpan.textContent = '3347090608'; //ISTG IF YOU INSPECTED THE PAGE I'LL KILL YOU
        } else {
            alert('Incorrect password.');
        }
    });
});

//Album changer Javascript
const images = [
    'catpfp.png',
    'teddybearwithsign.jpg'
    
];

let currentIndex = 0;

const photoElement = document.getElementById('photo');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updatePhoto() {
    photoElement.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updatePhoto();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updatePhoto();
});

updatePhoto();  // Initial image load

