import { useNavigate } from "react-router-dom";

const Card = ({ charac, handleFav, index, fav }) => {
  const navigate = useNavigate();
  const handleInfoCharacter = () => {
    navigate(`/character/${charac._id}`, { state: charac });
  };
  return (
    <>
      {charac?._id && (
        <div className='card'>
          <img
            onClick={handleInfoCharacter}
            src={`${charac.thumbnail.path}.${charac.thumbnail.extension}`}
            alt={charac.name}
          />
          <span className='card-name'>{charac.name}</span>
          <svg
            onClick={() => handleFav(index)}
            className={fav ? "fav fill" : "fav outlined"}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z' />
          </svg>
        </div>
      )}
    </>
  );
};

export default Card;
