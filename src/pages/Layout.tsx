import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';

function Layout(): React.ReactElement {
  return (
    <Container className="grid grid-cols-9 font-mono">
      <Menu />
      <main className="col-span-7">
        <Header />
        <Outlet />
      </main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  color: ${({ theme }) => theme.font};
  height: 100vh;
`;
