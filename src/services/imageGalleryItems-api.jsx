import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19957123-092fe89d59c01359f45ab382b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchGalleryItems = ({ searchQuery, page }) => {
  return axios
    .get('', {
      params: { searchQuery, page },
    })
    .then(res => res.data.hits);
};

export { fetchGalleryItems };
