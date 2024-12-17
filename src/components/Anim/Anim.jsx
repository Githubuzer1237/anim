import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Anim.css';

const Anim = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000 ,
      once: false,

    }); 
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="800" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="1000" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="1200" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
          <div className="hero__wrapper" >  
            <div data-aos="flip-up" data-aos-delay="200" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="400" className="hero__box"><h1>RASIM LOX</h1></div>
            <div data-aos="flip-up" data-aos-delay="600" className="hero__box"><h1>RASIM LOX</h1></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Anim;
