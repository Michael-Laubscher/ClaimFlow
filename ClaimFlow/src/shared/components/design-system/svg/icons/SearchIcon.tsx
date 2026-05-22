import clsx from "clsx";
import { Search } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function SearchIcon({
    className,
    size = 20,
}: IconProps) {
    return (
        <Search
            size={size}
            className={clsx(className)}
            aria-hidden="true"
        />
    );
}