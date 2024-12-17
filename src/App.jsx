<<<<<<< HEAD
import  Header  from "./assets/components/Header";
import  Content  from "./assets/components/Content";
import  Footer from "./assets/components/Footer";
import styles from './App.module.scss';
=======
<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
=======
>>>>>>> d70e7d0b79322036e6a61413a6b29d2342c6da26

function App() {
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        {/* <Content />
        <Footer /> */}
      </div>
  )
}

<<<<<<< HEAD
export default App;

=======
>>>>>>> 1a430ade2824ca7a9e9dc5ecbb5bb9e3a2c57a70
export default App
>>>>>>> d70e7d0b79322036e6a61413a6b29d2342c6da26
