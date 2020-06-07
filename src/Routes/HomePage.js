import React from 'react'
import Landing from "../Components/HomePage/Landing";
import grayCircle from '../Assets/VectorBased/gray-circle.svg';
import EvoList from '../Components/HomePage/EvoModelsList';
import Features from '../Components/HomePage/Features';
import About from '../Components/HomePage/About';

function HomePage() {

    var backgroundCircle = {
        backgroundImage: "url(" +  grayCircle  + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-250px 20px"

    }
    return (
        <section style={backgroundCircle}>
            <Landing/>
            <EvoList/>
            <Features/>
            <About/>
        </section>
    )
}

export default HomePage
