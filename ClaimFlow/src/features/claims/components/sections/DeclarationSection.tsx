import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Text } from "@/shared/components/design-system/typography/Text";
import { useFormContext } from "react-hook-form";

export function DeclarationSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { formState } = useFormContext();

  console.log("FORM ERRORS:", formState.errors);

  return (
    <FormSection
      title="Declaration"
      description="Confirm the information provided"
    >
      <Text>
        I declare that the information supplied in this claim
        is true and correct to the best of my knowledge.
      </Text>

      
      <input
        type="text"
        {...register("signedBy")}
        placeholder="Signed by (full name)"
        className="mt-4 w-full rounded-xl border px-4 py-3"
      />

      {errors.signedBy && (
        <p className="text-sm text-red-600">
          {errors.signedBy.message as string}
        </p>
      )}

      {/* ACCEPTED */}
      <label className="flex items-center gap-3 mt-4">
        <input type="checkbox" {...register("accepted")} />
        <span>I accept and confirm this declaration</span>
      </label>

      {errors.accepted && (
        <p className="text-sm text-red-600">
          {errors.accepted.message as string}
        </p>
      )}

      
      <textarea
        {...register("additionalComments")}
        placeholder="Additional comments (optional)"
        className="mt-4 w-full rounded-xl border px-4 py-3"
      />
    </FormSection>
  );
}