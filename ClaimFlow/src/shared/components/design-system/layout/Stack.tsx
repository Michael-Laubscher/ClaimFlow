import React from "react";
import { cn } from "@/shared/lib/cn";
import { type FlexAlign, type FlexDirection, type FlexJustify, flexAlign, flexDirection, flexJustify } from "../tokens/flex";
import { type Spacing, spacing } from "../tokens/spacing";

type StackProps = {
  children: React.ReactNode;
  direction?: FlexDirection;
  gap?: Spacing;
  align?: FlexAlign;
  justify?: FlexJustify;
};

export function Stack({ children, direction = "col", gap = "md", align, justify }: StackProps) {
  return <div className={cn("flex", flexDirection[direction], spacing[gap], align && flexAlign[align], justify && flexJustify[justify])}>{children}</div>;
}
