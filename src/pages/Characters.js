import { useEffect, useState } from "react";

import charactersAPI from "../api/charactersAPI";
import charactersFavAPI from "../api/charactersFavAPI";
import Card from "../components/Card";
import Filters from "../components/Filters";

const Characters = ({ token }) => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const characters = await charactersAPI(page, name, token);
      setCount(characters.count);
      setLimit(characters.limit);
      setData(characters.results);
      setIsLoading(false);
    };
    getData();
  }, [page, name, token]);

  useEffect(() => {
    const sendFav = async () => {
      await charactersFavAPI(token, favorites);
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
          {data.map((charac, index) => {
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
      )}
    </div>
  );
};

export default Characters;
