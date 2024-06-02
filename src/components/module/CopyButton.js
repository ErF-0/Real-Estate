"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import styles from "@/module/CopyButton.module.css";
const CopyButton = ({ phone }) => {
  const [copy, setCopy] = useState(false);
  const copyHandler = () => {
    navigator.clipboard
      .writeText(phone)
      .then(() => {
        toast.success("شماره تماس کپی شد");
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 5000); // Reset copied state after 3 seconds
      })
      .catch((err) => {
        toast.error("مشکلی پیش آمده!");
      });
  };
  return (
    <>
      {copy ? (
        <span id={styles["copied"]}>
          <LiaCheckDoubleSolid />
        </span>
      ) : (
        <span id={styles["copyBtn"]} onClick={copyHandler}>
          <MdContentCopy />
        </span>
      )}
    </>
  );
};

export default CopyButton;
