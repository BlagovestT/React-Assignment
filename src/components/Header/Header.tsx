import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderMenu,
  HeaderLinks,
  HeaderLink,
  LogoIcon,
} from "./Header.styles";
import { logout } from "../../utils/auth";
import { LogOut } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLogo>
          <LogoIcon className="fa-solid fa-tractor" />
          <h2>Aray</h2>
        </HeaderLogo>
        <HeaderMenu>
          <HeaderLinks>
            <HeaderLink href="#help">Help</HeaderLink>
            <HeaderLink href="#menu">Menu</HeaderLink>
            <HeaderLink href="/auth" onClick={logout}>
              <LogOut size={18} />
            </HeaderLink>
          </HeaderLinks>
        </HeaderMenu>
      </HeaderNav>
    </HeaderContainer>
  );
};
