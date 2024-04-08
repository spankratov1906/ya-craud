function removeSwiperElements() {
  const screenWidth = window.innerWidth
  if (screenWidth > 768) {
    const swiperSlides = document.querySelectorAll('.stages__swiper .swiper__slide')
    const swiperControls = document.querySelector('.swiper__controls')

    swiperControls.remove()

    swiperSlides.forEach((slide) => {
      const children = slide.children

      Array.from(children).forEach((child) => {
        slide.parentNode.insertBefore(child, slide)
      })
      slide.remove()
    })

    const swiperWrapper = document.querySelector('.swiper__wrapper')

    const wrapperChildren = swiperWrapper.children

    Array.from(wrapperChildren).forEach((child) => {
      swiperWrapper.parentNode.insertBefore(child, swiperWrapper)
    })

    swiperWrapper.remove()
  }
}

window.addEventListener('load', removeSwiperElements)
window.addEventListener('resize', removeSwiperElements)
