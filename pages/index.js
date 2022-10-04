import Head from 'next/head'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import SliderImages from '../components/SliderImages'
import Image from 'next/image'
// import HomeCSS from '../styles/pages/HomeCSS.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
      <SearchBar />
      <SliderImages />
      <div className='container'>
        <div className='row'>
          <h2 className='text-center p-2'>Weekly Offers</h2>
        </div>

        <div className='mx-auto row'>
          <div className='col-12 col-sm-6 col-md-6 mb-4 mb-md-0'>
            <Image
              src='/images/home/sub-banner-en-1.jpg'
              className='rounded'
              alt='Image'
              width={3}
              height={0.8}
              layout='responsive'
            />
          </div>
          <div className='col-12 col-sm-6 col-md-6 mb-4 mb-md-0'>
            <Image
              src='/images/home/sub-banner-en-2.jpg'
              className='rounded'
              alt='Image'
              width={3}
              height={0.8}
              layout='responsive'
            />
          </div>
        </div>
      </div>

      <div className='container pt-3 mx-auto row'>
        <div className='col-6 col-sm-6 col-md-3 mb-4 mb-md-0'>
          <Image
            src='/images/home/national-day-sub-banner-1.jpg'
            className='rounded'
            alt='Image'
            width={2}
            height={1}
            layout='responsive'
          />
        </div>
        <div className='col-6 col-sm-6 col-md-3 mb-4 mb-md-0'>
          <Image
            src='/images/home/national-day-sub-banner-2.jpg'
            className='rounded'
            alt='Image'
            width={2}
            height={1}
            layout='responsive'
          />
        </div>
        <div className='col-6 col-sm-6 col-md-3 mb-4 mb-md-0'>
          <Image
            src='/images/home/national-day-sub-banner-3.jpg'
            className='rounded'
            alt='Image'
            width={2}
            height={1}
            layout='responsive'
          />
        </div>
        <div className='col-6 col-sm-6 col-md-3 mb-4 mb-md-0'>
          <Image
            src='/images/home/national-day-sub-banner-4.jpg'
            className='rounded'
            alt='Image'
            width={2}
            height={1}
            layout='responsive'
          />
        </div>
      </div>

      <footer className='container pt-5'>
        <div className='border-top copyright'>
          <div className='row pt-4'>
            <div className='col-lg-6'>
              <p className='mb-2 text-center text-lg-start'>Copyright ©</p>
            </div>
            <div className='col-lg-6 text-center text-lg-end'>
              <ul className='list-unstyled d-inline-flex ms-auto'>
                <li className='me-4'>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
