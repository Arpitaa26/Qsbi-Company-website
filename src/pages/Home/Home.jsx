import React from 'react'
import { Button } from 'react-bootstrap';
import Layout from '../../Layout/Layout';
import Hero from './Section/Hero';
import AboutUs from './Section/AboutUs';
import Features from './Section/Features';
import FeaturesItems from './Section/FeaturesItems';
import DeviceSupports from './Section/DeviceSupports';
import Clients from './Section/Clients';
import Testimonials from './Section/Testimonials';
import States from './Section/States';
import ServiceSection from './Section/ServiceSection';
import CallToAction from './Section/CallToAction';
import ContactSection from './Section/ContactSection';
function Home() {
  return (
    <>
    <main class="main">
     <Hero/>
     <AboutUs/>
     <Features/>
     <FeaturesItems/>
     <DeviceSupports/>
     <CallToAction/>
     <Clients/>
     <Testimonials/>
     <States/>
     <ServiceSection/>
     <ContactSection/>
    </main>
      
    </>
  )
}

export default Home;
