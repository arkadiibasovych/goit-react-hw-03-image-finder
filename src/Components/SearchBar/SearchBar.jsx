import { useState } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setsearchQuery] = useState('');

  const handleChange = e => {
    setsearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      toast.error('Enter your request');
      return;
    }
    onSubmit(searchQuery);
    setsearchQuery('');
  };

  return (
    <header className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          className={s.form_input}
          type="text"
          value={searchQuery}
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
