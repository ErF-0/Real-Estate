"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sp } from "@/utils/replaceNumber";
import ArrowLeft from "@/icons/ArrowLeft";
import { OvalLoader } from "./Loader";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/module/AdminCard.module.css";
const AdminCard = ({ data: { _id, title, description, location, price } }) => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const publishHandler = async () => {
    setLoader(true);
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    setLoader(false);
    if (result.message) {
      toast.success(result.message);

      router.refresh();
    }
  };
  const deleteHandler = async () => {
    setLoader(true);
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoader(false);
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Link href={`/buy-residential/${_id}`}>
          مشاهده جزئیات
          <ArrowLeft />
        </Link>
      </div>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>
        {loader ? <OvalLoader /> : "تایید"}
      </button>
      <button className={styles.delete} onClick={deleteHandler}>
        {loader ? <OvalLoader /> : "حذف"}
      </button>
      <Toaster />
    </article>
  );
};

export default AdminCard;


