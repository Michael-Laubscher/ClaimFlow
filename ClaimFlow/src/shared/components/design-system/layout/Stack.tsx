import { cn } from "@/shared/lib/cn";
import React from "react";
import { type FlexAlign, type FlexDirection, type FlexJustify, flexAlign, flexDirection, flexJustify } from "../tokens/flex";
import { type Spacing, spacing } from "../tokens/spacing";

type StackProps = {
  children: React.ReactNode;
  direction?: FlexDirection;
  gap?: Spacing;
  align?: FlexAlign;
  justify?: FlexJustify;
  className?: string;
};

export function Stack({ children, direction = "col", gap = "md", align, justify, className }: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        flexDirection[direction],
        spacing[gap],
        align && flexAlign[align],
        justify && flexJustify[justify],
        className // ✅ allow extension
      )}
    >
      {children}
    </div>
  );
}
