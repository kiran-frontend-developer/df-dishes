import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Abort controller
    const abortContr = new AbortController();
    setTimeout(() => {
      fetch(url,{signal: abortContr.signal})
        .then(res => {
          //console.log(res);
          if (!res.ok) {
            throw Error('could not fetch data that resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.name);
          if(err.name === "AbortError"){
            console.log("useFetch aborted");
          }else{
            setIsPending(false);
          setError(err.message);
          }
          
          // console.log(err.message);
        })
    }, 1000);

    // clean up method
    return () => {
      abortContr.abort();
    };


    //console.log('use effect ran');
    //console.log(blogs);
  }, [url]);
  return { data, isPending, error }

}
export default useFetch;