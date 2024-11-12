import congratulations from "../content/birthday/MomBirthday.json";
import css from "../birthday/birthday.module.css";

const BirthdayMom = () => {
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

export default BirthdayMom;
