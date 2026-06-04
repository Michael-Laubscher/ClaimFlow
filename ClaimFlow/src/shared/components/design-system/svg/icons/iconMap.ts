
import { ClockIcon, GlobeIcon, ShieldIcon, TruckIcon, UsersIcon } from "lucide-react";
import { ArrowRightIcon, PlaceholderIcon } from ".";
import { CheckIcon, LiabilityIcon } from "./lucide";
import { MapPinIcon } from "./MapPinIcon";

export const lucideIconMap = {
  placeholder: PlaceholderIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,

  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  users: UsersIcon,

  truck: TruckIcon,
  location: MapPinIcon,
  document: LiabilityIcon

} as const;
