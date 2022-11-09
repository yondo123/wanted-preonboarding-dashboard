import Icon from 'icomoon-react';
import styled from 'styled-components';
import iconSet from '../assets/selection.json';
import { selectbox } from '../styles/mixins/selectbox';

function Select(): React.ReactElement {
  return (
    <SelectBox>
      <select className="form-select">
        <option value="madup">매드업</option>
        <option value="add">서비스 추가하기</option>
      </select>
      <Icon iconSet={iconSet} size={24} icon="next" className="icon" />
    </SelectBox>
  );
}

export default Select;

const SelectBox = styled.div`
  position: relative;

  & select {
    cursor: pointer;
    font-weight: 700;
    padding-left: 20px;
    ${selectbox('lg')}
  }

  & .icon {
    position: absolute;
    top: 18px;
    right: 20px;
  }
`;
