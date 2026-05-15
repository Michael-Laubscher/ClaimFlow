import { useFormContext } from "react-hook-form";

export default function IncidentSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const claimType = watch("claimType");

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-lg">Incident Details</h2>

      <select {...register("claimType")} className="input">
        <option value="vehicle">Vehicle</option>
        <option value="property">Property</option>
        <option value="other">Other</option>
      </select>

      <input type="date" {...register("incidentDate")} className="input" />
      <p className="text-red-500">
        {errors.incidentDate?.message as string}
      </p>

      <textarea
        {...register("description")}
        placeholder="Describe the incident"
        className="input"
      />
      <p className="text-red-500">
        {errors.description?.message as string}
      </p>

      {/* Dynamic Fields */}
      {claimType === "vehicle" && (
        <input placeholder="Vehicle Registration Number" className="input" />
      )}
    </div>
  );
}