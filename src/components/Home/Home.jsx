import React from 'react'
import Me from "../../assets/yo.png";
import "./Home.css";
import HaderSocial from './HaderSocial';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id='home'>


            <div className="intro">
                <img src={Me} alt="" className='home__img' />
                <h1 className="home__name">Cristian Villavicencio</h1>
                <span className="home__education">Soy un desarrollador FrontEnd</span>



                <HaderSocial />

                <a href="#contacto" className="btn">
                    Contactarme :D
                </a>

                <ScrollDown />
            </div>

        </section>

    )
}

export default Home