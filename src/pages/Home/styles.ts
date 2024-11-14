import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 4rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 2rem 0;
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  
  letter-spacing: 1.5px;
  
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 100%;
    color: ${props => props.theme['title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['subtitle']};
    padding: 0.75rem 0;
  }
`;

export const HeaderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 1rem;

  font-size: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

type IconProps = {
  iconBackground: string;
};

export const Icon = styled.span<IconProps>`
  height: 2rem;
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;

  background: ${props => props.theme[props.iconBackground]};
  color: ${props => props.theme['white']};

  font-weight: bold;
  font-size: 2rem;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme['subtitle']};
    padding: 0.75rem 0;
  }
`;