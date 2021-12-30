//UI
const pagis = document.querySelectorAll('.page-item');
const carousels = document.querySelectorAll('.carousel-item');

// console.log(pagis.length);

// let idx = 0;

// function pagicarchange() {
//     if (idx >= pagis.length - 1) {
//         idx = 0;
//     } else {
//         idx++;
//     }

//     removeactive();
//     pagis[idx].classList.add('active');
//     // carousels[idx].classList.add('active');
// }

// setInterval(() => {
//     pagicarchange();
// }, 5000);


pagis.forEach((pagi) => {
    pagi.addEventListener('click', () => {
        removeactive();
        pagi.classList.add('active');
        // console.log();
    });
});

function removeactive() {
    pagis.forEach((pagi) => {
        pagi.classList.remove('active');
    });

    // carousels.forEach((carousel) => {
    //     carousel.classList.remove('active');
    // })
}