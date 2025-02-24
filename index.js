const padlOrel = Math.random() < 0.5;

const minceEl = document.querySelector('.mince');
const vysledekEl = document.querySelector('.vysledek');

if (padlOrel) {
    vysledekEl.textContent = 'Padl orel';
    minceEl.classList.add('mince--orel');
} else {
    vysledekEl.textContent = 'Padla panna'
    minceEl.classList.add('mince--panna');
}  

