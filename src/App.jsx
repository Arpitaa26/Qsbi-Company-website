import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Contact from './pages/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/assets/css/main.css';
import Career from './pages/Career/Career';
import JobDetails from './pages/JobDetails/JobDetails';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<h1>404</h1>}/>
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="career" element={<Career/>} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Route>
        </Routes>
     </BrowserRouter>



    </>
  )
}

export default App;
