import React from 'react';
import './services.scss';


function Services() {
  return (
    <section className="services">
      <h1>We simplify your digital life</h1>
      <div className="container services__container">        
        <div className="services__card">
            <h2 className='services__title'>Register for free</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Register</button>
        </div>
        <div className="services__card">
            <h2 className='services__title'>Apply for training</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Apply now</button>
        </div>
        <div className="services__card">
            <h2 className='services__title'>Order your website</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Order</button>
        </div>
        <div className="services__card">
            <h2 className='services__title'>Visit our pages</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Visit</button>
        </div>
        <div className="services__card">
            <h2 className='services__title'>Follow us</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Follow</button>
        </div>
        <div className="services__card">
            <h2 className='services__title'>Simplify your life</h2>
            <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim laudantium culpa consequuntur ratione commodi consectetur, iure eveniet quos voluptatum.</p>
            <button className='services__btn'>Learn more</button>
        </div>
      </div>            
       
    </section>
  )
}

export default Services