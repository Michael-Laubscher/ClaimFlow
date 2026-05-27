import { Link } from "react-router-dom";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Typography } from "@/shared/components/design-system/typography/Typography";

export function NavbarBrand() {
  return (
    <Link to="/" className="flex items-center gap-3 py-5">
      <img src={AskariLogo} alt="Askari Insurance" className="h-10 w-auto object-contain" />

      <Stack>
        <div className="hidden leading-none sm:flex">
          <Typography variant="label-sm" color="muted">
            Protecting African Trade
          </Typography>
        </div>
      </Stack>
    </Link>
  );
}
