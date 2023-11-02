import { useState, useEffect } from 'react';

const useDataFetch = (url) => {

    const [blogs, setblogs] = useState([null]);

    const [pending, setpending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        //Somekind of React Axios Thing

        // const abortContoller = new abortController();

        setTimeout(() => {
            fetch(url, {/* signal: abortContoller.signal */ })
                .then(Response => {
                    if (!Response.ok) {
                        throw Error('Connection Failed');
                    } else
                        //  console.log(Response);
                        return Response.json();
                })

                .then(Data => {
                    // console.log(Data);
                    setblogs(Data);
                    setpending(false);
                    setError(null);
                })
                .catch(error => {

                    if (error.name === 'AbortError') {
                        console.log('abort');
                    }
                    else {
                        setError(error.message);
                        setpending(false);
                    }
                })
        }, 1000);

        // return () => abortContoller.abort();

    }, [url]);

    return { blogs, pending, error }
}


export default useDataFetch;