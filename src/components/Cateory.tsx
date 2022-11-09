import Icon from 'icomoon-react';
import styled from 'styled-components';
import iconSet from '../assets/selection.json';

function Category(): React.ReactElement {
  return (
    <>
      <MenuItem className="active">
        <div className="menu-name">
          <Icon iconSet={iconSet} size={24} icon="menu-dashboard" />
          <span>대시보드</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="menu-name">
          <Icon iconSet={iconSet} size={24} icon="menu-advmgmt" />
          <span>광고관리</span>
        </div>
      </MenuItem>
    </>
  );
}

export default Category;

const MenuItem = styled.button`
  display: block;
  border-radius: 10px;
  font-weight: 700;
  width: 240px;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0.4;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }

  & .menu-name {
    text-align: left;
    padding: 20px 0px 20px 22px;

    & span {
      margin-left: 12px;
    }
  }
`;
