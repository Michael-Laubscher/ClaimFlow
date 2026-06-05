import { CheckIcon, ClockIcon, GlobeIcon, LiabilityIcon, ShieldIcon, TruckIcon, UsersIcon } from "@/shared/components/design-system/svg/icons/lucide/index";
import { ArrowRightIcon, MapPinIcon, PlaceholderIcon } from "./icons";

export const iconMap = {
  placeholder: PlaceholderIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  users: UsersIcon,
  truck: TruckIcon,
  liability: LiabilityIcon,
  location: MapPinIcon,
} as const;
