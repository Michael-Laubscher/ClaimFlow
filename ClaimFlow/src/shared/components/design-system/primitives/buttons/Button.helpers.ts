import type { ButtonProps, LinkButtonProps } from "./Button.types";

export const isLinkButton = (props: ButtonProps): props is LinkButtonProps => {
  return props.to !== undefined;
};
