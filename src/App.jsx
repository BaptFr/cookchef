import { useState } from "react";
import { seedRecipes } from "./data/seed"; //for dev (10hrs memory in the API)
import  Header  from "./components/Header/Header";
import  HomePage  from "./pages/Homepage/HomePage";
import  Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import styles from './App.module.scss';

//seedRecipes();

function App() {
  const [page, setPage] = useState('homepage');

  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header  setPage={setPage}/>
          {page === "homepage" && <HomePage />}
         {page === "admin" && <Admin />}
        <Footer />
      </div>
  )
}

export default App;