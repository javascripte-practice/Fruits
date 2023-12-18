import { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";
import Modal from "../Modal/Modal";

const Form = (props) => {
  const [nameChangeValue, setNameChangeValue] = useState("");
  const [priceChangeValue, setPriceChangeValue] = useState("");
  // bad-practice
  // const [nameChangeValue, setNameChangeValue] = props.setName;
  // const [priceChangeValue, setPriceChangeValue] = props.setPrice;
  const [errName, setErrName] = useState(false);
  const [errPrice, setErrPrice] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    console.log("Form ochildi");
    return () => {
      console.log("Form yopildi");
    };
  }, []);
  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   price: "",
  // });
  // const nameValue = useRef();
  // const priceValue = useRef();
  const setFruits = props.fruits;
  const changeNameValue = (e) => {
    const value = e?.target?.value?.trim();
    setNameChangeValue(value);
    if (nameChangeValue.length < 2) {
      setErrName(() => true);
    } else {
      setErrName(() => false);
    }
    // setFormValue((obj) => ({ ...obj, name: e?.target?.value }));
  };
  const changePriceValue = (e) => {
    const value = e?.target?.value?.trim();
    setPriceChangeValue(value);
    if (priceChangeValue.length < 3) {
      setErrPrice(() => true);
    } else {
      setErrPrice(() => false);
    }
  };

  // setFormValue((obj) => ({ ...obj, price: e?.target?.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    let errMessage = "";
    if (errName || nameChangeValue.length < 1) {
      errMessage = "Meva nomi bo'sh bo'lmasin!";
    }
    if (errPrice || priceChangeValue.length < 1) {
      errMessage = errMessage + " Meva narxi bo'sh bo'lmasin!";
    }
    if (errMessage) {
      isOpen(errMessage);
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

      localStorage.setItem("fruits", JSON.stringify([newObj, ...fruits]));
      return newFruits;
    });
  };
  const isOpen = (message) => {
    if (message) {
      setErr(message);
    } else {
      setErr(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {err && <Modal isOpen={isOpen.bind(null, false)} message={err} />}
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
