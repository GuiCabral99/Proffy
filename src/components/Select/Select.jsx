import styles from "./select.module.css";

const Select = ({ selectName, labelContent, options, ...rest }) => {
  return (
    <div className={styles.select_block}>
      <label htmlFor={selectName}>{labelContent}</label>
      <select defaultValue="" name={selectName} id={selectName} {...rest}>
        <option desable="true" hidden value="">
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
