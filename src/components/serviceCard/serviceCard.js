import React from 'react';
import {motion} from "framer-motion";

import './style.scss'

const card = {
   hidden: {
      y: 20,
      opacity:0,
   },
   visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
         delay: custom * 0.3,
         duration: 0.2
      }
   })
}

const item = {
   hidden: { opacity: 0, scale: 0.8 },
   show: { opacity: 1, scale: 1, transition: 'easeOut', duration: 0.4 }
}

const ServiceCard = ({service, index}) => {
   return (
      <div  className='service_card'>
         <div className='service_card__img'>
            <img src={service?.icon} alt=""/>
         </div>

         <h3 className='service_card__title'>{service?.title}</h3>

         <p className='service_card__subtitle'>{service?.subtitle}</p>
      </div>
   );
};

export default ServiceCard;