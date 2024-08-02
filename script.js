// script.js

function calculateCountdown() {
    const startDate = new Date('2024-02-01T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const { days, hours, minutes, seconds } = calculateCountdown();
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

function nextStep() {
    const months = document.getElementById('months').value;
    if (months == 6) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        updateCountdown();
        setInterval(updateCountdown, 1000);
    } else {
        showModal();
    }
}

function showModal() {
    const modal = document.getElementById('errorModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('errorModal');
    modal.style.display = 'none';
}

function showLetter() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function showThankYouPage() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
}

// Play background music
window.onload = function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play().catch(error => console.log('Music play prevented by browser:', error));
};
