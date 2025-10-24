
import { data } from './recipes';

export async function seedRecipes () {
    // Need to seed only one time. No repeat.
    try {
        const response = await fetch ('https://restapi.fr/api/recipesdatas');
        const existingData = await response.json();

        //Condition: Seed only if there is no data (10 hrs memory on restapi.fr.)
        if (existingData.length === 0) {
            fetch("https://restapi.fr/api/recipesdatas ", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body:JSON.stringify(data),
            });
        } else {
      console.log("Les données existent déjà. Aucune action nécessaire.");
        }
    } catch (error) {
        console.error("Erreur lors de l'initialisation des données :", error);
    }
}



