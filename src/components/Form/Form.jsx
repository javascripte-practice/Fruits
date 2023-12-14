import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [inputChangeValue, setInputChangeValue] = useState("");
  const [fruits, setFruits] = props.fruits;
  const changeInputValue = (e) => {
    setInputChangeValue(e?.target?.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newObj = { id: Date.now().toString(), name: inputChangeValue };
    props.clouseForm(setInputChangeValue);
    setInputChangeValue("");
    setFruits(() => {
      const newFruits = [newObj, ...fruits];
      return newFruits;
    });
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Fruit"
        value={inputChangeValue}
        onChange={changeInputValue}
      />
      <button
        type="button"
        onClick={props.clouseForm.bind(null, changeInputValue)}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
