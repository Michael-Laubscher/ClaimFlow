import { PlaceholderIcon } from "./PlaceholderIcon";
import { CheckIcon } from "./CheckIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";

import { ClockIcon, GlobeIcon, ShieldIcon, UsersIcon, TruckIcon } from "lucide-react";
import { LiabilityIcon } from "./LiabilityIcon";
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
