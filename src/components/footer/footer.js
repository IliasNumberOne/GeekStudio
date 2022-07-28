import React from 'react';
import {geekLogo, linkedin, faceBook, instagram} from "../../assets";

import './style.scss'

const Footer = () => {
   return (
      <footer className='footer' id='footer'>
         <div className="container">
            <div className="footer__inner">
               <div className="footer__text">
                  <div className='footer__logo'><img src={geekLogo} alt="" style={{width: '100%', height: '100%'}}/></div>
                   <p>Сервис позволяет подавать бесплатные объявления с купле, продаже, аренде, обмене как б/у, так  и новых товаров и услуг.</p>
                  <div className="footer__social">
                     <a href="https://www.linkedin.com/company/82643463">
                        <img src={linkedin} alt="" width={24} height={24}/>
                     </a>
                     <a href="https://www.facebook.com/geekstudiokg">
                        <img src={faceBook} alt="" width={24} height={24}/>
                     </a>
                     <a href="https://www.instagram.com/geek.studio/">
                        <img src={instagram} alt="" width={24} height={24}/>
                     </a>
                  </div>
               </div>
               <div className='contact-inner email'>
                  <div className="number">
                     <h3>Телефон</h3>
                     <a>(+996)770 34 35 82</a>
                     <a>(+996)550 34 35 82</a>
                     <a>(+996)554 69 40 06</a>
                  </div>
                  <div className="email">
                     <h3>Электронная почта</h3>
                     <a href="">supuevchyngyz2000@gmail.com</a>
                  </div>
               </div>
               <div className='contact-inner'>
                  <div className="address">
                     <h3>Адрес</h3>
                     <a href="" style={{letterSpacing: '1px', wordBreak: 'break-word', lineHeight: 1.5}}>г.Бишкек ул.Гоголя 28, БЦ "Гоголь" 4-этаж </a>
                  </div>
                  <div className="git">
                     <h3>GitHub/GitLab</h3>
                     <a href="">https://mypizza.kg/</a>
                  </div>
               </div>

            </div>
         </div>
      </footer>
   );
};

export default Footer;