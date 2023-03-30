import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = ({hero}) => (
  <div className={styles.About}>
    <div className={styles.TitleAbout}>
      <h2>SOBRE MI</h2>
    </div>

    <div className={styles.ContainerAbout}>
      {hero.aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p> {item.info} </p>
          </div>
        );

      })}
    </div>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
