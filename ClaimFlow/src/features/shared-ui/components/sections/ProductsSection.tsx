import { Link } from "react-router-dom";

import { homeProducts } from "@/shared/types/products";
import { iconMap } from "@/shared/components/design-system/svg/icons";
import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons/PlaceholderIcon";

const themeStyles = {
  primary: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-orange-600 text-white",
  purple: "bg-purple-600 text-white",
};

export function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Insurance Products</h2>
          <p className="mt-2 text-muted-foreground">
            Flexible coverage solutions for businesses and individuals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {homeProducts.map((product) => {
            const iconKey = (product.icon || "").toLowerCase() as keyof typeof iconMap;
            const Icon = iconMap[iconKey] || PlaceholderIcon;

            return (
              <Link
                key={product.id}
                to={product.to}
                className="group flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-md ${
                    themeStyles[product.theme] || themeStyles.primary
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="font-semibold text-lg group-hover:text-primary">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground flex-grow">
                  {product.shortDesc}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-orange-600 group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}