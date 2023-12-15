import { useRef, useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [nameChangeValue, setNameChangeValue] = useState("");
  const [priceChangeValue, setPriceChangeValue] = useState("");
  const [errName, setErrName] = useState(false);
  const [errPrice, setErrPrice] = useState(false);
  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   price: "",
  // });
  // const nameValue = useRef();
  // const priceValue = useRef();
  const setFruits = props.fruits;
  const changeNameValue = (e) => {
    setErrName(true);
    if (e?.target?.value?.length >= 3) {
      setErrName(false);
    }
    setNameChangeValue(e?.target?.value);
    // setFormValue((obj) => ({ ...obj, name: e?.target?.value }));
  };
  const changePriceValue = (e) => {
    setPriceChangeValue(e?.target?.value);

    setErrPrice(() => true);
    if (priceChangeValue > 3) {
      setErrPrice(false);
    }
  };

  // setFormValue((obj) => ({ ...obj, price: e?.target?.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    if (errName || errPrice) {
      return;
    }
    const newObj = {
      id: Date.now().toString(),
      name: nameChangeValue,
      price: priceChangeValue,
    };
    // const newObj = {
    //   id: Date.now().toString(),
    //   ...formValue,
    // };
    // const newObj = {
    //   id: Date.now().toString(),
    //   name: nameValue.current.value,
    //   price: priceValue.current.value,
    // };
    // props.clouseForm(setNameChangeValue, setPriceChangeValue);
    // props.clouseForm(setFormValue);
    props.clouseForm(false);
    // nameValue.current.value = "";
    // priceValue.current.value = "";
    setFruits((fruits) => {
      const newFruits = [newObj, ...fruits];
      return newFruits;
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Fruit"
        name="name"
        value={nameChangeValue}
        onChange={changeNameValue}
        className={errName ? styles.error : ""}
        // value={formValue.name}
        // ref={nameValue}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={priceChangeValue}
        onChange={changePriceValue}
        className={errPrice ? styles.error : ""}
        // value={formValue.price}
        // ref={priceValue}
      />
      <button
        type="button"
        onClick={() => {
          // nameValue = "";
          // priceValue = "";
          // props.clouseForm(false);
          setNameChangeValue("");
          setPriceChangeValue("");
          props.clouseForm(
            // setFormValue
            false
          );
        }}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
