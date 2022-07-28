import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectCoverflow, Pagination} from "swiper";

import {arrowLeft, sadyr} from "../../assets";
import 'swiper/css'
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';

import './style.scss'

const OurTeam = () => {


   return (
      <section className='our-team'>
         <div className="container">
            <h2 className="title"  id='ourTeam'>Команда</h2>
            <div className="swiper-inner">
               <Swiper
                  modules={[Navigation, EffectCoverflow, Pagination]}
                  speed={1000}
                  grabCursor={true}
                  effect='coverflow'
                  loop={true}
                  pagination={{clickable: true}}
                  centeredSlides={true}
                  navigation={ {
                     prevEl: '.arrow.left',
                     nextEl: '.arrow.right',
                  }}
                  breakpoints={{
                     0: {
                       slidesPerView: 1.4,
                        spaceBetween: 50,
                        coverflowEffect: {
                           stretch: -10
                        },
                     },
                     450: {
                        slidesPerView: 1.9,
                        spaceBetween: 40
                     },
                     768: {
                       slidesPerView: 1.9,
                        spaceBetween: 100
                     },
                     970: {
                        spaceBetween:100,
                        slidesPerView: 2.8,
                        coverflowEffect:{
                           stretch: 50
                        }
                     }
                  }}

                  coverflowEffect={{
                     rotate: 5,
                     stretch: 0,
                     depth: 200,
                     modifier: 1,
                     slideShadows: true
                  }}
               >
                  {Array.from(Array(9))
                     .map((_, index) =>
                        <SwiperSlide key={index}>
                           <div className="team-card"
                                style={{backgroundImage: ` linear-gradient(180.05deg, rgba(0, 0, 0, 0) 24.39%, rgba(0, 0, 0, 0.81) 94.74%), url('${sadyr}')`}}>
                              <h3 className='team-card__title'>Илья Фазылбаев</h3>
                              <p className="team-card__subtitle">Teamlead команды разработки</p>
                           </div>
                        </SwiperSlide>
                     )}
               </Swiper>
               <div className='arrow left'>
                  <img src={arrowLeft} alt=""/>
               </div>
               <div className='arrow right'>
                  <img src={arrowLeft} alt="" style={{transform: 'rotate(180deg)'}}/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurTeam;

