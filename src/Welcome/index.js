import logo from "../Static/img/logo.svg";
import styles from './index.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <div>
          <h1>Basic Example</h1>
        </div>
        <img src={logo} className={styles.App_logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
