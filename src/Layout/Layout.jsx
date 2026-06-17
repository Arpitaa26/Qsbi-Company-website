import React from 'react'
import Header from '../include/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../include/Footer/Footer';

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;