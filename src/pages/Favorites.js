import { useEffect, useState } from "react";
import favoriteAPI from "../api/favoriteAPI";
import Card from "../components/Card";
import CardComic from "../components/CardComic";

const Favorites = ({ token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const favorites = await favoriteAPI(token);
      setData(favorites);
      setIsLoading(false);
    };
    getData();
  }, [token]);

  const handleFav = () => {};

  return (
    <div className='container characters-container'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className='fav-characters'>
          <p>Characters</p>
          <div className='card-container'>
            {data.charactersFav &&
              data.charactersFav.map((charac, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    charac={charac}
                    handleFav={handleFav}
                    fav={charac.favorite}
                  />
                );
              })}
          </div>
          <p>Comics</p>
          <div className='card-container'>
            {data.comicsFav &&
              data.comicsFav.map((comic, index) => {
                return (
                  <CardComic
                    key={index}
                    index={index}
                    comic={comic}
                    handleFav={handleFav}
                    fav={comic.favorite}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
