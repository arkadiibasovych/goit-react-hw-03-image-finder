import s from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button} type="button">
      Load more
    </button>
  );
};

export default ButtonLoadMore;
