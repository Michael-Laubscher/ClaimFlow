import { Link } from "react-router-dom";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { Text } from "@/shared/components/design-system/typography/Text";

export function NavbarBrand() {
  return (
    <Link
      to="/"
      className="
group
flex
items-center
gap-4
py-5
"
    >
      <img
        src={AskariLogo}
        alt="Askari Insurance"
        className="
h-11
w-auto
transition
duration-300
group-hover:scale-105
"
      />

      <div
        className="
hidden
leading-tight
sm:block
"
      >
        <Text
          variant="sm"
          className="
font-medium
text-slate-700
"
        >
          Askari Insurance
        </Text>

        <Text variant="xs" color="muted">
          Protecting African Trade
        </Text>
      </div>
    </Link>
  );
}
