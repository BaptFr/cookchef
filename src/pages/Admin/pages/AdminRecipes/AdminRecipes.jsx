import { Outlet, useLocation } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";
import { Suspense } from "react";

function AdminRecipes () {
    //const key : To use a key with the outlet to exceptionnally reconstruct the component
    // Because the form wasn't clear when you navigate directly from the edit form of a recipe-> add a new recipe above the form
    const {key}= useLocation ();
    return (
        //Outlet for childen paths
        <div className='d-flex flex-column flex-fill'>
            <h4 className='mb-20'>Gestion des recettes</h4>
            <div className='d-felx flex-column flex-fill'>
                <AdminRecipesNav></AdminRecipesNav>
                <div className='d-felx flex-column flex-fill'>
                    <Suspense>
                        <Outlet key= { key }/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default AdminRecipes;