import { Component, Fragment } from 'react';
import { ItemImage } from './image-gallery.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class GalleryItemImage extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { small, large, alt } = this.props;
    return (
      <Fragment>
        <ItemImage onClick={this.openModal} src={small} alt={alt} />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <div className="overlay">
            <div className="modal">
              <img src={large} alt={alt} />
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
