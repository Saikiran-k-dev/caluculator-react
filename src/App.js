
import styles from "./Styles/app.module.css";
import Calculator from "./Components/Calculator";


function App() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h1>CalCulator</h1>
      </div>
      <Calculator />    
    </div>
  );
}

export default App;
