import { FooterHeading } from "@/shared/components/design-system/typography/FooterHeading";
import { Card } from "../composite/card/Card";
import { FooterContactItem } from "./FooterContactItem";
import type { FooterConfig } from "@/shared/types/footer.types";
interface Props {
  contact: FooterConfig["contact"];
}

export function FooterContactCard({ contact }: Props) {
  return (
    <div className="mt-14">
      <FooterHeading>Contact</FooterHeading>

      <Card className="p-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {contact.map((item) => (
            <FooterContactItem key={item.label} item={item} />
          ))}
        </div>
      </Card>
    </div>
  );
}
