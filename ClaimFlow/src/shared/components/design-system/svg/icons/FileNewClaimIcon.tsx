import clsx from "clsx";
import { FileText } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function FileNewClaimIcon({
    className,
    size = 20,
}: IconProps) {
    return (
        <FileText
            size={size}
            className={clsx(className)}
            aria-hidden="true"
        />
    );
}
