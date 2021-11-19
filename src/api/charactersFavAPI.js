import axios from "axios";

const charactersFavAPI = async (token, favorites) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/characters/fav`;
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

export default charactersFavAPI;
