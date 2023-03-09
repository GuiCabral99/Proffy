import styles from "./textarea.module.css";

const TextArea = ({ textareaName, labelContent, value, ...rest }) => {
  return (
    <div className={styles.textarea_block}>
      <label htmlFor={textareaName}>{labelContent}</label>
      <textarea id={textareaName} {...rest} />
    </div>
  );
};

export default TextArea;
