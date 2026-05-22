export const isActiveRoute = (pathname: string, to?: string) => {
  if (!to) return false;

  return pathname === to || (to !== "/" && pathname.startsWith(to));
};
