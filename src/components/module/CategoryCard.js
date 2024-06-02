import Image from "next/image";
import Link from "next/link";
import styles from "@/module/CategoryCard.module.css";

const CategoryCard = ({ name, title }) => {
  return (
    <article className={styles.card}>
      <Link href={{ pathname: "/buy-residential", query: { category: name } }}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </article>
  );
};

export default CategoryCard;
