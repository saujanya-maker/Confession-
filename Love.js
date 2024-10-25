const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const congratsPopup = document.getElementById('congratsPopup');
const closePopup = document.getElementById('closePopup');

// Event listener for No button to swap places
noBtn.addEventListener('mouseover', swapPosition);
noBtn.addEventListener('click', swapPosition);

// Event listener for Yes button to show congratulations popup
yesBtn.addEventListener('click', showCongratsPopup);

// Event listener to close the popup
closePopup.addEventListener('click', () => {
    congratsPopup.classList.add('hidden');
});

function swapPosition() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const newLeft = Math.random() * (window.innerWidth - containerRect.width);
    const newTop = Math.random() * (window.innerHeight - containerRect.height);

    container.style.position = 'relative';
    noBtn.style.position = 'absolute';
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
}

function showCongratsPopup() {
    congratsPopup.classList.remove('hidden');
}
