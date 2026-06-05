import { Button } from "../primitives/buttons/Button";
import { ArrowRightIcon } from "../svg/icons";

export function HeroActions() {
  return (
    <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Button variant="primary" to="/claims/get-quote" size="lg" className="w-full sm:w-auto bg-[#E65731] rounded-md font-bold transition-transform duration-300 hover:scale-110" iconRight={<ArrowRightIcon size={20} />}>
        Get Instant Quote
      </Button>

      <Button variant="outline" to="/products" size="lg" className="w-full sm:w-auto rounded-md bg-white text-[#0A2540] font-bold transition-transform duration-300 hover:scale-110 hover:bg-[#F8FAFC]" >
        View Products
      </Button>
    </div>
  );
}
