import  Header  from "./assets/components/Header";
import  Content  from "./assets/components/Content";
import  Footer from "./assets/components/Footer";
import styles from './App.module.scss';

function App() {
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        {/* <Content />
        <Footer /> */}
      </div>
  )
}

export default App;