import { CONTACT_ICONS } from "@/shared/constants/footer.constants";
import { IconSurface } from "../composite/card/IconSurface";
import type { FooterContactItem as Item } from "@/shared/types/footer.types";

interface Props {
  item: Item;
}

export function FooterContactItem({ item }: Props) {
  const Icon = CONTACT_ICONS[item.type];

  const Wrapper = item.href ? "a" : "div";

  return (
    <Wrapper
      {...(item.href && { href: item.href })}
      className="
        flex
        min-w-0
        items-start
        gap-3
        text-white
        transition-colors
        hover:text-white/80
      "
    >
      <IconSurface>
        <Icon className="h-4 w-4 text-white" />
      </IconSurface>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-white">{item.label}</p>

        <p className="mt-1 break-words text-sm leading-relaxed text-slate-200">{item.value}</p>
      </div>
    </Wrapper>
  );
}
