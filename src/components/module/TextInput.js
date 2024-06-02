import { p2e, sp } from "@/utils/replaceNumber";
import styles from "@/module/TextInput.module.css";

const TextInput = ({ name, profileData, setProfileData, textarea }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const numberRegex = /^[1-9]\d*$/;
    if (name === "price" || name === "phone") {
      if (numberRegex.test(value) || value === "") {
        setProfileData({ ...profileData, [name]: p2e(value) });
      }
    } else {
      setProfileData({ ...profileData, [name]: p2e(value) });
    }
  };
  const persianTitle = {
    title: "عنوان",
    description: "توضیحات",
    phone: "شماره تماس(بدون صفر)",
    location: "آدرس",
    price: "قیمت(تومان)",
    realEstate: "بنگاه",
  };
  const showSeperatedPrice = sp(profileData["price"]);
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{persianTitle[name]}</label>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          id={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          value={profileData[name]}
          onChange={changeHandler}
          className={name === "price" ? styles.price : null}
        />
      )}
      {name === "price" && showSeperatedPrice ? (
        <p
          className={styles.showSeperatedPrice}
        >{`${showSeperatedPrice} تومان`}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
