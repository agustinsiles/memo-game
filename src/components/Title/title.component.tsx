import { ColorVariants } from "@/utils/enums";
import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  variant?: ColorVariants;
}
export default function Title({
  children,
  variant = ColorVariants.DEFAULT,
}: IProps) {
  return (
    <h3 className={`uppercase font-bold text-lg ${variant}`}>{children}</h3>
  );
}
