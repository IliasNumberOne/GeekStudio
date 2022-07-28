import React from 'react';
import './style.scss'
import ServiceCard from "../serviceCard/serviceCard";
import {motion} from "framer-motion";

import {mobile, web_dev, it_support, it_consult, web_design} from "../../assets";

const services = [
{title: 'Мобильные приложения', subtitle: 'Разработка мобильных приложений для платформ iOS и Android', icon: mobile },
{title: 'Сайты под ключ', subtitle: 'Разработка мобильных приложений для платформ iOS и Android', icon: web_dev },
{title: 'Дизайн сайтов и приложений', subtitle: 'Разработка  уникального дизайна для вашего сайта или приложения', icon: web_design },
{title: 'Техническое сопровождение', subtitle: 'Разработка мобильных приложений для платформ iOS и Android ', icon: it_support },
{title: 'IT консалтинг', subtitle: 'Разработка мобильных приложений для платформ iOS и Android ', icon: it_consult },
]

const blockAnimation = {
   hidden: {
      y: 100,
      opacity: 0,
   },
   visible: custom => ({
      y: 1,
      opacity: 1,
      transition:{
         duration: 0.7,
         delay: custom * 0.3,
         ease: 'easeOut'
      }
   })
}

const OurService = () => {
   return (
      <motion.section
         initial='hidden'
         whileInView='visible'
         viewport={{amount: 0.2, once: 1}}
         className='our-service' id='service'

      >
         <div className="container">
            <motion.h2 variants={blockAnimation} custom={1}  className='title'>Наши услуги</motion.h2>
            <motion.div variants={blockAnimation} custom={2} className='service-box'>
               {services?.map((service, i) =>
                  <ServiceCard  key={i} service={service} index={i}/>
               )}
            </motion.div>
         </div>
      </motion.section>
   );
};

export default OurService;