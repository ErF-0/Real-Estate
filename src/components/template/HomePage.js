import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";

const HomePage = () => {
  const cardslist = ["villa", "apartment", "store", "office"];

  return (
    <main>
      <section className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </section>
      <section className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((item) => (
            <li key={item}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
