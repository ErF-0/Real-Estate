import styles from "@/module/DetailsItems.module.css";
const DetailsItem = ({ title, data, desc }) => {
  if (!data)
    return (
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  if (data)
    return (
      <div className={styles.container}>
        <h3>{title}</h3>
        {data.length ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده </p>
        )}
      </div>
    );
};

export default DetailsItem;
