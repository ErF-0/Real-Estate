import DashboardNavigation from "@/module/DashboardNavigation";
import { CgProfile } from "react-icons/cg";

import LogOutButton from "@/module/LogOutButton";
import styles from "@/layout/DashboardSidebar.module.css";

export const metadata = {
  title: "پنل کاربری",
};

const DashboardSidebar = async ({ children, role, email }) => {
  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>
        <CgProfile />
        <p id={styles["role"]}>{role === "ADMIN" ? "ادمین" : null}</p>
        <p>{email}</p>
        <span></span>
        <DashboardNavigation role={role} />
        <LogOutButton />
      </aside>
      <div className={styles.main}>{children}</div>
    </section>
  );
};

export default DashboardSidebar;
