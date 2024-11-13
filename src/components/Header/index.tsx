import {MapPin, ShoppingCart} from "phosphor-react";
import Logo from "../../assets/logo.svg";
import {HeaderCart, HeaderContainer, HeaderInfo, HeaderLocation} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <HeaderInfo>
        <HeaderLocation>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <HeaderCart href="/checkout">
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </HeaderCart>
      </HeaderInfo>
    </HeaderContainer>
  );
}