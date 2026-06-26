import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Badge } from "@/shared/components/design-system/primitives/Badge";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

export interface ContentCardData {
  id: number;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  color: string;
}

interface ContentCardProps {
  content: ContentCardData;
  cardVariant?: React.ComponentProps<typeof Card>["variant"];
  badgeVariant?: React.ComponentProps<typeof Badge>["variant"];
  imageHeight?: string;
  ctaLabel?: string;
  ctaVariant?: React.ComponentProps<typeof Button>["variant"];
  interactive?: boolean;
  onClick?: () => void;
}

export function ContentCard({ content, cardVariant, badgeVariant = "default", imageHeight = "h-44", ctaLabel = "Read more", ctaVariant = "secondary", interactive = true, onClick }: ContentCardProps) {
  return (
    <Card
      variant={cardVariant}
      interactive={interactive}
      onClick={onClick}
      className="
    group
    overflow-hidden
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-slate-200/50
  "
    >
      <div
        className={`
${imageHeight}
${content.color}
flex
items-center
justify-center
transition
group-hover:scale-[1.02]
`}
      >
        <div
          className="
h-14
w-14
rounded-full
bg-white/60
backdrop-blur
"
        />
      </div>

      <div className="p-6">
        <Stack direction="row" justify="between" align="center">
          <Badge variant={badgeVariant}>{content.category}</Badge>

          <Text variant="sm" color="muted">
            {content.readTime}
          </Text>
        </Stack>

        <div className="mt-4">
          <Heading size="lg">{content.title}</Heading>

          <Text color="muted" className="mt-2">
            {content.excerpt}
          </Text>
        </div>

        <div
          className="
mt-6
border-t
border-slate-100
pt-4
"
        >
          <Stack direction="row" justify="between" align="center">
            <Text variant="sm" color="muted">
              {content.date}
            </Text>

            <Button variant={ctaVariant} size="sm">
              {ctaLabel}
            </Button>
          </Stack>
        </div>
      </div>
    </Card>
  );
}
