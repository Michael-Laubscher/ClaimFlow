import { Button } from "../primitives/buttons/Button";
import { ArrowRightIcon } from "../svg/icons";

export function HeroActions() {
  return (
    <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Button to="/claims/get-quote" variant="primary" size="lg" className="w-full sm:w-auto" iconRight={<ArrowRightIcon size={20} />}>
        Get Instant Quote
      </Button>

      <Button to="/products" variant="outline" size="lg" className="w-full sm:w-auto">
        View Products
      </Button>
    </div>
  );
}
