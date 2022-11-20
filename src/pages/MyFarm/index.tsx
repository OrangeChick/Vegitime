import { Header, LinkVegiInfo, Title, Navigation } from './components';
import styled from 'styled-components';
import { flexContainer } from 'styles';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: var(--spacing-xxl) var(--spacing-md) var(--spacing-md);
`;

const StyledMain = styled.main`
  ${flexContainer({ d: 'column', w: 'nowrap', ai: 'center' })};
  margin-bottom: 15.625rem;
`;

const StyledUl = styled.ul`
  ${flexContainer({ d: 'row', w: 'wrap', g: 'var(--spacing-md)' })}
  width: 100%;
  li {
    ${flexContainer({ d: 'column', w: 'nowrap', ai: 'center' })}
    width: calc(50% - var(--spacing-md) / 2);
    padding: var(--spacing-base);
    border-radius: var(--spacing-md);
    background: hsla(0, 0%, 100%, 0.5);
  }
`;

export default function MyFarm() {
  return (
    <Container>
      <Header />
      <StyledMain>
        <Title text="My Farm" />
        <StyledUl>
          <li>
            <LinkVegiInfo vegetble="eggplant" level={3} />
          </li>
          <li>
            <LinkVegiInfo vegetble="carrot" level={2} />
          </li>
          <li>
            <LinkVegiInfo vegetble="onion" level={1} />
          </li>
          <li>
            <LinkVegiInfo vegetble="eggplant" level={5} />
          </li>
        </StyledUl>
      </StyledMain>
      <Navigation />
    </Container>
  );
}
