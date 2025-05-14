import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import RowList from '../../Components/Rows/RowList/RowList'
function Home() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default Home