import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
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
    </aside>
  );
};

export default Sidebar;
