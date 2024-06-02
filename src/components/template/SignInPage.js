"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Loader from "@/module/Loader";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/template/SignupPage.module.css";
import PasswordInput from "@/module/PasswordInput";

const SignInPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
    setLoading(false);
  };
  return (
    <section className={styles.form}>
      <h4>فرم ورود</h4>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">:ایمیل:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />
        <label htmlFor="password">رمز عبور:</label>
        <PasswordInput
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        {loading ? <Loader /> : <button type="submit">ورود</button>}
      </form>
      <div>
        <p>حساب کاربری ندارید؟</p>
        <Link href="/signup">ثبت نام</Link>
      </div>
      <Toaster />
    </section>
  );
};

export default SignInPage;
