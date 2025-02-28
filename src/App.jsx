import { Suspense, useState } from "react";
import { seedRecipes } from "./data/seed"; //for dev (10hrs memory in the API)
import  Header  from "./components/Header/Header";
import  Footer from "./components/Footer/Footer";
import styles from './App.module.scss';
import { Outlet } from "react-router-dom";

//seedRecipes();

function App() {

  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <div className='d-flex flex-column flex-fill'> {/*To prevent the quick footer jump we change pages by the nav*/}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
  )
}

export default App;