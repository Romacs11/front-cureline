import React from 'react'
import "./AboutUs.css";
import "../../App.css";
import "../../normalize.css";
import "../../responsive.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutUs = () => {
    return (

            <section className="why-choose section" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Добро пожаловать в мир точной диагностики и заботы о вашем здоровье с DocLab Pathological Laboratory!</h2>
                            <p>Мы - международная лаборатория, стремящаяся к высшему качеству диагностики и исследований в области патологии.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="choose-left">
                            <h3>О нас</h3>
                            <p>В рамках наших задач мы активно сотрудничаем с лучшими специалистами и лабораториями по всему миру, используя передовые методы диагностики и передовое оборудование. Мы гордимся тем, что наша лаборатория обеспечивает доступ к мировым возможностям диагностики (worldwide diagnostics), что позволяет нам оперативно и точно выявлять широкий спектр заболеваний.</p>
                            <p>Мы стремимся к постоянному развитию и совершенствованию наших услуг, чтобы обеспечить нашим пациентам лучшее возможное обслуживание и помочь им сохранить здоровье на долгие годы.</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="choose-right">
                            <div className="video-image">
                                <div className="promo-video">

                                </div>
                                <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><FontAwesomeIcon icon="fa-solid fa-play"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs