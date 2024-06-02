import AdminCard from "@/module/AdminCard";
import styles from "@/template/AddProfilePage.module.css";
const AdminPage = ({ unpublishedProfiles }) => {
  return (
    <section>
      {unpublishedProfiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در صف تایید وجود ندارد!</p>
      )}
      {unpublishedProfiles.length
        ? unpublishedProfiles.map((profile) => (
            <AdminCard
              key={profile._id}
              data={JSON.parse(JSON.stringify(profile))}
            />
          ))
        : null}
        
    </section>
  );
};

export default AdminPage;
