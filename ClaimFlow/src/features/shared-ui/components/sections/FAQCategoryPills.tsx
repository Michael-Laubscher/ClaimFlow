interface Props {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}

export function FAQCategoryPills({ categories, active, onChange }: Props) {
  return (
    <div
      className="
        flex
        gap-3
        overflow-x-auto
        pb-3
        scrollbar-none
      "
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            whitespace-nowrap
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-200

            ${
              active === cat
                ? `
                  bg-green-600
                  text-white
                  shadow-[0_8px_20px_-8px_rgba(22,163,74,0.55)]
                  ring-1
                  ring-green-500/30
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_24px_-8px_rgba(22,163,74,0.65)]
                `
                : `
                  bg-white
                  text-slate-600
                  border
                  border-slate-200
                  shadow-[0_4px_12px_-6px_rgba(15,23,42,0.25)]
                  hover:-translate-y-0.5
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:shadow-[0_8px_18px_-8px_rgba(15,23,42,0.35)]
                `
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
