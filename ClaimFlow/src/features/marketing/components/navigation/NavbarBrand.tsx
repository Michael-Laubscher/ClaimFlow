import { Link } from "react-router-dom";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Text } from "@/shared/components/design-system/typography/Text";

export function NavbarBrand() {
  return (
    <Link to="/" className="flex items-center gap-3 py-5">
      <img src={AskariLogo} alt="Askari Insurance" className="h-10 w-auto object-contain" />

      <Stack>
        <div className="hidden leading-none sm:flex">
          <Text variant="sm" color="muted">
            Protecting African Trade
          </Text>
        </div>
      </Stack>
    </Link>
  );
}
