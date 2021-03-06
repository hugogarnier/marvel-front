import axios from "axios";

const favoriteAPI = async (token) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/favorites`;
    const response = await axios.get(URI, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    console.log(error.message);
    return error.message;
  }
};

export default favoriteAPI;
