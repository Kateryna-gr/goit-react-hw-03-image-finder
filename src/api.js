import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export const fetchImages = async ({ query }) => {
  const resp = await axios.get(`${baseURL}/${query}`);
  return resp.data;
};
