import { useFormContext } from "react-hook-form";

export default function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border p-4 rounded my-8">
      <h2 className="font-bold text-lg">Personal Details</h2>

      <input {...register("fullName")} placeholder="Full Name" className="input" />
      <p className="text-red-500">
        {errors.fullName?.message as string}
      </p>

      <input {...register("email")} placeholder="Email" className="input" />
      <p className="text-red-500">
        {errors.email?.message as string}
      </p>
    </div>
  );
}