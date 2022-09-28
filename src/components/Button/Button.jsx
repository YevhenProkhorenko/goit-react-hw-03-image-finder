import React from 'react';
import css from 'Styles/styles.module.css';

const Button = ({ text, onClick }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.Button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
