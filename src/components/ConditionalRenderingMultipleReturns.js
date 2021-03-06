import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/l33th';

const ConditionalRenderingMultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then(({ login }) => {
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error... no such user</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>Multiple Returns</h2>
      <h1>{user}</h1>
    </div>
  );
};

export default ConditionalRenderingMultipleReturns;
