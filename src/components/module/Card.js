import Link from "next/link";
import { icons } from "@/constants/icons";
//icons

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
//utils and styles
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/Card.module.css";
const Card = ({ data: { _id, title, category, location, price } }) => {
  return (
    <article className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده جزئیات
        <BiLeftArrowAlt />
      </Link>
    </article>
  );
};

export default Card;
