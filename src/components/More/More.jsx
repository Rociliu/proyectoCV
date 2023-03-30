import React from 'react';
import PropTypes from 'prop-types';
import styles from './More.module.css';

const More = ({languages, habilities}) => (
  <div className={styles.More}>
    <div className={styles.TitleMore}>
      <h2>IDIOMAS</h2>
    </div>

    <div className={styles.ContainerMore}>
      {languages.map((item) => {
        return(
          <div key={JSON.stringify(item)}>
            <p className={styles.Languages}>{item.language}:</p>
            <p>{item.level}</p>
            <br/>
          </div>)
          }
        )
      }
    </div>

    <div className={styles.TitleMore}>
      <h2>SOFT SKILLS</h2>
    </div>

    <div className={styles.ContainerMore}>
      {habilities.map((item) => {
        return(
          <div key={(item)}>
              <p>✅{item}</p>  
          </div>
        )
      })}
    </div>
  </div>
);

More.propTypes = {};

More.defaultProps = {};

export default More;
