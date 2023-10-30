import * as basicLightbox from 'basiclightbox';

const modal = basicLightbox.create(`
    <div class="overlay">
        <div class="modal">
            <img src="" alt="" />
        </div>
    </div>
`);

export const Modal = () => {
  return modal.show();
  //   return <div>Modal</div>;
};
