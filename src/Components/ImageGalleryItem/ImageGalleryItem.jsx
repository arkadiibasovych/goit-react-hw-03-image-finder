import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery, onClick }) => {
  return (
    <>
      {gallery.map(img => (
        <li className={s.galleryItem} key={img.id} onClick={onClick}>
          <img
            src={img.webformatURL}
            alt=""
            className={s.image}
            data-image={img.largeImageURL}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
