import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";
import MobileSidebar from "@/module/MobileSidebar";
import styles from "@/template/BuyResidentialPage.module.css";
const BuyResidentialPage = ({ data }) => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <MobileSidebar />

      <section className={styles.main}>
        {data.length ? (
          data.map((profile) => <Card key={profile._id} data={profile} />)
        ) : (
          <p className={styles.text}>هیچ آگهی برای نمایش وجود ندارد</p>
        )}
      </section>
    </main>
  );
};

export default BuyResidentialPage;
