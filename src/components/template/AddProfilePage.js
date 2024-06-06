"use client";

import { useEffect, useState } from "react";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/template/AddProfilePage.module.css";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";

const AddProfilePage = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialProfileData = {
    title: "",
    description: "",
    phone: "",
    price: "",
    location: "",
    realEstate: "",
    constructionDate: "",
    category: "",
    rules: [],
    amenities: [],
  };
  const [profileData, setProfileData] = useState(initialProfileData);
  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, []);
  const titles = [];
  for (const key in initialProfileData) {
    if (
      key !== "constructionDate" &&
      key !== "category" &&
      key !== "rules" &&
      key !== "amenities"
    ) {
      titles.push(key);
    }
  }
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setProfileData(initialProfileData);
    }
  };
  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>

      {titles.map((item, index) => (
        <TextInput
          key={index}
          name={item}
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={item === "description" ? true : false}
        />
      ))}

      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}

      <Toaster />
    </div>
  );
};

export default AddProfilePage;
