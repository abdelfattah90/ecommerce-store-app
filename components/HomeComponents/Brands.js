import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/controller'

import BrandsCSS from '../../styles/components/HomeComponents/BrandsCSS.module.css'

export default function Brands() {
  return (
    <>
      <div className='container-fluid'>
        <h4 className='p-2'>Shop by Brand</h4>
        <Swiper
          className={`${BrandsCSS.customSwiper}`}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={35}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/hp.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/dell.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/apple.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/oppo.png'
              className='img-fluid'
              alt='Image'
              width='100%'
              height='100%'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/samsung.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/xiaomi.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
          <SwiperSlide className={`${BrandsCSS.sizeImg}`}>
            <Image
              src='/images/brands/huawei.png'
              className='img-fluid'
              alt='Image'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
