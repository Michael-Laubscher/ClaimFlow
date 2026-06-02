import { CheckIcon, ClockIcon, GlobeIcon, ShieldIcon, UsersIcon } from "@/shared/components/design-system/svg/icons/lucide/index";
import { ArrowRightIcon, PlaceholderIcon } from "./icons";

export const iconMap = {
  placeholder: PlaceholderIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  users: UsersIcon,
} as const;
