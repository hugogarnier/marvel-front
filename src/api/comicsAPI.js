import axios from "axios";

const comicsAPI = async (page, name) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/comics?title=${name}&page=${page}`;

    const response = await axios.get(URI, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGEwYWJhZWEzZjY1MmVkYzJhOTEiLCJpYXQiOjE2MzcxNjE5NTZ9.XeVsvWBm_z12XV0cLe6xQLaw5hW29WJGBzuMph1exPY`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default comicsAPI;
