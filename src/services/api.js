import axios from 'axios';

const fetchImage = async (baseUrl) => {
  try {
    const response = await axios.get(baseUrl.value);
    if (baseUrl.value == import.meta.env.VITE_DOG_API)
      return response.data.message;
    else return response.data[0].url;
  } catch (error) {
    console.error('Failed to fetch dog image:', error);
  }
};

export default fetchImage;
