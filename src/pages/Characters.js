import { useEffect, useState } from "react";
import charactersAPI from "../api/charactersAPI";
import Card from "../components/Card";
import Filters from "../components/Filters";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favClicked, setFavClicked] = useState(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const characters = await charactersAPI(page, name);
      setData(characters.results);
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
          {data.map((charac, index) => {
            return (
              <Card
                key={index}
                index={index}
                charac={charac}
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

export default Characters;
