import React, {useState} from 'react';

import {stackTech} from "../../StackTech";
import {AnimatePresence, motion} from "framer-motion";
import './style.scss'


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

const StackTech = () => {
   const [technology, setTechnology] = useState({
      front: false,
      back: false,
      android: false,
      uxUi: false,
      production: false,
      pm: false,
   })

   const all = Object.values(technology)?.filter((item) => item).length

   return (
      <motion.section
         initial='hidden'
         whileInView='visible'
         viewport={{once: 1, amount: 0.2}} className='stack-tech'
      >
         <div className="container">
            <motion.h2 variants={blockAnimation} custom={1} className="title">Стек технологий</motion.h2>
            <motion.div variants={blockAnimation} custom={2} className='tech-filters'>
               <div className='filter'>
                  <input onClick={() => setTechnology({...technology, front: !technology.front})} type="checkbox"
                         className="custom-checkbox" id="Frontend" name="Frontend" value="front"/>
                  <label htmlFor="Frontend">Frontend</label>
               </div>

               <div className='filter'>
                  <input onClick={() => setTechnology({...technology, back: !technology.back})} type="checkbox"
                         className="custom-checkbox" id="Backend" name="Backend" value="back"/>
                  <label htmlFor="Backend">Backend</label>
               </div>

               <div className='filter'>
                  <input onClick={() => setTechnology({...technology, android: !technology.android})} type="checkbox"
                         className="custom-checkbox" id="Android" name="Android" value="android"/>
                  <label htmlFor="Android">Android</label>
               </div>

               <div className="filter">
                  <input onClick={() => setTechnology({...technology, uxUi: !technology.uxUi})} type="checkbox"
                         className="custom-checkbox" id="UX-UI" name="UX-UI" value="ux-ui"/>
                  <label htmlFor="UX-UI">UX-UI</label>
               </div>

               <div className="filter">
                  <input onClick={() => setTechnology({...technology, production: !technology.production})}
                         type="checkbox" className="custom-checkbox" id="Production" name="Production"
                         value="production"/>
                  <label htmlFor="Production">Production</label>
               </div>

               <div className="filter">
                  <input onClick={() => setTechnology({...technology, pm: !technology.pm})} type="checkbox"
                         className="custom-checkbox" id="PM" name="PM" value="pm"/>
                  <label htmlFor="PM">PM</label>
               </div>

            </motion.div>

            <motion.div variants={blockAnimation} custom={2} className="tech">
               <AnimatePresence initial={false} exitBeforeEnter={false}>
               {
                  stackTech.filter((item) => technology[item.type] || all === 0).map((tech, index) =>
                        <motion.div
                           key={index}
                           initial={{opacity: 0}}
                           animate={{opacity: 1}}
                           exit={{opacity: 0}}
                           className="tech__items"
                        >
                           <div className='tech__img'><img src={tech.icon} alt="html" style={{width: '100%', height: '100%'}}/></div>
                           <h3 className="tech__title">{tech.tech}</h3>
                        </motion.div>
                     )
               }
               </AnimatePresence>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default StackTech;