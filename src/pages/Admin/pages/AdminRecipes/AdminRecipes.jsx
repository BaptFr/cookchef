import { Outlet } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";
import { Suspense } from "react";

function AdminRecipes () {

    return (
        //Outlet for childen paths
        <div className='d-flex flex-column flex-fill'>
            <h4 className='mb-20'>Gestion des recettes</h4>
            <div className='d-felx flex-column flex-fill'>
                <AdminRecipesNav></AdminRecipesNav>
                <div className='d-felx flex-column flex-fill'>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default AdminRecipes;