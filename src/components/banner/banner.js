import React from 'react';
import Lottie from "lottie-react";
import banner_lottie from '../../assets/lottie/banner_lottie.json'
import pigeon from '../../assets/lottie/pigeon.json'
import './style.scss'
import Header from "../header/header";

const Banner = () => {
   return (
      <>
         <Header/>
         <section className='banner' id='/'>
            <div className="container">
               <div className="banner__inner">
                  <div className='banner__text'>
                     <h1 className='main-title'>Разработка сайтов и мобильных приложений для вашего бизнеса</h1>
                     <p className='subtitle'>Мы поможем Вашему бизнесу приносить Вам больше прибыли, работать не только
                        в рамках Кыргызстана, но и за рубежом.</p>
                     <button className="btn-more">Узнать больше</button>
                  </div>
                  <div className="banner__lottie">
                     <Lottie animationData={banner_lottie} loop={true}/>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Banner;