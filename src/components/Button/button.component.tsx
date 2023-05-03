import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

export enum ButtonVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
}

export enum ButtonSizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}
export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disabled?: boolean;
  classNames?: string;
}
export default function Button({
  children,
  onClick,
  variant = ButtonVariants.DEFAULT,
  size = ButtonSizes.MD,
  disabled,
  classNames = "",
  ...rest
}: IProps) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${classNames} cursor-pointer`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
