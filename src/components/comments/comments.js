import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination, Autoplay} from "swiper";

import 'swiper/css'
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';


import './style.scss'
import useMediaQuery from "../../helpers";

const text = ' Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений. Не следует, однакозабывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов участие в формировании систем массового участия. Равным образом дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.'

const Comments = () => {
   const isMobile = useMediaQuery("(max-width:550px)")

   return (
      <section className='comments'>
         <div className="comments__background" id='comments'>
            <h2 className="title">Отзывы</h2>
            <Swiper
               modules={[EffectCoverflow, Pagination, Autoplay]}
               effect={'coverflow'}
               loop={true}
               speed={1000}
               grabCursor={true}
               centeredSlides={true}
               pagination={{clickable: true}}
               autoplay={{delay: 10000}}

               breakpoints={{
                  0: {
                     slidesPerView: 1,
                     coverflowEffect: {
                        stretch: -80
                     },
                     spaceBetween: 10
                  },
                  768: {
                     slidesPerView: 1.6,
                     spaceBetween: 80,
                  },
                  950: {
                     spaceBetween: 130,
                     slidesPerView: 2,
                  }
               }}

               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 1,
                  slideShadows: false
               }}
            >

               {Array.from(Array(5))
                  .map((_, index) =>
                     <SwiperSlide key={index}>
                        <div className="comments__card">
                           <h3 className="card-title">Мээрим Молдокматова</h3>
                           <p className="card-subtitle">Представитель клиники MEDI</p>
                           <p className="card-paragraph">
                              {isMobile
                                 ? text.length > 220 ?  text.slice(0, 220) + '...' : text
                                 : text
                              }
                           </p>
                           <div className="card-img">
                              <img
                                 src="data:image/jpeg;base64,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"
                                 alt="" width={'100%'} height={'100%'} style={{borderRadius: '50%'}}/>
                           </div>
                        </div>
                     </SwiperSlide>
                  )}

            </Swiper>
         </div>
      </section>
   );
};

export default Comments;