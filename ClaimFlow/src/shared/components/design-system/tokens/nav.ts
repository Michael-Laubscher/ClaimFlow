export const navStyles = {
  trigger: {
    base: `
      inline-flex
      items-center
      transition-all
      duration-200
    `,

    desktop: `
      rounded-xl
    `,

    mobile: `
      w-full
      justify-between
    `,

    icon: `
      transition-transform
      duration-200
    `,

    iconOpen: `
      rotate-180
    `,

    toggle: `
      flex
      items-center
      justify-center
      px-3
      rounded-r-xl
      transition-colors
      hover:bg-white/10
    `,
  },

  dropdown: {
    base: `
      z-50
      flex
      flex-col
    `,

    desktop: `
      absolute
      left-0
      top-full
      mt-2
      w-72
      px-2
      py-2
    `,

    mobile: `
      ml-3
      mt-2
      px-2
      py-2
    `,
  },

  item: `
    flex
    flex-col
    items-start
    gap-1
    rounded-xl
    px-3
    py-3
    transition-colors
    hover:bg-white/10
    border-b
    border-black/10
    last:border-b-0
  `,
};
