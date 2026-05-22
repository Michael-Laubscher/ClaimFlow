import { ArrowRightIcon } from '@/shared/components/design-system/svg';

import { Button } from '@/shared/components/design-system/buttons/Button';

export function HeroActions() {
  return (
    <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Button
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        iconRight={<ArrowRightIcon size={20} />}
      >
        Get Instant Quote
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="w-full sm:w-auto"
      >
        View Products
      </Button>
    </div>
  );
}