import { useEffect, useState } from "react";

import comicsAPI from "../api/comicsAPI";
import CardComic from "../components/CardComic";
import Filters from "../components/Filters";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favClicked, setFavClicked] = useState(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const comics = await comicsAPI(page, name);
      setData(comics.results);
      setIsLoading(false);
    };
    getData();
  }, [page, name]);

  const handleFav = () => {
    setFavClicked(!favClicked);
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
          />
          {data.map((comic, index) => {
            return (
              <CardComic
                key={index}
                index={index}
                comic={comic}
                handleFav={handleFav}
                favClicked={favClicked}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
