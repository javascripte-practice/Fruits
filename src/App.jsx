import { useState } from "react";
import FruitList, { a } from "./components/FruitList/FruitList";
import "./App.css";
import Form from "./components/Form/Form";
function App() {
  const [openFormS, setOpenFormS] = useState(false);
  const [fruits, setFruits] = useState([]);

  const openForm = (setInputChangeValue) => {
    setOpenFormS(!openFormS);
    if (setInputChangeValue) {
      setInputChangeValue("");
    }
  };

  const deleteFunc = (id) => {
    setFruits(() => {
      return fruits.filter((f) => f.id !== id);
    });
  };

  return (
    <>
      <div className="container">
        <h1>Mevalar </h1>
        <FruitList data={fruits} deleteFunc={deleteFunc} />
        {openFormS && (
          <Form fruits={[fruits, setFruits]} clouseForm={openForm} />
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
