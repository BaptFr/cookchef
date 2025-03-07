import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AdminNav from "./components/AdminNav/AdminNav";


function Admin () {

    //Outlet for children paths
    return (
        <div className='d-flex flex-fill p-20'>
            <AdminNav />
            <div className='d-flex flex-column flex-fill'>
            <Suspense>
                <Outlet />
            </Suspense>
            </div>
        </div>
    )
};

export default Admin;