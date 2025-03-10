import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from 'react';
import App from "./App";
import { getRecipe } from "./apis";



const HomePage = lazy (() => import('./pages/Homepage/HomePage'));
const Admin = lazy (() => import('./pages/Admin/Admin'));
    const AdminRecipes = lazy ( () => import('./pages/Admin/pages/AdminRecipes/AdminRecipes'));
        const AdminRecipesList = lazy ( () => import('./pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList'));
        const AdminRecipesForm = lazy ( () => import('./pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm'));
    const AdminUsers = lazy ( () => import('./pages/Admin/pages/AdminUsers/AdminUsers'));


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        path: 'recipes',
                        element: <AdminRecipes />,
                        children: [
                            {
                                index: true,
                                loader: async () =>  redirect('/admin/recipes/list'),

                            },
                            {
                                path: 'list',
                                element: <AdminRecipesList />,
                            },
                            {
                                path: 'new',
                                element: <AdminRecipesForm />,
                            },
                            {
                                path: 'edit/:recipeId',
                                element: <AdminRecipesForm />,
                            },
                        ]
                    },
                    {
                        path: 'users',
                        element: <AdminUsers />,
                    },
                    {
                        index: true,
                        loader: async () => redirect("/admin/recipes"),
                    },
                ]
            },
        ],
    },
]);