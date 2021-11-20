import axios from "axios";

const comicsFavAPI = async (token, favorites) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/comics/fav`;
    const response = await axios.post(URI, favorites, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.message;
  }
};

export default comicsFavAPI;
