import { useDisclosure } from "@/shared/hooks/useDisclosure";
import { useScrolled } from "@/shared/hooks/useScrolled";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { NavbarShell } from "@/shared/components/design-system/navigation/NavbarShell";

import { NavbarBrand } from "./NavbarBrand";
import { Navigation } from "./Navigation";
import { TopBar } from "./TopBar";

import { NAV_LINKS } from "@/features/shared-ui/configs/nav.config";
import { Button } from "@/shared/components/design-system/primitives/buttons";

export function Navbar() {
  const scrolled = useScrolled(24);

  const mobileMenu = useDisclosure();

  return (
    <>
      <TopBar />

      <NavbarShell scrolled={scrolled}>
        <Container>
          <Stack direction="row" align="center" justify="between">
            <NavbarBrand />

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex">
              <Navigation items={NAV_LINKS} layout="desktop" />
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Button to="claims/get-quote" variant="primary" size="lg">
                Get Quote
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <Button
              onClick={mobileMenu.toggle}
              className="
                rounded-xl
                p-2
                transition
                hover:bg-[--color-slate-50]
                lg:hidden
              "
            >
              {mobileMenu.open ? "✕" : "☰"}
            </Button>
          </Stack>
        </Container>

        {/* MOBILE NAV */}
        <div className="lg:hidden">
          <Navigation items={NAV_LINKS} layout="mobile" />

          {mobileMenu.open && (
            <div
              className="
                border-t
                bg-white
                px-6
                py-4
              "
            >
              <Button to="/products" size="lg" variant="primary">
                Get Quote
              </Button>
            </div>
          )}
        </div>
      </NavbarShell>
    </>
  );
}
