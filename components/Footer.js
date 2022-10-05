export default function Footer() {
  return (
    <>
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
