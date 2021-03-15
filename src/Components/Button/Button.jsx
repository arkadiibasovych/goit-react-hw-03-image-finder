import PropTypes from 'prop-types';
import s from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button} type="button">
      Load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonLoadMore;
