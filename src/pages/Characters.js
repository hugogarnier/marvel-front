import { useEffect, useState } from "react";
import charactersAPI from "../api/charactersAPI";
import charactersFavAPI from "../api/charactersFavAPI";
import favoriteAPI from "../api/favoriteAPI";
import Card from "../components/Card";
import Filters from "../components/Filters";

const Characters = ({ token }) => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [favClicked, setFavClicked] = useState(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites") || []
  );
  useEffect(() => {
    const getData = async () => {
      const characters = await charactersAPI(page, name);
      setCount(characters.count);
      setLimit(characters.limit);
      setData(characters.results);
      setIsLoading(false);
    };
    getData();
  }, [page, name]);

  useEffect(() => {
    const sendFav = async () => {
      const charactersFav = await charactersFavAPI(token, favorites);
      console.log(charactersFav);
    };
    sendFav();
  }, [favorites, token]);

  const handleFav = (index) => {
    const newData = [...data];
    const newFav = [...favorites];
    newData[index].favorite === false || newData[index].favorite === undefined
      ? (newData[index].favorite = true)
      : (newData[index].favorite = false);
    if (newFav.some((favorite) => favorite.name === newData[index].name)) {
      const removedFav = newFav.filter(
        (fav) => fav.name !== newData[index].name
      );
      setFavorites(removedFav);
    } else {
      newFav.push(newData[index]);
      setFavorites(newFav);
    }
    setData(newData);
  };

  return (
    <div className='container characters-container'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className='card-container'>
          <Filters
            name={name}
            setName={setName}
            page={page}
            setPage={setPage}
            limit={limit}
            count={count}
          />
          {data.map((charac, index) => {
            return (
              <Card
                key={index}
                index={index}
                charac={charac}
                handleFav={handleFav}
                fav={charac.favorite}
                favClicked={favClicked}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
