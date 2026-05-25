import { useFormContext } from "react-hook-form";

import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";

export default function PolicySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <GlassCard className="p-6 my-8">
      <Stack gap="md">
        {/* Section title */}
        <Typography variant="body-3xl" className="text-[--color-slate-900]">
          Policy Details
        </Typography>

        {/* Input field */}
        <div>
          <input
            {...register("policyNumber")}
            placeholder="Policy Number"
            className="
              w-full
              rounded-md
              border
              border-[--color-slate-200]
              bg-white
              px-4
              py-2
              text-sm
              text-[--color-slate-900]
              outline-none
              focus:border-[--color-orange]
              focus:ring-2
              focus:ring-[--color-orange]/20
              transition
            "
          />

          {/* Error */}
          {errors.policyNumber?.message && (
            <Typography className="text-red-500 text-sm mt-1">
              {errors.policyNumber.message as string}
            </Typography>
          )}
        </div>
      </Stack>
    </GlassCard>
  );
}
