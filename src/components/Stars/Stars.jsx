import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.css';
import Star from '../Star/Star';

const Stars = ({ count = 0 }) => {

  const rednerStars = typeof count === 'number' && count > 0 && count < 6
    ? (
      <div className={styles.wrapper}>
        {new Array(count).fill(0).map((item, idx) => (
          <div key={idx}>
            <Star />
          </div>
        ))}
      </div>
    ) : null;

  return rednerStars;
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Stars;
