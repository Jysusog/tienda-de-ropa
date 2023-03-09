const isScrolling =() =>{
    const headerEl =document.querySelector('.header')
    let windowPosition = window.scrollY >10
    headerEl.classList.toggle('active',windowPosition)
}
window.addEventListener('scroll',isScrolling);