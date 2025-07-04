import { Link } from "react-router-dom";
import { SidebarContainer, SidebarNav, SidebarLink } from "./Sidebar.styles";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/media", label: "Media" },
  { to: "/news", label: "News" },
  { to: "/features", label: "Features" },
];

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarNav>
        {navigationItems.map((item) => (
          <SidebarLink key={item.to} as={Link} to={item.to}>
            {item.label}
          </SidebarLink>
        ))}
      </SidebarNav>
    </SidebarContainer>
  );
};
