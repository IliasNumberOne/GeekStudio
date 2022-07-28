import React, {useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {AnimatePresence, motion} from "framer-motion";

const translateName = ['ru', 'kg', 'en']


const HeaderNav = ({style, translate, btn, activeBar}) => {
   const [visiblePopup, setVisiblePopup] = useState(false)
   const translateRef = useRef()
   const {t} = useTranslation()
   const changeLang = (event) => {
      i18n.changeLanguage(event.target.getAttribute('value'))
   }

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }

   const handleOutsideClick = (e) => {
      if (!e.path.includes(translateRef.current)) {
         setVisiblePopup(false)
      }
   }

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick)
   }, [])

   return (
      <>
         <nav className='nav' style={style}>
            <Link to="aboutUs" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-50} duration={500} className="nav__link">О нас</Link>
            <Link to="service" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-50}  duration={500} className="nav__link">{t("service")}</Link>
            <Link to="portfolio" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-50} duration={500} className="nav__link">Портфолио</Link>
            <Link to="comments" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-90} duration={500} className="nav__link">Отзывы</Link>
            <Link to="ourTeam" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-100} duration={500} className="nav__link">Наша команда</Link>
            <Link to="footer" onClick={() => activeBar(false)} spy={true} smooth={true} offset={-400}  duration={500} className="nav__link">Контакты</Link>
            <button className='header__contact' style={btn ? btn : {display: "none"}}>Свяжитесь с нами!</button>
         </nav>

         <div ref={translateRef} className='translate' style={translate} onClick={toggleVisiblePopup}>
            <div style={{textTransform: 'capitalize',}}>{i18n.language}</div>
            <AnimatePresence>
            {visiblePopup && (
               <motion.div
                  initial={{height:0}}
                  animate={{height: 'auto'}}
                  exit={{height: 0}}
                  transition={{duration: 0.4, ease: 'easeOut'}}
                  style={{overflow: 'hidden'}}
                  className='translate__popup'
               >
                  {translateName.filter((lang) => i18n.language !== lang)
                     .map((lang, index) => (
                        <div
                           key={index}
                           className='translate__item'
                           value={lang}
                           onClick={changeLang}
                        >{lang}
                        </div>
                     ))}
               </motion.div>
            )}
            </AnimatePresence>

            <FontAwesomeIcon className='translate__arrow' icon={faAngleDown}
                             style={visiblePopup ? {transform: 'rotate(180deg)'} : null}/>
         </div>

         <button className='header__contact'>Свяжитесь с нами!</button>
      </>
   );
};

export default HeaderNav;