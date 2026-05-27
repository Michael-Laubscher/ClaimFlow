import { useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";

export default function IncidentSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const claimType = watch("claimType");

  return (
    <FormSection title="Incident Details" description="Tell us what happened">
      <select {...register("claimType")} className="input">
        <option value="vehicle">Vehicle</option>
        <option value="property">Property</option>
        <option value="other">Other</option>
      </select>

      <Input type="date" {...register("incidentDate")} />

      {errors.incidentDate?.message && <Typography className="text-red-500 text-sm">{errors.incidentDate.message as string}</Typography>}

      <textarea {...register("description")} placeholder="Describe incident" className="w-full rounded-xl border px-4 py-3" />

      {claimType === "vehicle" && <Input placeholder="Vehicle Registration Number" />}
    </FormSection>
  );
}
