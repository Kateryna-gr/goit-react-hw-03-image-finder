import { ImageGalleryItem } from './image-gallery-item';
import { Gallery, GalleryItem } from './image-gallery.styled';

export const ImageGallery = () => {
  return (
    <Gallery>
      <ul>
        <GalleryItem>
          <ImageGalleryItem />
        </GalleryItem>
      </ul>
    </Gallery>
  );
};
