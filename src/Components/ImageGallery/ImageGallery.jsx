import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={s.gallery}>
      {<ImageGalleryItem gallery={gallery} onClick={onClick} />}
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
