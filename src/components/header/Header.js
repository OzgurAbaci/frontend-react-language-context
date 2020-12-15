import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import './Header.css';
import {LanguageContext} from "../../context/languageContext/LanguageContext";
import {FlagProvider} from "../FlagProvider/FlagProvider";

const content = {
  nl: {
    menuItems: {
      aboutUs: 'Over ons',
      allPlants: 'Alle planten',
      experience: 'Persoonlijke ervaringen'
    },
    changeTo: 'Cambiar el idioma a',
    title: 'Planten voor iedereen!'
  },
  es: {
    menuItems: {
      aboutUs: 'Sobre nosotros',
      allPlants: 'todas las plantas',
      experience: 'Experiencias personales'
    },
    changeTo: 'Wissel taal naar',
    title: 'Plantas para todos!'
  }
}

function Header() {
  const {language, setDutch, setSpanish, toggleLanguage} = useContext(LanguageContext);
  let rightLangContent = {}
  let changeLanguage = ()=>{}

  // switch (language){
  //   case 'nl':
  //     rightLangContent = content.nl;
  //     changeLanguage = setSpanish;
  //     break;
  //   case 'es':
  //     rightLangContent = content.es;
  //     changeLanguage = setDutch;
  //     break;
  //   default:
  //     rightLangContent = content.nl;
  // }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content[language].menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[language].menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch" onClick={toggleLanguage}>
              <p>{content[language].changeTo}</p>
              <FlagProvider />
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content[language].title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
