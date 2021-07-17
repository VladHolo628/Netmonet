// import Glide from'./glide.esm.js'
import './slider.js'

const headerMenuBtn = document.querySelector('.header__menu-btn');
const mobileMenu = document.querySelector('.header__menu-list');
const faqItem = document.querySelectorAll ('.faq__item');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalOpener = document.querySelectorAll('.modal-opener');


headerMenuBtn.addEventListener('click',()=>{
    headerMenuBtn.classList.toggle('header__menu-btn--open');
    mobileMenu.classList.toggle('header__menu-list--open');
})

modalOpener.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('modal--opened')
    })
})
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal--opened')
})

// SLIDER
// new Glide('.glide', {
//     autoplay: 3000,
//     type: 'carousel',
//     breakpoints: {
// 		320: {
// 			perView: 1
// 		},
//         768: {
            
//         }
// 	}
// }).mount()
// new Glide('.glide-2', {
//     autoplay: 3000,
//     type: 'carousel'
// }).mount()


// Faq animation
faqItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('faq__item--active');  
    });
});

