import { HTMLAttributes } from "react";
import styles from "./Button.module.css";
import { ColorVariants } from "./../../utils/enums";

export enum ButtonSizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}
export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ColorVariants;
  size?: ButtonSizes;
  disabled?: boolean;
  classNames?: string;
}
export default function Button({
  children,
  onClick,
  variant = ColorVariants.DEFAULT,
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
