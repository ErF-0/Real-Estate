"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Card from "./Card";
import { BarsLoader } from "./Loader";
import styles from "@/module/DashboardCard.module.css";
import toast, { Toaster } from "react-hot-toast";
const DashboardCard = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <article className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>

        <button onClick={deleteHandler}>
          {loading ? (
            <BarsLoader />
          ) : (
            <>
              {" "}
              <span>حذف</span>
              <AiOutlineDelete />
            </>
          )}
        </button>
      </div>
      <div className={styles.ribbon}>
        {data.published ? (
          <span className={styles.published}>منتشر شده</span>
        ) : (
          <span> در انتظار تایید</span>
        )}
      </div>
      <Toaster />
    </article>
  );
};

export default DashboardCard;
