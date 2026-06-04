import { Card } from "../composite/card/Card";
import { Stack } from "../layout/Stack";
import { Text } from "../typography/Text";

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function FormSection({ title, description, children }: Props) {
  return (
    <Card variant="glass" className="p-6">
      <Stack gap="md">
        <Stack gap="xs">
          <Text color="default" variant="title">
            {title}
          </Text>
          {description && <Text color="muted">{description}</Text>}
        </Stack>

        {children}
      </Stack>
    </Card>
  );
}
