import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";
import { categories } from "@/constants/strings";
const Sidebar = () => {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((item, index) => (
        <Link
          key={index}
          href={{ pathname: "/buy-residential", query: { category: item } }}
        >
          {categories[item]}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
