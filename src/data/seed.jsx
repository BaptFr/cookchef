
import { data } from './recipes';

export async function seedRecipes () {
    fetch("https://restapi.fr/api/recipesdatas ", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(data),
    });

};

