import Head from 'next/head'
import NavBar from '../components/NavBar'
import SearchBar from '../components/HomeComponents/SearchBar'
import SliderImages from '../components/HomeComponents/SliderImages'
import Offers from '../components/HomeComponents/Offers'
import Brands from '../components/HomeComponents/Brands'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
      <SearchBar />
      <SliderImages />
      <Brands />
      <Offers />
      <Footer />
    </>
  )
}
