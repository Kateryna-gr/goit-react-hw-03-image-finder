import { Component } from 'react';
import { fetchImages } from 'api';
import { ImageGallery } from './image-gallery/image-gallery';
import { SearchBar } from './search-bar/search-bar';
import { Container } from './container.styled';
import { Button } from 'components/button/button';
import { Loader } from 'components/loader/loader';
import { NoImages } from './image-gallery/image-gallery.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 0,
    perPage: 12,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    )
      this.onSearchImages();
  }

  onSearch = value => {
    if (value && this.state.query !== value) {
      this.setState({ query: value, images: [], page: 1, isLoading: true });
    }
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  async onSearchImages() {
    if (!this.state.query || !this.state.page) {
      return;
    }
    try {
      const response = await fetchImages(this.state.query, this.state.page);
      if (this.state.page > response.totalHits / this.state.perPage) {
        this.setState({ page: 0 });
      }
      if (response.totalHits === 0) {
        this.setState({ page: 0 });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
        }));
      }
    } catch (error) {
      this.setState({ page: 0 });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, page, isLoading } = this.state;
    return (
      <Container>
        <SearchBar searchImages={this.onSearch} />

        {images.length ? (
          <ImageGallery images={images} />
        ) : (
          <NoImages>No images</NoImages>
        )}
        {isLoading && <Loader />}
        {page > 0 && !isLoading && <Button loadMore={this.loadMoreImages} />}
      </Container>
    );
  }
}
