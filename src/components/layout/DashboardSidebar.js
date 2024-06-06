import DashboardNavigation from "@/module/DashboardNavigation";

import styles from "@/layout/DashboardSidebar.module.css";

export const metadata = {
  title: "پنل کاربری",
};

const DashboardSidebar = async ({ children, role, email }) => {
  return (
    <section className={styles.container}>
      <DashboardNavigation role={role} email={email} />

      <div className={styles.main}>{children}</div>
    </section>
  );
};

export default DashboardSidebar;
