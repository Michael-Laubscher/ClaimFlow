
import { ArrowRightIcon, ClockIcon, GlobeIcon, ShieldIcon, TruckIcon, UsersIcon } from "lucide-react";
import { CheckIcon, LiabilityIcon } from "./lucide";
import { MapPinIcon } from "./MapPinIcon";

export const lucideIconMap = {
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
