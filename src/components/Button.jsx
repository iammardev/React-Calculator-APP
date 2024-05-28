import styles from "./Button.module.css";

const Button = ({ onButtonClick }) => {
  const ButtonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {ButtonsName.map((buttonname) => (
        <button
          className={styles.mybtn}
          onClick={() => onButtonClick(buttonname)}
        >
          {buttonname}
        </button>
      ))}
    </>
  );
};

export default Button;
