import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Loader from './Components/Loader';
import ButtonLoadMore from './Components/Button/Button';
import ModalImage from './Components/Modal';
import { fetchGalleryItems } from './services/imageGalleryItems-api';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState('');
  const [largeImage, setLargetImages] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);

    return fetchGalleryItems({ page, searchQuery })
      .then(hits => setImages([...images, ...hits]))
      .then(() => scrollTo())
      .catch(error => toast.error('Error'))
      .finally(() => setIsLoading(false));
  }, [page, searchQuery]);

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  const handleSubmit = searchQuery => {
    setsearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleClickNextPage = () => {
    setPage(page + 1);
  };

  const handleClickImg = e => {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
      setLargetImages(e.target.dataset.image);
    }
  };

  const toggleModal = () => {
    setLargetImages('');
  };

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery gallery={images} onClick={handleClickImg} />
      {isLoading && <Loader />}
      {images.length > 0 && <ButtonLoadMore onClick={handleClickNextPage} />}

      {largeImage && (
        <ModalImage onClose={toggleModal}>
          <img src={largeImage} alt="modal" />
        </ModalImage>
      )}
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
