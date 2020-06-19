import React from 'react'
import Landing from "../Components/HomePage/Landing";
import grayCircle from '../Assets/VectorBased/gray-circle.svg';
import EvoList from '../Components/HomePage/EvoModelsList';
import Features from '../Components/HomePage/Features';
import About from '../Components/HomePage/About';
import Partners from '../Components/HomePage/Partners';

function HomePage() {

    var backgroundCircle = {
        backgroundImage: "url(" +  grayCircle  + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-10vw 1%",
        backgroundSize: "30%"

    }
    return (
        <section style={backgroundCircle}>
            <Landing/>
            <EvoList/>
            <Features/>
            <About/>
            <Partners/>
        </section>
    )
}

export default HomePage
