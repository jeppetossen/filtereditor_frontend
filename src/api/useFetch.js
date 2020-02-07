import { useEffect, useState } from 'react'

/*
const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();
        (async () => {
            const res = await fetch(url, {
                signal: abortController.signal,
            });
            const data = await res.json();
            if (mounted) setData(data);
        })();
        const cleanup = () => {
            mounted = false;
            abortController.abort();
        };
        return cleanup;
    }, [url]);
    return data;
};
*/

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        FetchData();
    }, []);
    return { response, error };
};

export default useFetch