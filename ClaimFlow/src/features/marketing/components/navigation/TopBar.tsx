import { Link } from "react-router-dom";

import { ClipboardIcon } from "@/shared/components/design-system/svg/icons";

import { Container } from "@/shared/components/design-system/layout/Container";

import { Stack } from "@/shared/components/design-system/layout/Stack";

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-950 py-3 text-white/80">
      <Container>
        <Stack direction="row" align="center" justify="between">
          <Link to="/claims/" className="flex items-center gap-2 text-xs transition-colors hover:text-white">
            <ClipboardIcon className="h-3.5 w-3.5" />

            <span>File a Claim</span>
          </Link>
        </Stack>
      </Container>
    </div>
  );
}
