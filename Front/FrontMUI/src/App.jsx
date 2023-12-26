import { useState } from 'react'
import Header from './page/usepage/Header'
import Footer from './page/usepage/Footer'
import HomePage from './page/usepage/Banner'
import ContentSection from './page/usepage/Content'
import Navbar from './page/admin/headsidebar'
import AdminProductsPage from'./page/admin/product'
import AdminUsersPage from'./page/admin/user'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (  
    // <><Navbar />
    //<><AdminProductsPage></AdminProductsPage></>
    //<><AdminUsersPage></AdminUsersPage></>

    <><Header></Header>
      <ContentSection></ContentSection>
      <HomePage></HomePage>
      <Footer></Footer></> 

  )
}

export default App
