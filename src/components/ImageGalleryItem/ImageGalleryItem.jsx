import React from 'react';
import PropTypes from 'prop-types';
import css from 'Styles/styles.module.css';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL || largeImageURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
