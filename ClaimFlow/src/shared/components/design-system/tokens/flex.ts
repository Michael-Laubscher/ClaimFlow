export const flexAlign = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export const flexJustify = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  end: "justify-end",
} as const;

export const flexDirection = {
  row: "flex-row",
  col: "flex-col",
} as const;

export type FlexAlign = keyof typeof flexAlign;
export type FlexJustify = keyof typeof flexJustify;
export type FlexDirection = keyof typeof flexDirection;
