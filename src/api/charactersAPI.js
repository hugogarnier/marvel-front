import axios from "axios";

const charactersAPI = async (page) => {
  try {
    // const limit = `&limit=${perPage}`;
    // const numberPage = `&page=${page}`;
    // let filters = "";
    // productName &&
    //   (filters = `?title=${productName}${limit}${prices}${numberPage}`);
    // asc && (filters = `?sort=price-asc${limit}${prices}${numberPage}`);
    // !asc && (filters = `?sort=price-desc${limit}${prices}${numberPage}`);
    // productName &&
    //   asc &&
    //   (filters = `?title=${productName}&price=price-asc${limit}${prices}${numberPage}`);
    // productName &&
    //   !asc &&
    //   (filters = `?title=${productName}&price=price-desc${limit}${prices}${numberPage}`);
    let URI = `${process.env.REACT_APP_URI}/characters?page=${page}`;

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

export default charactersAPI;
