export interface NavChildItem {
  label: string;
  to: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  to?: string;
  children?: NavChildItem[];
}

export interface TopbarLink {
  label: string;
  to: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}
