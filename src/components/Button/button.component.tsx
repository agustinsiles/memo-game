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
interface Props {
  children: React.ReactNode;
  onClick: () => void;
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
}: Props) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${classNames}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
