import axios from "axios";

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

const fetchDogImage = async () => {
  try {
    const response = await axios.get(baseUrl);
    console.log(response)
    return response.data.message
  } catch (error) {
    console.error('Failed to fetch dog image:', error);
  }
};

export default fetchDogImage