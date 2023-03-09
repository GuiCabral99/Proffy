import styles from "./input.module.css";

const Input = ({ labelContent, inputName, ...rest }) => {
  return (
    <div className={styles.input_block}>
      <label htmlFor={inputName}>{labelContent}</label>
      <input id={inputName} {...rest} />
    </div>
  );
};

export default Input;
