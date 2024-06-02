import Link from "next/link";
import styles from "@/layout/Header.module.css";

import LoginButton from "@/module/LoginButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </nav>
      <LoginButton style={styles.login} />
    </header>
  );
};

export default Header;
