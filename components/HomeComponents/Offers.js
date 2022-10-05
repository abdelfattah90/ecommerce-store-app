import Image from 'next/image'

export default function Offers() {
  return (
    <>
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
    </>
  )
}
