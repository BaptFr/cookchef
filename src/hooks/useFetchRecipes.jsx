import { useEffect, useState } from 'react';
import { getRecipes } from '../apis';
import { useSetRecoilState } from 'recoil';
import { recipesState } from 'src/state';


export function useFetchRecipes (page) {
    //Recoil for the states in the "State" folder.
    const setRecipes = useSetRecoilState(recipesState);
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
                    if (page && page !==1 ) {
                    setRecipes((x) => [...x, ...fetchedRecipes]);
                    } else {
                    setRecipes(fetchedRecipes);
                    }
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
    }, [page, setRecipes]);

    return [isLoading, error];

}
