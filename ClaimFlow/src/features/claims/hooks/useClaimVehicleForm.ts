import { useForm } from "react-hook-form";
import type { ClaimVehicleData } from "../schemas/claim-vehicle.schema";

type Props = {
  defaultValues?: Partial<ClaimVehicleData>;
};

export function useClaimVehicleForm({ defaultValues }: Props = {}) {
  return useForm<ClaimVehicleData>({
    defaultValues,
  });
}