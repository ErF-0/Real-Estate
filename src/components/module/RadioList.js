import styles from "@/module/RadioList.module.css";
const RadioList = ({ profileData, setProfileData }) => {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div htmlFor="villa">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            id="villa"
            name="category"
            value="villa"
            onChange={changeHandler}
            checked={category === "villa"}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            onChange={changeHandler}
            checked={category === "apartment"}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            id="store"
            name="category"
            value="store"
            onChange={changeHandler}
            checked={category === "store"}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            id="office"
            name="category"
            value="office"
            onChange={changeHandler}
            checked={category === "office"}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;
