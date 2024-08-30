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
