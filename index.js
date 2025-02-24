const padlOrel = Math.random() < 0.5;

const vysledekEl = document.querySelector('.vysledek');

if (padlOrel) {
    vysledekEl.textContent = 'Padl orel';
} else {
    vysledekEl.textContent = 'Padla panna'
}  

const minceEl = document.querySelector('.mince');
if (padlOrel) {
    minceEl.classList.add('mince--orel');
} else {
    minceEl.classList.add('mince--panna');
}
