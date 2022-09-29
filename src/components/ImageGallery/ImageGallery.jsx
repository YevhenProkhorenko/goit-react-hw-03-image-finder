import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'Styles/styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => {
        return (
          <ImageGalleryItem
            item={item}
            key={item.id}
            // src={webformatURL}
            // alt={tags}
            // largeImageURL={largeImageURL}
            onClick={onClick} ////Я перез просп передала метод до лішки, який приймає посилання на велику фотку й змінює в state на  значення
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default ImageGallery;
