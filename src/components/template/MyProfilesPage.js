import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css";
const MyProfilesPage = ({ profiles }) => {
  return (
    <section>
      {profiles.length ? (
        profiles.map((item) => (
          <DashboardCard
            key={item._id}
            data={JSON.parse(JSON.stringify(item))}
          />
        ))
      ) : (
        <p className={styles.text}>هیچ آگهی برای نمایش وجود ندارد.</p>
      )}
    </section>
  );
};

export default MyProfilesPage;
