"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordInput from "@/module/PasswordInput";
import Loader from "@/module/Loader";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/template/SignupPage.module.css";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;
    if (password !== confirmPassword) {
      toast.error("رمز با تکرار آن مطابقت ندارد!");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
    setLoading(false);
  };
  return (
    <section className={styles.form}>
      <h4>فرم ثبت نام</h4>
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
        <label htmlFor="confirmPassword">تکرار رمز عبور:</label>
        <PasswordInput
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={changeHandler}
        />

        {loading ? <Loader /> : <button type="submit">ثبت نام</button>}
      </form>
      <div>
        <p>حساب کاربری دارید؟</p>
        <Link href="/signin">ورود</Link>
      </div>
      <Toaster />
    </section>
  );
};

export default SignUpPage;
