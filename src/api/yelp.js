import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization:
      'Bearer 4d1150743b944f7a953caea90136ad4f'
  }
});