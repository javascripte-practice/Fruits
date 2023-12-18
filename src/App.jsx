import React, { useEffect, useState } from "react";
import FruitList from "./components/UI/FruitList/FruitList";
import "./App.css";
import Form from "./components/UI/Form/Form";
/*
  Components
  1. Smart Component - Dump component / Presentation Component
  2. StateFull Component - StateLess Component
  3. Controlled - UnControlled Components
  // ========= 6-dars
  1. Izalation Component
  2. Errors And Modal window
  3. useEffect hook
  4. LocalStorage 
  5. Clean Up function



*/
function App() {
  const [openFormS, setOpenFormS] = useState(false);
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    if (fruits.length === 0) {
      setFruits(JSON.parse(localStorage.getItem("fruits")));
    }
  }, []);

  // bad-practice
  // const [nameChangeValue, setNameChangeValue] = useState("");
  // const [priceChangeValue, setPriceChangeValue] = useState("");

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
      const newArr = fruits.filter((f) => f.id !== id);
      localStorage.setItem("fruits", JSON.stringify(newArr));
      return newArr;
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
      <div className="container">
        <h1>Mevalar </h1>
        <FruitList data={fruits} deleteFunc={deleteFunc} />
        {openFormS && (
          <Form
            fruits={setFruits}
            clouseForm={openForm}
            // setName={[nameChangeValue, setNameChangeValue]}
            // setPrice={[priceChangeValue, setPriceChangeValue]}
            // errOpen={isOpen}
          />
        )}

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
