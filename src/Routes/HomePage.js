import React from 'react'
import Landing from "../Components/HomePage/Landing";
import grayCircle from '../Assets/VectorBased/gray-circle.svg';
import EvoList from '../Components/HomePage/EvoModelsList';
import Features from '../Components/HomePage/Features';
import About from '../Components/HomePage/About';
import Brands from '../Components/HomePage/Brands';

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
            <Brands/>
        </section>
    )
}

export default HomePage
