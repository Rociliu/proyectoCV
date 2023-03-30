import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';

const Education = ({education}) => (
  <div className={styles.Education}>

    <div className={styles.TitleEducation}>
      <h2>FORMACIÓN</h2>
    </div>

    <div className={styles.ContainerEducation}>
      {education.map((item)=> {
        return (
          <div key={JSON.stringify(item)}>
            <p className={styles.Name}>📕 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.date}</p>

          </div>
        );
      })}
    </div>

  </div>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
