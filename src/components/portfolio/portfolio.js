import React from 'react';
import {tezsat} from "../../assets";
import {Swiper, SwiperSlide} from "swiper/react";

import {EffectCoverflow, Pagination, Autoplay} from "swiper";

import 'swiper/css'
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';


import './style.scss'

const Portfolio = () => {
   return (
      <section className='portfolio' id='portfolio'>
         <div className="container">
            <h2 className="title">Портфолио</h2>
         </div>

         <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect={'coverflow'}
            loop={true}
            speed={1000}
            pagination={{clickable: true}}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{delay: 10000}}

            breakpoints={{
               0: {
                  slidesPerView: 1,
                  coverflowEffect: {
                     stretch: -50
                  },
               },
               768: {
                  slidesPerView: 1.3,
                  spaceBetween: 60,
               },
               950: {
                  spaceBetween: 80,
                  slidesPerView: 1.6,
               }
            }}

         >
            <SwiperSlide>
               <div className='portfolio-card'>
                  <div className='card-text'>
                     <h3 className="card-text__title">Tez Sat</h3>
                     <p className="card-text__subtitle">Сервис позволяет подавать бесплатные объявления о купле,
                        продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир,
                        электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                     </p>
                     <a href="" className='card-text__link'>Посмотреть проект</a>
                  </div>

                  <div className='card-img'>
                     <img src={tezsat} alt="" style={{width: '100%', height: '100%'}}/>
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='portfolio-card'>
                  <div className='card-text'>
                     <h3 className="card-text__title">Tez Sat</h3>
                     <p className="card-text__subtitle">Сервис позволяет подавать бесплатные объявления о купле,
                        продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир,
                        электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                     </p>
                     <a href="" className='card-text__link'>Посмотреть проект</a>
                  </div>

                  <div className='card-img'>
                     <img src={tezsat} alt="" style={{width: '100%', height: '100%'}}/>
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='portfolio-card'>
                  <div className='card-text'>
                     <h3 className="card-text__title">Tez Sat</h3>
                     <p className="card-text__subtitle">Сервис позволяет подавать бесплатные объявления о купле,
                        продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир,
                        электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                     </p>
                     <a href="" className='card-text__link'>Посмотреть проект</a>
                  </div>

                  <div className='card-img'>
                     <img src={tezsat} alt="" style={{width: '100%', height: '100%'}}/>
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='portfolio-card'>
                  <div className='card-text'>
                     <h3 className="card-text__title">Tez Sat</h3>
                     <p className="card-text__subtitle">Сервис позволяет подавать бесплатные объявления о купле,
                        продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир,
                        электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                     </p>
                     <a href="" className='card-text__link'>Посмотреть проект</a>
                  </div>

                  <div className='card-img'>
                     <img src={tezsat} alt="" style={{width: '100%', height: '100%'}}/>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Portfolio;