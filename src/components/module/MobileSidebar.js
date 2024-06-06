"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";

import Overlay from "@/module/Overlay";
import Xmark from "@/icons/Xmark";

import styles from "@/module/MobileSidebar.module.css";

const MobileSidebar = () => {
  const query = useSearchParams().get("category");

  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={styles.mobileSidebar}>
      <div className={styles.mobileSidebarTitle}>
        <div className={styles.mobileSidebarBtn}>
          <p onClick={handleToggleMenu}>
            <HiFilter />
            دسته بندی
          </p>
        </div>
        <p>{categories[query] || "همه"}</p>
      </div>

      {/* mobile categories menu */}
      <div
        className={`${styles.mobileSidebarMenu}  ${
          showMenu ? styles.showMobileMenu : null
        }`}
      >
        <div>
          <p>مرتب سازی بر اساس</p>
          <span onClick={handleToggleMenu}>
            <Xmark />
          </span>
        </div>
        <Link onClick={handleToggleMenu} href="/buy-residential">
          همه
        </Link>
        {Object.keys(categories).map((item, index) => (
          <Link
            onClick={handleToggleMenu}
            key={index}
            href={{ pathname: "/buy-residential", query: { category: item } }}
          >
            {categories[item]}
          </Link>
        ))}
      </div>
      {showMenu && <Overlay />}
    </div>
  );
};

export default MobileSidebar;
