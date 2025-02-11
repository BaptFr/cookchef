import  Header  from "./components/Header/Header";
import  Content  from "./pages/Homepage/HomePage";
import  Footer from "./components/Footer/Footer";
import styles from './App.module.scss';

function App() {
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
         <Content />
        <Footer />
      </div>
  )
}

export default App;