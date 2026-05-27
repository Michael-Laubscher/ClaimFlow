import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { Badge } from "@/shared/components/design-system/feedback/Badge";
import { CheckIcon } from "@/shared/components/design-system/svg";

export function HeroBadge() {
  return (
    <Badge className="trusted-badge mb-8">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
        <CheckIcon size={12} className="text-white" />
      </div>

      {HERO_CONTENT.badge}
    </Badge>
  );
}
