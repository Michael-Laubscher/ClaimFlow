import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { navStyles } from "@/shared/components/design-system/tokens/nav";
import { Text } from "@/shared/components/design-system/typography/Text";

interface Props {
  to: string;

  label: string;
  desc?: string;

  onClick?: () => void;
}

export function NavDropdownItem({ to, label, desc, onClick }: Props) {
  return (
    <NavLink to={to} onClick={onClick} className={navStyles.item}>
      <Text variant="lead" color="default">
        {label}
      </Text>

      {desc && (
        <Text variant="sm" color="muted">
          {desc}
        </Text>
      )}
    </NavLink>
  );
}
