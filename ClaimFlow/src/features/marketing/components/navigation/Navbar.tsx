import { useDisclosure } from "@/shared/hooks/useDisclosure";
import { useScrolled } from "@/shared/hooks/useScrolled";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { NavbarShell } from "@/shared/components/design-system/navigation/NavbarShell";

import { NavbarBrand } from "./NavbarBrand";
import { Navigation } from "./Navigation";
import { TopBar } from "./TopBar";

import { NAV_LINKS } from "@/features/shared-ui/configs/nav.config";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { cn } from "@/shared/lib/cn";

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

            {/* Desktop navigation */}

            <div
              className="
              hidden
              lg:flex
            "
            >
              <Navigation items={NAV_LINKS} layout="desktop" />
            </div>

            {/* Desktop CTA */}

            <div
              className="
              hidden
              lg:flex
            "
            >
              <Button
                to="/claims/get-quote"
                size="lg"
                className="
                  rounded-full
                  px-7
                  shadow-lg
                  shadow-blue-900/20
                "
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile toggle */}

            <button
              onClick={mobileMenu.toggle}
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition
              hover:bg-slate-50
              lg:hidden
              "
            >
              <div className="space-y-1.5">
                <span className={cn("block h-0.5 w-5 bg-slate-700 transition", mobileMenu.open && "translate-y-2 rotate-45")} />

                <span className={cn("block h-0.5 w-5 bg-slate-700 transition", mobileMenu.open && "opacity-0")} />

                <span className={cn("block h-0.5 w-5 bg-slate-700 transition", mobileMenu.open && "-translate-y-2 -rotate-45")} />
              </div>
            </button>
          </Stack>
        </Container>

        {/* Mobile navigation */}

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",

            mobileMenu.open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className="
            border-t
            border-slate-100
            bg-white
            px-6
            py-5
          "
          >
            <Navigation items={NAV_LINKS} layout="mobile" />

            <Button
              to="/claims/get-quote"
              size="lg"
              className="
                mt-5
                w-full
                rounded-full
              "
            >
              Get Quote
            </Button>
          </div>
        </div>
      </NavbarShell>
    </>
  );
}
