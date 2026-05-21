import { trustPillars } from "@/features/shared-ui/configs";
import { iconMap } from "@/shared/components/design-system/svg/icons";
import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons/PlaceholderIcon";

export function TrustSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-4">
          {trustPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || PlaceholderIcon;

            return (
              <div
                key={pillar.id}
                className="flex flex-col items-center text-center rounded-2xl border p-6"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, #233C7B 0%, #22447B 7.14%, #224C7C 14.29%, #21547C 21.43%, #205B7C 28.57%, #1F637C 35.71%, #1E6A7C 42.86%, #1C727B 50%, #1B797A 57.14%, #19807A 64.29%, #188879 71.43%, #168F77 78.57%, #149676 85.71%, #119E74 92.86%, #0EA572 100%)`,
                    borderRadius: "16px",
                  }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-semibold">{pillar.label}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {pillar.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}