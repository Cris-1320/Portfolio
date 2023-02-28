import React from 'react'

const AbotBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>


                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Proyectos Completados</span>

                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>


                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cafes tomados</span>

                </div>
            </div>


            {/* <div className="about__box">
                <i className="about__icon icon-people"></i>


                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Clientes Satisfechos</span>

                </div>
            </div> */}

            {/* <div className="about__box">
                <i className="about__icon icon-badge"></i>


                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">premios ?</span>

                </div>
            </div> */}
        </div>
    )
}

export default AbotBox