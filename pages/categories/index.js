import Head from 'next/head'
import NavBar from '../../components/NavBar'
import Image from 'next/image'

export default function IndexCategories() {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <NavBar />

      <div className='container pt-3 mx-auto row'>
        <div className='col-lg-3 col-md-4 col-sm-6 pt-2'>
          <Image
            src='/images/home/national-day-sub-banner-1.jpg'
            className='rounded'
            alt='Image'
            width={2}
            height={1}
            layout='responsive'
          />
        </div>
      </div>
    </>
  )
}
