import axios from "axios";

const comicsCharactAPI = async (id, token) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/comics/${id}`;

    const response = await axios.get(URI, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default comicsCharactAPI;
