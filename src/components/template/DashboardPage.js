import styles from "@/template/DashboardPage.module.css";
const DashboardPage = async ({ createdAt }) => {
  const date = createdAt.toLocaleDateString("fa-IR");
  return (
    <section className={styles.container}>
      <h3>سلام 👋</h3>
      <p> آگهی خود را ثبت کنید تا هزاران نفر آن را ببینند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{date}</span>
      </div>
    </section>
  );
};

export default DashboardPage;
