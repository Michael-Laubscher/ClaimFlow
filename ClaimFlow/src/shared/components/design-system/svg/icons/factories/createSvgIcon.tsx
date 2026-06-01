import type { ComponentType, SVGProps } from "react";

type Props = {
  size?: number;
  className?: string;
  ariaLabel?: string;
};

export function createSvgIcon(Icon: ComponentType<SVGProps<SVGSVGElement>>, defaultSize = 20) {
  return function SvgIcon({ size, className, ariaLabel }: Props) {
    const finalSize = size ?? defaultSize;

    return <Icon width={finalSize} height={finalSize} className={className} aria-label={ariaLabel} aria-hidden={!ariaLabel} />;
  };
}
