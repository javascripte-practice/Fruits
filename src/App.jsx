import React, { useState } from "react";
import FruitList from "./components/FruitList/FruitList";
import "./App.css";
import Form from "./components/Form/Form";
import Wrapper from "./components/helper/Wrapper";
/*
  Components
  1. Smart Component - Dump component / Presentation Component
  2. StateFull Component - StateLess Component
  3. Controlled - UnControlled Components
  4. Izalation Component



*/
function App() {
  const [openFormS, setOpenFormS] = useState(false);
  const [fruits, setFruits] = useState([]);

  // const openForm = (setInputChangeValue, setPriceChangeValue) => {
  //   setOpenFormS(!openFormS);
  //   if (setInputChangeValue) {
  //     setInputChangeValue("");
  //     setPriceChangeValue("");
  //   }
  // };
  const openForm = (setFormValue) => {
    setOpenFormS(!openFormS);
    if (setFormValue) {
      setFormValue({
        name: "",
        price: "",
      });
    }
  };

  const deleteFunc = (id) => {
    setFruits(() => {
      return fruits.filter((f) => f.id !== id);
    });
  };
  //  React.createElement("div", { onClick: () => {}, className: "btn" }, [
  //   React.createElement("button", { type: "button" }, [
  //     "Button",
  //     React.createElement("span", { onClick: () => {} }, ["edit"]),
  //   ]),
  // ]);
  // 1-<Wrapper></Wrapper>, 2-[], 3-<React.Fragment></React.Fragment>, 4-<></>,
  return (
    <>
      <header></header>
      <div className="container">
        <h1>Mevalar </h1>
        <FruitList data={fruits} deleteFunc={deleteFunc} />
        {openFormS && <Form fruits={setFruits} clouseForm={openForm} />}
        {!openFormS && (
          <button onClick={openForm.bind(null, false)} className="plus-btn">
            Create fruit +
          </button>
        )}
      </div>
    </>
  );
}
export default App;
