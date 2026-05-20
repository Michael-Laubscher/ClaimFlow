import { PlaceholderIcon } from "./PlaceholderIcon";
import { CheckIcon } from "./CheckIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { ClockIcon, GlobeIcon, ShieldIcon, UsersIcon } from "lucide-react";

;

export const iconMap = {
  placeholder: PlaceholderIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,

  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  users: UsersIcon,
} as const;