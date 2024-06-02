"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const LoginButton = ({ style }) => {
  const { data } = useSession();

  return (
    <div className={style}>
      {data ? (
        <Link href="/dashboard">
          <FaUserAlt />
        </Link>
      ) : (
        <Link href="/signin">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
