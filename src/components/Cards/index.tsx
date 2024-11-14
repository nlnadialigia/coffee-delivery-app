import {Minus, Plus, ShoppingCart} from "phosphor-react";
import {Card, CardsContainer, FormQuantity, FormValue, HomeForm, Tag, Tags} from "./styles";
import {cardInfos} from "./types";

export function Cards() {
  return (
    <CardsContainer>
      {cardInfos.map((card) => (        
        <Card key={card.title}>
          <img src={card.image} alt="" />
          <Tags>
            {card.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          
          <HomeForm>
            <FormValue>
              <span>R$</span>
              <p>9,99</p>
            </FormValue>

            <FormQuantity>
              <Plus />
              <span>100</span>
              <Minus />
            </FormQuantity>

            <button>
              <ShoppingCart weight="fill" color="#FFF" />
            </button>
          </HomeForm>
        </Card>
      ))}
    </CardsContainer>
  );
}