import { useEffect } from 'react';

const Test = ({ share }) => {

  async function fetchExpirations() {
    let response = await fetch(`https://api.tradier.com/beta/markets/fundamentals/company?symbols=SPY`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      console.log(response)
    } else {
      console.log('ERRRRRROR');
    }
  }

  useEffect(() => {
    fetchExpirations();
  }, []);

  return (
    <div>
    </div>
  )
}

export default Test;
