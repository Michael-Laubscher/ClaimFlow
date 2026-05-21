import { whyFeatures } from "@/shared/types/features";
import { CheckIcon } from "@/shared/components/design-system/svg";

export function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          
          <p className="inline-block px-6 py-2 bg-green-100 text-green-700 font-bold rounded-full">
            Why Choose Us
          </p>

        
          <p className="mt-4 text-3xl md:text-4xl font-bold">
            Why Transporters Choose Askari
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          
          <div className="space-y-4">
            {whyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center gap-3 bg-white rounded-xl p-4"
              >
               
                <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>

                <p className="text-sm font-medium">{feature.label}</p>
              </div>
            ))}

           
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Learn More About Us
            </button>
          </div>

          
          <div className="flex justify-center">
            <img
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              className="rounded-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}