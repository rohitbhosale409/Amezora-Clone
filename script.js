const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn = document.querySelectorAll('.control_next');

let n = 0;

function changesSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changesSlide();

next_btn.forEach(btn => btn.addEventListener('click', () => {
    n = (n + 1) % imgs.length;
    changesSlide();
}));

prev_btn.forEach(btn => btn.addEventListener('click', () => {
    n = (n - 1 + imgs.length) % imgs.length;
    changesSlide();
}));

const scrollContainer = document.querySelectorAll('.produts');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
