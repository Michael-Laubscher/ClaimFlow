import { FormSection } from "@/shared/components/design-system/forms/FormSection";

interface Props {
  claimData: any;
}

export default function ClaimReviewSection({ claimData }: Props) {
  return (
    <FormSection
      title="Review Your Claim"
      description="
 Please confirm your details before submitting your claim.
 "
    >
      <div className="space-y-6">
        <section>
          <h3
            className="
font-semibold
text-slate-900
"
          >
            Policy Details
          </h3>

          <div
            className="
mt-3
rounded-xl
bg-slate-50
p-4
text-sm
space-y-2
"
          >
            <p>
              Policy Number:
              <span className="font-medium"> {claimData.step1?.policyNumber ?? "-"}</span>
            </p>

            <p>
              Claim Type:
              <span className="font-medium"> {claimData.step1?.claimType ?? "-"}</span>
            </p>
          </div>
        </section>

        <section>
          <h3
            className="
font-semibold
text-slate-900
"
          >
            Incident
          </h3>

          <div
            className="
mt-3
rounded-xl
bg-slate-50
p-4
text-sm
"
          >
            <p>
              Location:
              <span className="font-medium"> {claimData.step2?.city ?? "-"}</span>
            </p>
          </div>
        </section>

        <section>
          <h3
            className="
font-semibold
text-slate-900
"
          >
            Vehicle
          </h3>

          <div
            className="
mt-3
rounded-xl
bg-slate-50
p-4
text-sm
"
          >
            <p>
              Registration:
              <span className="font-medium"> {claimData.vehicle?.registrationNumber ?? "-"}</span>
            </p>
          </div>
        </section>

        <section>
          <h3
            className="
font-semibold
text-slate-900
"
          >
            Declaration
          </h3>

          <div
            className="
mt-3
rounded-xl
bg-green-50
border
border-green-100
p-4
text-sm
text-green-800
"
          >
            ✓ Declaration accepted
          </div>
        </section>
      </div>
    </FormSection>
  );
}
