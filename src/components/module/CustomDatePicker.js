import styles from "@/module/CustomDatePicker.module.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const CustomDatePicker = ({ profileData, setProfileData }) => {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };
  return (
    <div className={styles.container}>
      <p>سال ساخت</p>
      <DatePicker
        className="red"
        calendar={persian}
        locale={persian_fa}
        minDate="1300/1/1"
        maxDate={new DateObject({ calendar: persian })}
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default CustomDatePicker;
