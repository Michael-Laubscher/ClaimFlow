import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { NavbarShell } from "@/shared/components/design-system/navigation/NavbarShell";
import { MenuIcon, XIcon } from "@/shared/components/design-system/svg/icons";
import { useDisclosure } from "@/shared/hooks/useDisclosure";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { NavbarBrand } from "./NavbarBrand";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { TopBar } from "./TopBar";
import { ButtonLink } from "@/shared/components/design-system/buttons/ButtonLink";

export function Navbar() {
  const location = useLocation();

  const mobileMenu = useDisclosure();

  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const scrolled = useScrolled(24);

  useEffect(() => {
    mobileMenu.close();

    setDesktopDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <TopBar />

      <NavbarShell scrolled={scrolled}>
        <Container>
          <Stack direction="row" align="center" justify="between" py="4">
            <NavbarBrand />

            <DesktopNavigation
              pathname={location.pathname}
              openDropdown={desktopDropdown}
              setOpenDropdown={setDesktopDropdown}
            />

            <div className="hidden lg:visible lg:flex">
              <ButtonLink to="claims/get-quote" variant="primary">
                Get Quote
              </ButtonLink>
            </div>

            <button
              onClick={mobileMenu.toggle}
              className="rounded-xl p-2 transition hover:bg-[--color-slate-50] lg:hidden"
            >
              {mobileMenu.open ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </Stack>
        </Container>

        <MobileNavigation open={mobileMenu.open} pathname={location.pathname} />
      </NavbarShell>
    </>
  );
}
