"use client";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import styles from "@/layout/DashboardSidebar.module.css";
import { usePathname, useRouter } from "next/navigation";

const initialState = {
  dashboard: true,
  myProfiles: false,
  addProfile: false,
  admin: false,
};
const reducer = (state, action) => {
  switch (action) {
    case "DASHBOARD":
      return initialState;
    case "ADD_PROFILE":
      return { ...initialState, dashboard: false, addProfile: true };
    case "MY_PROFILES":
      return { ...initialState, dashboard: false, myProfiles: true };

    default:
      return state;
  }
};
const DashboardNavigation = ({ role }) => {
  // const pathname = usePathname();
  // const current = pathname.split("/dashboard/");
  // const [path, setPath] = useState("");
  // console.log(path);

  // useEffect(() => {
  //   console.log(pathname);
  //   console.log(current);
  //   setPath(current[1]);
  // }, [path]);

  const [style, dispatch] = useReducer(reducer, initialState);
  const { dashboard, myProfiles, addProfile, admin } = style;
  return (
    <>
      <Link
        href="/dashboard"
        onClick={() => {
          dispatch("DASHBOARD");
        }}
        className={`${dashboard ? styles.active : null}`}
      >
        حساب کاربری
      </Link>
      <Link
        href="/dashboard/my-profiles"
        onClick={() => {
          dispatch("MY_PROFILES");
        }}
        className={`${myProfiles ? styles.active : null}`}
      >
        آگهی های من
      </Link>
      <Link
        href="/dashboard/add-profile"
        onClick={() => {
          dispatch("ADD_PROFILE");
        }}
        className={`${addProfile ? styles.active : null}`}
      >
        ثبت آگهی
      </Link>
      {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
    </>
  );
};

export default DashboardNavigation;
