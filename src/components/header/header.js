import React, {useEffect, useRef, useState} from 'react';
import {geekLogo} from "../../assets";
import './style.scss'
import HeaderNav from "../headerNav/headerNav";
import {Link} from 'react-scroll'

const Header = () => {
   const [activeBar, setActiveBar] = useState(false)
   const menuRef = useRef()

   if (activeBar === true){
      document.body.style.overflow = 'hidden'
   } else {
      document.body.style.overflow = 'visible'
   }

   const handleOutsideClick = (e) => {
      if (!e.path.includes(menuRef.current)) {
         setActiveBar(false)
      }
   }

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick)
   }, [])

   return (
      <section className='header'  ref={menuRef}>
         <div className="container">
            <div className='header__inner'>
               <Link to='/' spy={true} smooth={true} duration={500} href="" className='header__logo'>
                  <img src={geekLogo} alt="" width='100%' height='100%'/>
               </Link>

                  <HeaderNav activeBar={setActiveBar} />
                  <div className="hamburger-lines" onClick={() => setActiveBar(!activeBar)}>
                     <span className="line line1" style={activeBar ? {transform: 'rotate(45deg)'} : null}> </span>
                     <span className="line line2" style={activeBar ? {transform: 'scaleY(0)'} : null}> </span>
                     <span className="line line3" style={activeBar ? {transform: 'rotate(-45deg)'} : null}> </span>
                  </div>

            </div>
         </div>

            <div className="menu-items" onClick={() => setActiveBar(!activeBar)} style={activeBar ? {transform: 'translateX(0)'} : null}>
               <HeaderNav activeBar={setActiveBar} btn={{display: 'block'}} style={{display: 'flex', flexDirection: 'column'}} translate={{display:'none'}}/>
            </div>


      </section>
   );
};

export default Header;