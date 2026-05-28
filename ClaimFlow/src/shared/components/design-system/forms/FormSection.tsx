
import { Card } from "../composite/card/Card";
import { Stack } from "../layout/Stack";
import { Typography } from "../typography/Typography";

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
          <Typography variant="body-3xl">{title}</Typography>

          {description && <Typography color="muted">{description}</Typography>}
        </Stack>

        {children}
      </Stack>
    </Card>
  );
}
