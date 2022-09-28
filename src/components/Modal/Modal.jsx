import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from 'Styles/styles.module.css';

const modalRoot = document.getElementById('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = evt => {
    console.log('asd2');
    if (evt.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const { closeOnClick } = this;
    return createPortal(
      <div className={css.Overlay} onClick={closeOnClick}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
