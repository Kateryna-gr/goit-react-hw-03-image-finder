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
    isLoading: false,
  };

  onInput = value => {
    if (value && this.state.query !== value) {
      this.setState({ query: value });
      this.onSearch();
    }
  };

  async onSearch() {
    this.setState({ isLoading: true });
    try {
      const response = await fetchImages(this.state.query, 1);
      this.setState({ images: response, page: 1 });
    } catch (error) {
      this.setState({ error, page: 0 });
    } finally {
      this.setState({ isLoading: false });
    }
    console.log(this.state.images);
  }

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
    this.onLoadMore();
  };

  async onLoadMore() {
    try {
      const response = await fetchImages(this.state.query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response],
      }));
    } catch (error) {
      this.setState({ error, page: 0 });
    }
  }

  render() {
    const { images, page, isLoading } = this.state;
    return (
      <Container>
        <SearchBar searchImages={this.onInput} />

        {images.length ? (
          <ImageGallery images={images} />
        ) : (
          <NoImages>No images</NoImages>
        )}
        {isLoading && <Loader />}
        {page > 0 && <Button loadMore={this.loadMoreImages} />}
      </Container>
    );
  }
}
