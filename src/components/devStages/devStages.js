import React, {useEffect, useRef} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import useMediaQuery from "../../helpers";

import './style.scss'


//<--Animation
const svgVariants = {
   hidden: {
      opacity: 0,
      width: 0,
   },
   visible: i => ({
      opacity: 1,
      width: '87%',
      transition: {
         delay: (i + 1) * 0.55,
         duration: 0.7
      }
   })
}
const svgVariantsFirst = {
   hidden: {
      width: 0,
   },
   visible: i => ({
      width: '63%',
      transition: {
         // delay: i * 0.55,
         duration: 0.7
      }
   })
}
const svgVariantsCircle = {
   hidden: {
      opacity: 0,
   },
   visible: i => ({
      opacity: 1,
      transition: {
         delay: (i + 0.8) * 0.57,
         duration: 0.65
      }
   })
}
const elementVariants = {
   hidden: {
      opacity: 0
   },
   visible: i => ({
      opacity: 1,
      transition: {
         delay: (i + 0.8) * 0.6,
         duration: 0.69
      }
   })
}

const line = {
   hidden: {
      opacity: 0,
      height: 0
   },
   visible: {
      opacity: 1,
      height: "100%",
      transition: {
         delay: 0.5,
         duration: 0.8
      }
   }
}
const circle = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 1
      }
   }
}
const text = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 1.5
      }
   }
}

//<--stages
const stages = [
   {
      title: 'Оценка проекта',
      subtitle: 'Здесь формируются пожелания и требования заказчика для написания ТЗ. Далее планируются этапы работы, сроки и стоимость согласно передовым стандартам разработки ПО'
   },
   {
      title: 'Индивидуальный дизайн',
      subtitle: 'Разрабатывается дизайн-концепция Вашего будущего сайта или мобильного приложения с созданием индивидуального стиля. Формируется пользовательский опыт и интерфейс и утверждается заказчиком. '
   },
   {
      title: 'Разработка и тестирование',
      subtitle: 'Реализация проекта короткими итерациями в ходе которых, клиент будет видеть результаты и прогресс проекта. Такой подход очень удобен, что способствует эффективной разработке и быстрому сбору обратной связи для внесения правок.'
   },
   {
      title: 'Готовый продукт',
      subtitle: 'Сервис позволяет подавать бесплатные объявления о купле, продаже, аренде, обмене как б/у, так и новых товаров и услуг. '
   },
]


const DevStages = () => {
   const isMobile = useMediaQuery("(max-width:768px)")
   const controls = useAnimation()
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("visible");
      }
   }, [controls, inView]);

   return (
      <section className='dev-stages'>
         <div className="container">
            <h2  className="title">Этапы разработки</h2>

            {isMobile
               ? <div className="stages_box_mob">
                  {stages?.map((stage, index) =>
                     <div className='stage-item' style={index % 2 !== 0 ? {justifyContent: "right"} : null}>
                        <motion.div
                           initial='hidden'
                           whileInView={'visible'}
                           viewport={{once: 1}}
                           variants={text}
                           className='stage-item__text'
                        >
                           <div className='stage__num'>{index + 1}</div>
                           <h3 className='stage__title'>{stage?.title}</h3>
                           <p className="stage__subtitle">{stage?.subtitle}</p>
                        </motion.div>
                        <div className='stage-item__svg'>
                           <motion.svg
                              initial='hidden'
                              whileInView={'visible'}
                              viewport={{once: 1}}
                              variants={line}
                              className='green-line' width="1" viewBox="0 0 159 1"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <motion.rect height="1" rx="0.5" fill="#00F222"/>
                           </motion.svg>

                           <motion.svg
                              initial='hidden'
                              whileInView={'visible'}
                              viewport={{once: 1}}
                              variants={circle}
                              className='circle'
                              viewBox="0 0 26 28" fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <motion.path
                                 d="M12.8879 7.97952C15.8379 7.97952 18.1601 10.4124 18.1608 13.5038C18.1616 16.5952 15.8406 19.0281 12.8907 19.0281C9.9407 19.0281 7.61853 16.5952 7.61777 13.5038C7.61701 10.4124 9.93799 7.97952 12.8879 7.97952ZM12.886 0C5.76495 0 0.00148751 6.04809 0.00332121 13.5038C0.00515658 20.9662 5.77802 27.0076 12.8926 27.0076C20.0072 27.0076 25.7771 20.9595 25.7753 13.5038C25.7735 6.04809 20.0006 0 12.886 0Z"
                                 fill="#00F222"/>
                           </motion.svg>
                        </div>
                     </div>
                  )}
               </div>

               : <div className="stages_box">
                  <div className="stages__items">
                     {stages?.map((stage, index) =>
                        <div className="stage" key={index}>
                           <motion.svg
                              variants={svgVariantsCircle}
                              ref={ref}
                              animate={controls}
                              initial='hidden'
                              custom={index}
                              className='circle'
                              viewBox="0 0 26 28" fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <motion.path
                                 d="M12.8879 7.97952C15.8379 7.97952 18.1601 10.4124 18.1608 13.5038C18.1616 16.5952 15.8406 19.0281 12.8907 19.0281C9.9407 19.0281 7.61853 16.5952 7.61777 13.5038C7.61701 10.4124 9.93799 7.97952 12.8879 7.97952ZM12.886 0C5.76495 0 0.00148751 6.04809 0.00332121 13.5038C0.00515658 20.9662 5.77802 27.0076 12.8926 27.0076C20.0072 27.0076 25.7771 20.9595 25.7753 13.5038C25.7735 6.04809 20.0006 0 12.886 0Z"
                                 fill="#00F222"/>
                           </motion.svg>

                           <motion.div
                              variants={elementVariants}
                              ref={ref}
                              animate={controls}
                              initial='hidden'
                              custom={index}
                           >
                              <div className='stage__num'>{index + 1}</div>
                              <h3 className='stage__title'>{stage?.title}</h3>
                              <p className="stage__subtitle">{stage?.subtitle}</p>
                           </motion.div>


                           <motion.svg
                              variants={svgVariants}
                              initial='hidden'
                              ref={ref}
                              animate={controls}
                              custom={index}
                              className='last_line' height="1" viewBox="0 0 159 1"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <motion.rect height="1" rx="0.5" fill="#00F222"/>
                           </motion.svg>

                           {index === 0
                              ? <motion.svg
                                 variants={svgVariantsFirst}
                                 initial='hidden'
                                 ref={ref}
                                 animate={controls}
                                 custom={index}
                                 className='last_line' height="1" viewBox="0 0 159 1" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" style={{left: '-28%',}}
                              >
                                 <motion.rect height="1" rx="0.5" fill="#00F222"/>
                              </motion.svg>
                              : null
                           }
                        </div>
                     )}
                  </div>
               </div>
            }

         </div>
      </section>
   );
};

export default DevStages;