import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
