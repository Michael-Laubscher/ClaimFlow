export function mapStatusToVariant(status: string) {
  switch (status.toLowerCase()) {
    case "active":
    case "approved":
    case "completed":
      return "success";

    case "pending":
    case "under_review":
    case "processing":
      return "warning";

    case "rejected":
    case "failed":
    case "cancelled":
      return "danger";

    case "draft":
      return "neutral";

    default:
      return "info";
  }
}
