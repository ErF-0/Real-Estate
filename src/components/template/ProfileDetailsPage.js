//icons

import { BiCalendarCheck, BiStore } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
//components
import DetailsItems from "@/module/DetailsItems";
import CopyButton from "@/module/CopyButton";
import ShareButton from "@/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";

import { e2p, sp } from "@/utils/replaceNumber";
import { Toaster } from "react-hot-toast";
import styles from "@/template/ProfileDetailsPage.module.css";

const ProfileDetailsPage = ({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realEstate,
    phone,
    price,
    category,
    constructionDate,
  },
}) => {
  const userPhone = `0${phone}`;

  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <DetailsItems title={"جزئیات"} desc={description} />
        <DetailsItems title={"امکانات"} data={amenities} />
        <DetailsItems title={"قوانین"} data={rules} />
      </section>
      <aside className={styles.sidebar}>
        <div className={styles.realEstate}>
          <SiHomebridge />
          <p> {realEstate}</p>
          <span className={styles.phone}>
            <AiOutlinePhone />
            <span>{e2p(userPhone)}</span>
          </span>
          <CopyButton phone={userPhone} />
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            <span>{icons[category]}</span>
            <span>{categories[category]}</span>
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {constructionDate}
          </p>
        </div>
      </aside>
      <Toaster />
    </main>
  );
};

export default ProfileDetailsPage;
