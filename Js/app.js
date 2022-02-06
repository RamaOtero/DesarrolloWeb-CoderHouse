addEventListener('DOMContentLoaded',() => {
  const btn__menu = document.querySelector('.btn__menu')
  if (btn__menu) {
      btn__menu.addEventListener('click', () => {
          const nav__items = document.querySelector('.nav__items')
          nav__items.classList.toggle('show')
      })
  }
})