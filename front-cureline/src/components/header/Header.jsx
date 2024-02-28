import React, { useState, useEffect } from "react";
import "./Header.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';
import '../../responsive.css';
import LOGO from '../../logo.png'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleChangeLanguage = (language, e) => {
        i18n.changeLanguage(language)
        }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [language, setLanguage] = useLocalStorage('language', 'ru')
    const {t} = useTranslation()
    return (
        <div>
            <header class="header" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12">
                                <ul class="top-link">
                                    <li><a href="/">О Нас</a></li>
                                    <li><a href="/doctar">Докторы</a></li>
                                    <li><a href="/contact">Контакт</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            
                            <div class="col-lg-6 col-md-7 col-12">
                                <ul class="top-contact">
                                    <li><i class="fa fa-phone"></i>+999 999999999</li>
                                    <li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">romdevv@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-inner">
                    <div class="container">
                        <div class="inner">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-12" >
                                    <div class="logo">
                                        <a href="/"><img src={LOGO} alt="#"  /></a>
                                    </div>
                                    <div className="mobile-nav">
                                        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                            <span style={{
                                                transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'translate(0, 0)',
                                            }}></span>
                                            <span style={{
                                                opacity: menuOpen ? '0' : '1',
                                            }}></span>
                                            <span style={{
                                                transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'translate(0, 0)',
                                            }}></span>
                                        </div>
                                        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                                            <nav>
                                                <ul>
                                                    <li><a href="/">Главная</a></li>
                                                    <li><a href="/doctar">Докторы</a></li>
                                                    <li><a href="#">Услуги</a></li>
                                                    <li><a href="/">О нас</a></li>
                                                    <li><a href="/contact">Контакт</a></li>
                                                    <div className="col-lg-2 col-12 login" >
                                    <div className="registration-icon">
                                        <i className="fa fa-user"></i>
                                        <a href="/singin">Войти</a> 
                                </div>
                                </div>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-9 col-12">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li ><a href="/">Главная<i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="/doctar">Вакансии</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/doctar">Докторы </a></li>
                                                <li><a href="#">Услуги </a></li>
                                                <li><a href="/">О нас <i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="/scan">Сканер</a></li>
                                                        <li><a href="/licence">Лицензия</a></li>
                                                        <li><a href="/doctar">Докторы</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/album">Галерея</a></li>
                                                <li><a href="/contact">Контакт</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-12 login" >
                                    <div className="registration-icon">
                                        <i className="fa fa-user"></i>
                                        <a href="/singin">Войти</a> 
                                </div>
                            </div>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /> EN</MenuItem>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /> RU</MenuItem>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> KGZ</MenuItem>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
};

export default Header;