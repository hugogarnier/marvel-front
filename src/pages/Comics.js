import { useEffect, useState } from "react";

import comicsAPI from "../api/comicsAPI";
import comicsFavAPI from "../api/comicsFavAPI";
import CardComic from "../components/CardComic";
import Filters from "../components/Filters";

const Comics = ({ token }) => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const comics = await comicsAPI(page, name, token);
      setCount(comics.count);
      setLimit(comics.limit);
      setData(comics.results);
      setIsLoading(false);
    };
    getData();
  }, [page, name, token]);

  useEffect(() => {
    const sendFav = async () => {
      await comicsFavAPI(token, favorites);
    };
    sendFav();
  }, [favorites, token]);

  const handleFav = (index) => {
    const newData = [...data];
    const array = [...favorites];
    let addArray = true;
    array.map((item) => {
      if (item._id === newData[index]._id) {
        array.splice(index, 1);
        newData[index].favorite = false;
        addArray = false;
      }
      return true;
    });
    if (addArray) {
      newData[index].favorite = true;
      array.push(newData[index]);
    }
    setFavorites([...array]);
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
          {data.map((comic, index) => {
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
      )}
    </div>
  );
};

export default Comics;
