import styles from "@/module/CustomDatePicker.module.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const CustomDatePicker = ({ profileData, setProfileData }) => {
  const changeHandler = (e) => {
    const dateObject = new DateObject(e);
    const year = dateObject.year;

    setProfileData({ ...profileData, constructionDate: year });
  };
  const dateObjectValue = new DateObject({
    year: profileData.constructionDate,
    month: 1,
    day: 1,
    calendar: persian,
  });
  return (
    <div className={styles.container}>
      <p>سال ساخت</p>
      <DatePicker
        className="red"
        calendar={persian}
        locale={persian_fa}
        minDate="1300/1/1"
        maxDate={new DateObject({ calendar: persian })}
        value={dateObjectValue}
        onChange={changeHandler}
        calendarPosition="bottom-right"
        onlyYearPicker
      />
    </div>
  );
};

export default CustomDatePicker;
