import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={s.gallery}>
      {<ImageGalleryItem gallery={gallery} onClick={onClick} />}
    </ul>
  );
};

export default ImageGallery;
