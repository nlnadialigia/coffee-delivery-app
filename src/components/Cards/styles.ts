import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const Card = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${props => props.theme['card']};
  border-radius: 8px 36px;
  
  padding: 1.5rem 0.75rem;

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -2.5rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${props => props.theme['title']};
    padding: 0.5rem;
    margin-top: 1rem;
  }

  p {
    font-size: 0.75rem;
    text-align: center;
    color: ${props => props.theme['label']};
    padding: 0 0.5rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme['yellowLight']};
  padding: 0.5rem;
  margin-top: 0.5rem;

  background: ${props => props.theme['yellowCard']};

  border-radius: 16px;
`;

export const HomeForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem;
  margin-top: 1rem;

  border-radius: 8px;

  button {
    background: ${props => props.theme['purpleDark']};
    color: ${props => props.theme['white']};
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
  }  
`;

export const FormValue = styled.div`
  display: flex;
  align-items: center;
  
  span {
    color: ${props => props.theme['label']};
    font-size: 0.75rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme['white']};
  }  
`;

export const FormQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  background-color: ${props => props.theme['newInput']};
  padding: 0.75rem;
  border-radius: 8px;

  font-size: 0.75rem;
`;