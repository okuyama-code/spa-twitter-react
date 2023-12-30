
import axios from "axios";

// const options = {
//   ignoreHeaders: true,
// };

const client =
  axios.create({
    baseURL: process.env.REACT_APP_API_DOMEIN,
  })


export default client;

