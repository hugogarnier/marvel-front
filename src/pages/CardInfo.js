import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import comicsCharactAPI from "../api/comicsCharactAPI";

const CardInfo = ({ token }) => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const character = await comicsCharactAPI(id, token);
      setData(character);
      setIsLoading(false);
    };
    getData();
  }, [id, token]);
  return (
    <div className='card-info-container'>
      <div className='container card-info'>
        <div className='card card-image'>
          <img
            src={`${location.state.thumbnail.path}.${location.state.thumbnail.extension}`}
            alt={location.state.name}
          />
        </div>
        <span className='card-name-info'>{location.state.name}</span>
      </div>
      {isLoading ? (
        <p className='comics container'>Loading ...</p>
      ) : (
        <div className='comics container'>
          <div className='description'>{location.state.description}</div>

          <div className='card-comic-container'>
            {data.comics.map((comic, index) => {
              return (
                <div className='comic-container' key={index}>
                  <h3>{comic.title}</h3>
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
