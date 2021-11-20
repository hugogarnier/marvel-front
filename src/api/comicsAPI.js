import axios from "axios";

const comicsAPI = async (page, name, token) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/comics?title=${name}&page=${page}&token=${token}`;

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

export default comicsAPI;
