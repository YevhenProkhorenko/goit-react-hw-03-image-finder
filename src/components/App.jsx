import React, { Component } from 'react';
import API from './API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    loading: false,
    modalOpen: false,
    selectedImage: null,
  };

  componentDidMount() {
    this.setState({ query: 'yellow flower' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchIMG();
    }
  }

  changeQuery = query => {
    this.setState({ query, page: 1, pictures: [] });
  };

  fetchIMG = () => {
    const { page, query } = this.state;

    this.setState({ loading: true });
    API(query, page)
      .then(data => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data],
          page: prevState.page + 1,
        }));
        console.log(this.state.pictures);
      })
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      selectedImage: null,
    }));
  };

  openSelectedImage = largeImageURL => {
    this.toggleModal();
    this.setState({ selectedImage: largeImageURL });
  };

  render() {
    const { pictures, loading, modalOpen, selectedImage } = this.state;
    const { changeQuery, fetchIMG, toggleModal, openSelectedImage } = this;

    const isImages = Boolean(pictures.length);

    return (
      <div>
        <Searchbar onSubmit={changeQuery} />
        {isImages && (
          <ImageGallery items={pictures} onClick={openSelectedImage} />
        )}

        {isImages && <Button onClick={fetchIMG} text={'Load more'} />}

        {modalOpen && (
          <Modal onToggle={toggleModal} largeImageURL={selectedImage} />
        )}
        {loading && <Loader />}
      </div>
    );
  }
}
export default App;
