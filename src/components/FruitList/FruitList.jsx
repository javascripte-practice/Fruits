import styles from "./FruitList.module.css";

const FruitList = (props) => {
  const data = props.data;
  const deleteFruit = (id) => {
    props.deleteFunc(id);
  };
  return (
    <ul className={styles.box} key={"fvghbj"}>
      {data.length > 0 ? (
        data.map((f) => {
          return (
            <li
              onClick={deleteFruit.bind(null, f.id)}
              className={styles.item}
              key={f.id}
            >
              {f.name}
            </li>
          );
        })
      ) : (
        <p>"Hozircha ma'lumotlar yo'q"</p>
      )}
    </ul>
  );
};

export default FruitList;
