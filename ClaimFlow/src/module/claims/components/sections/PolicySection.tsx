import { useFormContext } from "react-hook-form";

export default function PolicySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-lg">Policy Details</h2>

      <input
        {...register("policyNumber")}
        placeholder="Policy Number"
        className="input"
      />
      <p className="text-red-500">
        {errors.policyNumber?.message as string}
      </p>
    </div>
  );
}