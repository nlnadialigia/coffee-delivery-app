import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height:40;
    width:85;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  position: relative;
`;

export const HeaderLocation = styled.button`
  background: ${props => props.theme['purpleLight']};
  color: ${props => props.theme['purpleDark']};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-size: 0.875rem;
  }
`;



export const HeaderCart = styled.a`
  background: ${props => props.theme['yellowLight']};
  color: ${props => props.theme['yellowDark']};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${props => props.theme['yellowDark']};
    color: ${props => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;
  }
`;