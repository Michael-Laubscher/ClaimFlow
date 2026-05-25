import { Card } from "@/shared/components/design-system/surface/Card"
import { Typography } from "@/shared/components/design-system/typography/Typography"

type FeatureRowProps = {
  label: string
  icon: React.ReactNode
}

export function FeatureRow({ label, icon }: FeatureRowProps) {
  return (
    <Card
      variant="default"
      padding="sm"
      className="flex items-center gap-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-success text-white">
        {icon}
      </div>

      <Typography variant="body-sm" className="font-medium">
        {label}
      </Typography>
    </Card>
  )
}