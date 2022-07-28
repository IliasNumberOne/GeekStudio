import React from 'react';
import {about} from "../../assets";

import './style.scss'


const AboutUs = () => {
   return (
      <section className='about-us' id='aboutUs'>
         <div className="container">
            <h2 className="title">О нас</h2>
            <div className="about-us__inner">
               <p className='about-us__text'>
                  На сегодняшний день команда GeekStudio состоит из более 25 специалистов разных областей. Сюда входят не только программисты, но и дизайнеры, а также проектные и продуктовые менеджеры.
                  Выбирая GeekStudio, вы можете быть уверены, что работа будет выполнена в срок и на должном уровне.
               </p>
               <div className="about-us__img">
                  <img src={about} alt="" style={{width: '100%', height: '100%'}}/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUs;