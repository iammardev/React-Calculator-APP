import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState(" ");
  const [lastActionWasEval, setLastActionWasEval] = useState(false);

  const onButtonClick = (buttonName) => {
    if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
      setLastActionWasEval(true);
    } else if (buttonName === "C") {
      setCalVal("");
      setLastActionWasEval(false);
    } else {
      const newDisplay = lastActionWasEval ? buttonName : calVal + buttonName;
      setCalVal(newDisplay);
      setLastActionWasEval(false);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
