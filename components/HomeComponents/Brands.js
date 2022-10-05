import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import BrandsCSS from '../../styles/components/HomeComponents/BrandsCSS.module.css'

export default function Brands() {
  return (
    <>
      <div className='container-fluid'>
        <h3 className='p-5'>Shop by Brand</h3>
        <Swiper
          className={`${BrandsCSS.customSwiper}`}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={35}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/hp.png'
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/dell.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/apple.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/oppo.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/samsung.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/xiaomi.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${BrandsCSS.sizeImg}`}>
              <Image
                src='/images/brands/huawei.png'
                className=''
                alt='Image'
                width={200}
                height={200}
                objectFit='contain'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
