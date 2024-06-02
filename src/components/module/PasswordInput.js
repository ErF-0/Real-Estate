import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { ImEye } from "react-icons/im";
import styles from "@/module/PasswordInput.module.css";
const PasswordInput = ({ value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.container} ${showPassword ? styles.focus : null}`}
    >
      <div>
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.showIcon}>
        <span onClick={togglePasswordVisibility}>
          {showPassword ? <RxEyeClosed /> : <ImEye />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
