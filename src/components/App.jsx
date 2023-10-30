import { ImageGallery } from './image-gallery/image-gallery';
import { SearchBar } from './search-bar/search-bar';
// import { Loader } from './loader/loader';
import { Button } from './button/button';
import { Modal } from './modal/modal';
import { Container } from './container.styled';

export const App = () => {
  return (
    <Container>
      <SearchBar />
      <ImageGallery />
      {/* <Loader /> */}
      <Button />
      <Modal />
    </Container>
  );
};
