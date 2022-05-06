import React from 'react';
import {useForm} from 'react-hook-form';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {Motion} from "framer-motion";

import marker from '../../images/marker.svg';
import Leaflet from "leaflet";
import './contact.scss';

function Contact() {
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm({mode: "onBlur",});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  const position = [42.857042271824646, 74.60227472349818];
  const markerIcon = Leaflet.icon({
    iconUrl: marker,
    iconAnchor: position,
    iconSize: [55, 55],
  });

  return (
    <section className="contact">            

        <div className="container contact__container">          
          <div className="contact__col">
          <div className="contact__social">
          <h2>Find me through social networks</h2>
          <ul className="contact__links">
              <li>
                <a href="https://www.facebook.com/jalynu" target="_blank" rel='noopener, noreferer'><FaFacebook className='contact__icon'/></a>
              </li>
              <li>
                <a href="https://github.com/jalynkyrgyz" target="_blank" rel='noopener, noreferer'><FaGithub className='contact__icon' /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jalyn-kyrgyz-uulu-1ba915212/" target="_blank" rel='noopener, noreferer'><FaLinkedinIn className='contact__icon'/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/jalynkyrgyz/" target="_blank" rel='noopener, noreferer'><FaInstagram className='contact__icon'/></a>
              </li>
          </ul>
        </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Send me messages</h2>
              <label>
                Your Name
                <input placeholder='John Doe' {...register("name", {
                  required: "The name must be written!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 symbols!",
                  }
                })}/>
              </label>
              <div className="contacts__error">{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}               
              </div>
              <label>
                Your Email
                <input placeholder='johndoe@test.com' {...register("email", {
                  required: "This part must be written!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Please put your correct email!"
                  }
                })} />
              </label>
              <div className="contacts__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}  
              </div>
              <label>
                Your Message
                <textarea
                {...register("msg", {
                  maxLength:{
                    value: 10,
                    message: "Maximum 10 symbols",
                  },
                })}></textarea>
              </label>
              <div className="contacts__error">
              {errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>} 
              </div>
              <input type="submit" disabled={!isValid}/>
            </form>
          </div>
          <div className="contact__col">
          <MapContainer center={position} zoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={markerIcon}>
                  <Popup>
                    Digital Studio of Jalyn Kyrgyz
                  </Popup>
                </Marker>
          </MapContainer>
          </div>
        </div>
    </section>
  )
}

export default Contact