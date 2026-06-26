import { Link } from "react-router-dom";

import { Container } from "@/shared/components/design-system/layout/Container";

import { ClipboardIcon } from "@/shared/components/design-system/svg/icons";

export function TopBar() {
  return (
    <div
      className="
bg-gradient-to-r
from-blue-950
via-blue-900
to-slate-900
text-white
"
    >
      <Container>
        <div
          className="
flex
items-center
justify-between
py-2.5
text-xs
"
        >
          <div
            className="
hidden
items-center
gap-2
text-white/80
sm:flex
"
          >
            <span
              className="
h-2
w-2
rounded-full
bg-green-400
"
            />
            Claims support available 24/7
          </div>

          <Link
            to="/claims"
            className="
flex
items-center
gap-2
font-medium
text-white
transition
hover:text-blue-200
"
          >
            <ClipboardIcon
              className="
h-4
w-4
"
            />
            File a Claim
          </Link>
        </div>
      </Container>
    </div>
  );
}
