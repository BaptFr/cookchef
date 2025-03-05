import { useEffect, useState } from 'react';
import { getRecipes } from '../apis';


export function useFetchRecipes (page) {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect ( () => {
        //For infos verification
        let cancel = false;
        async function fetchRecipes () { //fetch is a GET by default
            try {
                setIsLoading(true);
                const queryParam = new URLSearchParams();
                if(page){  //Params on restapi.fr
                    queryParam.append('limit', 18); //Results limit per pages
                    queryParam.append('skip', (page -1) * 18);
                    queryParam.append('sort', 'createdAt:-1'); //Sort recipes to show the last added
                }
                //import from api folder
                const fetchedRecipes = await getRecipes(queryParam);
                //
                if(!cancel){
                setRecipes((x) => [...x, ...fetchedRecipes]);
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
        fetchRecipes();
        return () => (cancel = true);
    }, [page]);

    return [[recipes, setRecipes], isLoading, error]

}
