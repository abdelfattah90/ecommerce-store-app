import Sliderimages from '../../styles/components/HomeComponents/Sliderimages.module.css'

export default function SliderImages() {
  return (
    <div
      id='carouselExampleFade'
      className='container pt-3 pb-5 carousel slide carousel-fade'
      data-bs-ride='carousel'
    >
      <div className={`carousel-inner ${Sliderimages.customCarouselInner}`}>
        <div className='carousel-item active'>
          <picture>
            <source srcSet='/images/slider/vivo-v25.jpg' type='image/webp' />
            <img
              className='d-block w-100'
              src='/images/slider/vivo-v25.jpg'
              alt='Landscape picture'
            />
          </picture>
        </div>

        <div className='carousel-item'>
          <picture>
            <source
              srcSet='/images/slider/bose-quietcomfort.jpg'
              type='image/webp'
            />
            <img
              className='d-block w-100'
              src='/images/slider/bose-quietcomfort.jpg'
              alt='Landscape picture'
            />
          </picture>
        </div>

        <div className='carousel-item'>
          <picture>
            <source srcSet='/images/slider/nova-y90.jpg' type='image/webp' />
            <img
              className='d-block w-100'
              src='/images/slider/nova-y90.jpg'
              alt='Landscape picture'
            />
          </picture>
        </div>
      </div>
      <button
        className={`carousel-control-prev ${Sliderimages.customCarouselPrev}`}
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className={`carousel-control-next ${Sliderimages.customCarouselNext}`}
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
