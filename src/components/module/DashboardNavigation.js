"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPathname } from "@/utils/getPathname";
import styles from "@/layout/DashboardSidebar.module.css";

const DashboardNavigation = ({ role }) => {
  const url = usePathname();
  const pathname = getPathname(url);

  return (
    <>
      <Link
        href="/dashboard"
        onClick={() => {
          dispatch("DASHBOARD");
        }}
        className={`${pathname === "dashboard" ? styles.active : null}`}
      >
        حساب کاربری
      </Link>
      <Link
        href="/dashboard/my-profiles"
        onClick={() => {
          dispatch("MY_PROFILES");
        }}
        className={`${pathname === "my-profiles" ? styles.active : null}`}
      >
        آگهی های من
      </Link>
      <Link
        href="/dashboard/add-profile"
        onClick={() => {
          dispatch("ADD_PROFILE");
        }}
        className={`${pathname === "add-profile" ? styles.active : null}`}
      >
        ثبت آگهی
      </Link>
      {role === "ADMIN" ? (
        <Link
          href="/admin"
          className={`${pathname === "admin" ? styles.active : null}`}
        >
          در انتظار تایید
        </Link>
      ) : null}
    </>
  );
};

export default DashboardNavigation;
