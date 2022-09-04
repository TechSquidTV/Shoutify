import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { styleAnimated, styleDeactivated } from "../../styles/styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  href?: string;
  ariaLabel?: string;
  className?: string;
  isDeactivated?: boolean;
  px?: number;
  variant?: Exclude<keyof typeof buttonStyles, "base">;
}

const buttonStyles = {
  base: "text-white rounded-md py-1 inline-flex items-center justify-center hover:bg-gray-700",
  primary: "bg-blue-600 hover:bg-blue-400",
  secondary: "bg-gray-800 hover:bg-purple-400",
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const px = props.px ?? 4;
  const isDeactivated = props.isDeactivated ?? false;
  const styles = [
    buttonStyles.base,
    styleAnimated,
    props.variant ? buttonStyles[props.variant] : "",
    `px-${px}`,
    props.className,
    isDeactivated ? styleDeactivated : "",
  ].join(" ");
  const component = props.href ? (
    <Link href={props.href}>
      <a className={styles} title={props.title}>
        {props.children}
      </a>
    </Link>
  ) : (
    <button className={styles} aria-label={props.ariaLabel || props.title} title={props.title}>
      {props.children}
    </button>
  );
  return component;
};
