import axios from 'axios';

export default axios.create({
  // eslint-disable-next-line spaced-comment
  baseURL: 'https://server-1612419.herokuapp.com'
  //baseURL: 'http://localhost:3001',
});
