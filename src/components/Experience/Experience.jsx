import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';

const Experience = ({experience}) => (
  <div className={styles.Experience}>
    
    <div className={styles.TitleExperience}>
      <h2>EXPERIENCIA</h2>
    </div>

    <div className={styles.ContainerExperience}>
      {experience.map((item)=> {
        return ( 
        <div key={JSON.stringify(item)}>
          <p className={styles.Name}> {item.name} </p>
          <p className={styles.Where}> {item.where} </p>
          <p> {item.date} </p>
          <p className={styles.Description}> {item.description} </p>
          <hr/>
        </div>
      );
      })}
    </div>

  </div>
);

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
