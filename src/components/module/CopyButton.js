"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import styles from "@/module/CopyButton.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
const CopyButton = ({ phone }) => {
  const [copy, setCopy] = useState(false);
  const copyHandler = () => {
    toast.success("شماره تماس کپی شد");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000); // Reset copied state after 5 seconds
  };
  return (
    <>
      {copy ? (
        <span id={styles["copied"]}>
          <LiaCheckDoubleSolid />
        </span>
      ) : (
        <CopyToClipboard text={phone}>
          <span id={styles["copyBtn"]} onClick={copyHandler}>
            <MdContentCopy />
          </span>
        </CopyToClipboard>
      )}
    </>
  );
};

export default CopyButton;

// const copyHandler = () => {
//   navigator.clipboard
//     .writeText(phone)
//     .then(() => {
//       toast.success("شماره تماس کپی شد");
//       setCopy(true);
//       setTimeout(() => {
//         setCopy(false);
//       }, 5000); // Reset copied state after 3 seconds
//     })
//     .catch((err) => {
//       toast.error("مشکلی پیش آمده!");
//     });
// };
