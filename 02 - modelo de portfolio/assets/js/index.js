/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services_modal'),
modalButton = document.querySelectorAll('.services_button'),
modalClose = document.querySelectorAll('.services_modal_close');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active_modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active_modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTetimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clikcable: true,
    },
  });

/*=============== SHOW SCROLL UP ===============*/ 
