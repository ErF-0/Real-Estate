"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPathname } from "@/utils/getPathname";
import { useEffect, useState } from "react";

import { sidebarTitles } from "@/constants/strings";

import { CgProfile } from "react-icons/cg";
import Hamburger from "@/icons/Hamburger";

import LogOutButton from "@/module/LogOutButton";

import styles from "@/layout/DashboardSidebar.module.css";
import Xmark from "@/icons/Xmark";

const DashboardNavigation = ({ role, email }) => {
  const [showMenu, setShowMenu] = useState(false);
  const url = usePathname();
  const pathname = getPathname(url);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (showMenu) {
      setShowMenu(!showMenu);
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.showMenu}>
        <span onClick={handleToggleMenu}>
          <Hamburger />
        </span>
        <p>{sidebarTitles[pathname]}</p>
      </div>
      <aside className={styles.sidebar}>
        <CgProfile />
        <p id={styles["role"]}>{role === "ADMIN" ? "ادمین" : null}</p>
        <p>{email}</p>
        <span></span>
        <Link
          href="/dashboard"
          className={`${pathname === "dashboard" ? styles.active : null}`}
        >
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-profiles"
          className={`${pathname === "my-profiles" ? styles.active : null}`}
        >
          آگهی های من
        </Link>
        <Link
          href="/dashboard/add-profile"
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
        <LogOutButton />
      </aside>
      {/* mobile menu */}
      <aside
        className={`${styles.sidebar} ${styles.mobileMenu} ${
          showMenu ? styles.showMobileMenu : null
        }`}
      >
        <div className={styles.closeMenuBtn} onClick={handleToggleMenu}>
          <Xmark />
        </div>
        <CgProfile />
        <p id={styles["role"]}>{role === "ADMIN" ? "ادمین" : null}</p>
        <p>{email}</p>
        <span></span>
        <Link
          href="/dashboard"
          className={`${pathname === "dashboard" ? styles.active : null}`}
        >
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-profiles"
          className={`${pathname === "my-profiles" ? styles.active : null}`}
        >
          آگهی های من
        </Link>
        <Link
          href="/dashboard/add-profile"
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
        <LogOutButton />
      </aside>
    </>
  );
};

export default DashboardNavigation;
