import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../utils/scrollToTop";

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
    if (token) {
      const newData = [...data];
      if (newData[index].favorite) {
        if (newData[index].favorite === true) {
          newData[index].favorite = false;
        } else {
          newData[index].favorite = true;
        }
      } else {
        newData[index].favorite = true;
      }
      setFavorites(newData[index]);
      setData(newData);
    } else {
      toast("Please login to save your favorites characters", {
        icon: "❗️",
      });
    }
  };

  return (
    <>
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
            <Toaster />
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
      <ScrollToTop />
    </>
  );
};

export default Characters;
