import { useEffect, useState } from 'react';
import yelp from './yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const searchEnternet = async searchTerm => {
    try {
      setIsLoading(true);
          const response =  await yelp.get('/top-headlines', {
            params: {
              country:'in',
              category:'technology',
              apiKey:'4d1150743b944f7a953caea90136ad4f',
              pageSize:'20',
              page:'1' 
            }
          });
          setErrorMessage(null);
          setResults(response.data.articles);  
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
      setIsLoading(false);
    }
  };

  // Call searchApi when component
  useEffect(() => {
    searchEnternet('');
  }, []);

  return [searchEnternet, results, errorMessage, isLoading];
};