import React from 'react'
import "./About.css";
import Image from '../../assets/yooo2.svg'
import "./AbotBox"
import AbotBox from './AbotBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">Sobre mi</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__desciption">Estudiante apasionado por el
                            desarrollo y la resolución de
                            problemas.
                            Facilidad a la hora de aprender,
                            adaptarme a nuevos ambientes y
                            emprender
                            desafíos.</p>
                        <a href="" className="btn">Descargar CV</a>
                    </div>

                    <div className="about__skills grid">

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">FrontEnd</h3>
                                <span className="skills__number ">30%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">BackEnd</h3>
                                <span className="skills__number ">5%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui_desing"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Tomar Caffe</h3>
                                <span className="skills__number ">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <AbotBox />
        </section>
    )
}

export default About