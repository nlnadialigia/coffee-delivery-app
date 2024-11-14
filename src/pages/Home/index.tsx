import {Coffee, Package, ShoppingCart, Timer} from "phosphor-react";
import HeaderImage from "../../assets/imagem.png";
import {Cards} from "../../components/Cards";
import {HeaderContainer, HeaderInfo, HomeContainer, HomeHeader, HomeMain, Icon} from "./styles";

const headerInfos = [
  {
    icon: <ShoppingCart />,
    text: "Compra simples e segura",
    bg: "yellowDark",
  },
  {
    icon: <Package />,
    text: "Embalagem mantém o café intacto",
    bg: "input",
  },
  {
    icon: <Timer />,
    text: "Entrega rápida e rastreada",
    bg: "yellow",
  },
  {
    icon: <Coffee />,
    text: "O café chega fresquinho até você",
    bg: "purple",
  },
]

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <HomeHeader>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery voce recebe seu cafe onde estiver, a qualquer hora</p>

          <HeaderInfo>
            {headerInfos.map((info) => (
              <div key={info.text}>
                <Icon iconBackground={info.bg}>{info.icon}</Icon>
                <span>{info.text}</span>
              </div>
            ))}
          </HeaderInfo>
        </HomeHeader>
        
        <img src={HeaderImage} alt="" />
      </HeaderContainer>

      <HomeMain>
        <h2>Nossos Cafés</h2>
        <Cards />
      </HomeMain>
    </HomeContainer>
  );
}