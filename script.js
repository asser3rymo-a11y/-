// ====== ظهور الصور في modal ======
const logoImages = document.querySelectorAll('.logo-box img');
logoImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${img.src}" alt="صورة مكبرة">`;
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// ====== شريط الصور المتحرك ======
const slider = document.querySelector('.slider');

let scrollAmount = 0;
const scrollPerClick = 360; // المسافة اللي تتحرك بيها الصورة




// حركة تلقائية كل 3 ثواني
setInterval(() => {
    slider.scrollBy({ top: scrollPerClick, behavior: 'smooth' });
}, 3000);
