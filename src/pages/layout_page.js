import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../widgets/navbar'
import Footer from '../widgets/footer'

const LayoutPage = () => {
    return (
       <div>
        <Outlet/>
        <Footer/>

       </div>
    )
}

export default LayoutPage
