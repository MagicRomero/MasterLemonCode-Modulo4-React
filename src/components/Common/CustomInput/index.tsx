import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const CustomInput: React.FC<InputProps> = ({ onChange, ...inputProps }) => {
  return (
    <input onChange={onChange} className={styles.CustomInput} {...inputProps} />
  );
};

export default CustomInput;
