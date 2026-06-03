import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Text } from "@/shared/components/design-system/typography/Text";
import { useNavigate } from "react-router-dom";

const CLAIMS = [
  {
    number: "CLM-2026-12345",
    type: "Vehicle Accident",
    amount: "R120,000",
    status: "Under Review",
    date: "08 May 2026",
  },
];

export default function ClaimsPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageBanner title="Claims Centre" subtitle="Manage and track all your insurance claims" />

      <Section className="bg-slate-50 py-20">
        <Container>
          <Stack gap="xl">
            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-[#0f2044]">5</h3>
                <Text color="muted">Total Claims</Text>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-orange-500">1</h3>
                <Text color="muted">In Progress</Text>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-green-600">3</h3>
                <Text color="muted">Settled</Text>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-[#0f2044]">R475,000</h3>
                <Text color="muted">Total Paid</Text>
              </Card>
            </div>

            {/* Claims Table */}
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b">
                <Text variant="title">Claims History</Text>

                <Button variant="primary" onClick={() => navigate("/claims/new")}>
                  File New Claim
                </Button>
              </div>

              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 text-left">Claim No.</th>
                    <th className="p-4 text-left">Type</th>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Amount</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {CLAIMS.map((claim) => (
                    <tr key={claim.number} className="border-t">
                      <td className="p-4">{claim.number}</td>
                      <td className="p-4">{claim.type}</td>
                      <td className="p-4">{claim.date}</td>
                      <td className="p-4">{claim.amount}</td>
                      <td className="p-4">{claim.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
