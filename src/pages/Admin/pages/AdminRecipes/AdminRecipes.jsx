import { Outlet } from "react-router-dom";

function AdminRecipes () {

    return (
        <>
            <h3>Admin Recipes</h3>
            <Outlet />
        </>
    )
}
export default AdminRecipes;