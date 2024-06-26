import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Upperbody from '../components/Upperbody'


export default function Home() {
    return (
        <div>
            {/* we use same navbar everywhere, that's why before constructing page, we called it */}
            <div> <Navbar /> </div>
            <div> <Carousel /> </div>
             <div> <Upperbody /> </div>
            <div> <Footer /> </div>
        </div>
    )
}
