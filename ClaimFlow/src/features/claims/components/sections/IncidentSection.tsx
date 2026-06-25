import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { useFormContext } from "react-hook-form";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

export default function IncidentSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedClaimType = watch("claimType");

  const claimTypes = [
    { value: "collision", label: "Collision" },
    { value: "theft", label: "Theft" },
    { value: "fire", label: "Fire" },
    { value: "vandalism", label: "Vandalism" },
    { value: "other", label: "Other" },
  ] as const;

  return (
    <FormSection title="Incident Details" description="Tell us what happened">

      {/* CLAIM TYPE */}
      <select {...register("claimType")} className="input">
        {claimTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>

      {errors.claimType?.message && (
        <Text className="text-red-500 text-sm">
          {String(errors.claimType.message)}
        </Text>
      )}

      {/* DATE + TIME */}
      <Input type="date" {...register("incidentDate")} />
      {errors.incidentDate?.message && (
        <Text className="text-red-500 text-sm">
          {String(errors.incidentDate.message)}
        </Text>
      )}

      <Input type="time" {...register("incidentTime")} />
      {errors.incidentTime?.message && (
        <Text className="text-red-500 text-sm">
          {String(errors.incidentTime.message)}
        </Text>
      )}

      {/* LOCATION */}
      <Input placeholder="Country" {...register("country")} />
      {errors.country?.message && (
        <Text className="text-red-500 text-sm">{String(errors.country.message)}</Text>
      )}

      <Input placeholder="City" {...register("city")} />
      {errors.city?.message && (
        <Text className="text-red-500 text-sm">{String(errors.city.message)}</Text>
      )}

      <Input placeholder="Exact Location" {...register("exactLocation")} />
      {errors.exactLocation?.message && (
        <Text className="text-red-500 text-sm">
          {String(errors.exactLocation.message)}
        </Text>
      )}

      {/* DESCRIPTION */}
      <textarea
        {...register("description")}
        placeholder="Describe incident"
        className="w-full rounded-xl border px-4 py-3"
      />

      {errors.description?.message && (
        <Text className="text-red-500 text-sm">
          {String(errors.description.message)}
        </Text>
      )}

      {/* POLICE (MERGED) */}
      <Input
        placeholder="Police report number (optional)"
        {...register("policeReportNumber")}
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("anyoneInjured")} />
        Anyone injured
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("emergencyServicesCalled")} />
        Emergency services / police called
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("vehicleDrivable")} />
        Vehicle drivable
      </label>

      {/* CONDITIONAL */}
      {selectedClaimType === "collision" && (
        <Input placeholder="Vehicle Registration Number" />
      )}
    </FormSection>
  );
}