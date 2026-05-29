import { Link } from "react-router-dom";

import { ArrowRightIcon } from "@/shared/components/design-system/svg";
import { Button } from "../primitives/buttons/Button";

export function HeroActions() {
  return (
    <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Button variant="primary" size="lg" className="w-full sm:w-auto" iconRight={<ArrowRightIcon size={20} />}>
        <Link to="/claims/get-quote">Get Instant Quote</Link>
      </Button>

      <Button variant="outline" size="lg" className="w-full sm:w-auto">
        <Link to="/products">View Products</Link>
      </Button>
    </div>
  );
}
