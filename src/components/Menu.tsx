import Icon from 'icomoon-react';
import styled from 'styled-components';
import iconSet from '../assets/selection.json';
import logo from '../assets/logo.jpeg';
import { text, textColor } from '../styles/mixins/fontStyle';
import { flexbox } from '../styles/mixins/flexbox';
import Category from './Cateory';
import Select from './Select';

function Menu(): React.ReactElement {
  return (
    <Nav className="col-span-2">
      <header>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </header>
      <SideMenu className="col-span-2">
        <div className="bar">
          <a href="#null" className="link">
            서비스
          </a>
        </div>
        <div className="service">
          <Select />
        </div>
      </SideMenu>
      <SideMenu className="col-span-2">
        <div className="bar">
          <a href="#null" className="link">
            광고 센터
          </a>
        </div>
        <div className="service">
          <Category />
        </div>
      </SideMenu>
      <Guide>
        <Icon iconSet={iconSet} size={40} icon="bulb" className="icon" />
        <div className="text-wrap">
          <p className="title">레버 이용 가이드</p>
          <p className="desc">시작하기 전에 알아보기</p>
        </div>
      </Guide>
      <Intro>
        <p>레버는 함께 만들어갑니다.</p>
        <a href="##">이용약관</a>
      </Intro>
    </Nav>
  );
}

export default Menu;

const Nav = styled.nav`
  padding: 0 40px;
  max-width: 320px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  background-color: ${({ theme }) => theme.white};
`;

const Logo = styled.div`
  width: 240px;
  height: 150px;
  padding: 60px 0;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  & img {
    display: block;
    width: 124px;
    height: 30px;
  }
`;

const SideMenu = styled.section`
  margin-top: 40px;
  & .bar {
    height: 40px;
    padding: 13px 0 13px 20px;
    & .link {
      color: ${({ theme }) => theme.fontsub};
      font-weight: 700;
      ${text('sm')}
    }
  }
`;

const Guide = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  margin-top: 290px;
  height: 100px;
  ${flexbox('start', 'center')};

  & .icon {
    margin-left: 20px;
  }

  & .text-wrap {
    margin: 8px;
  }

  & .title {
    ${text('lg')}
    font-weight: 700;
  }

  & .desc {
    ${textColor('sub')}
    ${text('md')}
    margin-top: 8px;
  }
`;

const Intro = styled.div`
  margin: 40px 0;
  ${textColor('sub')} ${text('sm')} & a {
    margin-top: 10px;
    text-decoration: underline;
  }
`;
