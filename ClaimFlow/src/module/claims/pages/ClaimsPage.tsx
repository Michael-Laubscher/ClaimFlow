import ClaimForm from "../components/ClaimForm";

export default function ClaimsPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Claim</h1>
      <ClaimForm />
    </div>
  );
}