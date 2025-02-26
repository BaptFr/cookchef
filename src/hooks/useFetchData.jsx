import { useEffect, useState } from "react";


export function useFetchData (url, page) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect ( () => {
        //For infos verification
        let cancel = false;
        async function fetchData () { //fetch is a GET by default
            try {
                setIsLoading(true);
                const queryParam = new URLSearchParams();
                if(page){
                    // queryParam.append('limit', 18);
                    // queryParam.append('skip', (page -1) * 18);
                }
                const response = await fetch (url + `${queryParam}`); //Dyma Restapi settings;(page -1 first page = 1 - 1 = 0)
                if (response.ok && !cancel) {
                    const newData = await response.json();
                    // Is an array  ?
                    setData ((x) =>
                        Array.isArray(newData) ? [...x, ...newData] : [...x, newData]
                    );
                }
            } catch (e) {
                setError('erreur')
            } finally {
                //Stop the loading when datas are loaded.
                if (!cancel) {
                    setIsLoading(false)
                }
            }
        }
        fetchData();
        return () => (cancel = true);
    }, [url, page]);

    return [[data, setData], isLoading, error]

}
