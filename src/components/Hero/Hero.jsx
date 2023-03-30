import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Hero.module.css';
import styles from './Hero.module.css'


const Hero = ({hero}) => (
  <div className={styles.Hero}>
    
    <div className={styles.TitleHero}>
      <h1>{hero.name} {hero.adress}</h1>
    </div>
      
        
    <div className={styles.ContainerHero}>
      <p> 🗺️ {hero.city}</p> 
      <p> 📱 {hero.phone}</p>
      <p> 📧 <a href={"mailto:" + hero.email}>mrrosa@gmail.com</a></p>
      <p> 👉🏼 <a href={hero.gitHub}>GitHub</a></p>
    </div> 
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
