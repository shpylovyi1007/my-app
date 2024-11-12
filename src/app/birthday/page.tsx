import congratulations from "../content/birthday/birthday.json";
import css from "./birthday.module.css";

const Birthday = () => {
  return (
    <ul className={css.ul}>
      {congratulations.map((congratulation) => {
        return (
          <li className={css.item} key={congratulation.id}>
            <p className={css.title}>{congratulation.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Birthday;
