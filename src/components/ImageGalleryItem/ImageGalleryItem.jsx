import React from 'react';
import PropTypes from 'prop-types';
import css from 'Styles/styles.module.css';

export const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => onClick(item.largeImageURL)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={item.webformatURL}
        alt={item.tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
