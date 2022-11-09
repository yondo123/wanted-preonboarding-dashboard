import styled from 'styled-components';

function Header(): React.ReactElement {
  return (
    <Navbar className="bg-slate-400">
      <h2>Header</h2>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  height: 80px;
`;
