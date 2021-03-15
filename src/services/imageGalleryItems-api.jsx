import axios from 'axios';

const fetchGalleryItems = () => {
  const key = '19957123-092fe89d59c01359f45ab382b';
  return axios
    .get(
      `https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

export default { fetchGalleryItems };
