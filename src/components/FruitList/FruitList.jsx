import styles from "./FruitList.module.css";

const FruitList = (props) => {
  const data = props.data;
  return (
    <ul className={styles.box} key={"fvghbj"}>
      {data.length > 0 ? (
        data.map((f) => {
          return (
            <li
              key={f.id}
              onClick={props.deleteFunc.bind(null, f.id)}
              className={styles.item}
            >
              {f.name} {f.price}
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
