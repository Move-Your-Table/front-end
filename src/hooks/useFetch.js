import { useState, useEffect } from "react";

const useFetch = (url, method, body) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const request = new Request(`${process.env.REACT_APP_API_URL}${url}`, {
      method: method,
      headers: {
        "Content-type": "application/json;"
      },
      body: JSON.stringify(body)
    });
    fetch(request)
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
