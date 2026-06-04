import type { ReactNode, ButtonHTMLAttributes } from "react";

import type { To } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  children: ReactNode;

  variant?: ButtonVariant;
  size?: ButtonSize;

  iconLeft?: ReactNode;
  iconRight?: ReactNode;

  className?: string;
}

export type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    to?: undefined;
  };

export type LinkButtonProps = ButtonBaseProps & {
  to: To;
};

export type ButtonProps = NativeButtonProps | LinkButtonProps;
