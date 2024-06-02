import styles from "@/module/TextList.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";

import { AiOutlineDelete } from "react-icons/ai";
const TextList = ({ title, profileData, setProfileData, type }) => {
  const addHandler = () => {
    setProfileData({
      ...profileData,
      [type]: [...profileData[type], ""],
    });
  };
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const newList = [...profileData[type]];
    newList[index] = value;
    setProfileData({ ...profileData, [type]: newList });
  };
  const deleteHandler = (index) => {
    const newList = [...profileData[type]];
    newList.splice(index, 1);
    setProfileData({ ...profileData, [type]: newList });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((item, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>
            <AiOutlineDelete />
            حذف
          </button>
        </div>
      ))}

      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default TextList;
