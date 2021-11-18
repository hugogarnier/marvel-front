import axios from "axios";

const favoriteAPI = async (id) => {
  try {
    let URI = `${process.env.REACT_APP_URI}/characters/fav/${id}`;
    const response = await axios.post(URI, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGEwYWJhZWEzZjY1MmVkYzJhOTEiLCJpYXQiOjE2MzcyNTA2ODF9.dqnLpFlKN_F9MDdZ6x0grQpYE3zB6ux28Risy0GgiWA`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    console.log(error.message);
    return error.message;
  }
};

export default favoriteAPI;
