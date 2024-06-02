import styles from "@/layout/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و اجاره ملک</h3>
        <p>
          ما با افتخار، خدمات اجاره و فروش ملک را با کیفیت بالا و تجربه کاربری
          بی‌نظیر به شما ارائه می‌دهیم. با یک تیم متخصص و متعهد، هدف ما ایجاد
          فرآیندی راحت و شفاف برای یافتن خانه‌ای که دوست دارید، یا به فروش
          گذاشتن ملک خود است.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
