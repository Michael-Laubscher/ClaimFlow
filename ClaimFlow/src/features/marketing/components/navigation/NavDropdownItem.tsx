import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { navStyles } from "@/shared/components/design-system/tokens/nav";
import { Typography } from "@/shared/components/design-system/typography/Typography";

interface Props {
  to: string;

  label: string;
  desc?: string;

  onClick?: () => void;
}

export function NavDropdownItem({ to, label, desc, onClick }: Props) {
  return (
    <NavLink to={to} onClick={onClick} className={navStyles.item}>
      <Typography variant="label-md" color="primary">
        {label}
      </Typography>

      {desc && (
        <Typography variant="body-sm" color="muted">
          {desc}
        </Typography>
      )}
    </NavLink>
  );
}
