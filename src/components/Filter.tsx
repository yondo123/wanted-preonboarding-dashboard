import Icon from 'icomoon-react';
import styled from 'styled-components';
import iconSet from '../assets/selection.json';
import useSelectBox from '../hooks/useSelectbox';
import { flexbox } from '../styles/mixins/flexbox';
import { text } from '../styles/mixins/fontStyle';
import { selectbox } from '../styles/mixins/selectbox';

function Filter(): React.ReactElement {
  const { categories, subCategories, handler } = useSelectBox();

  return (
    <SelectWrap>
      <FilterCategory>
        <Select>
          <select onChange={handler}>
            {categories.map((item: { name: string; value: string }) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <Icon iconSet={iconSet} size={24} icon="next" className="icon" />
        </Select>
        <Select>
          <select>
            {subCategories.map((item: { name: string; value: string }) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <Icon iconSet={iconSet} size={24} icon="next" className="icon" />
        </Select>
      </FilterCategory>
      <FilterRange>
        <Select>
          <select>
            <option value="daily">일별</option>
            <option value="weekly">주간</option>
          </select>
        </Select>
      </FilterRange>
    </SelectWrap>
  );
}

export default Filter;

const Select = styled.div`
  ${text('md')}
  cursor: pointer;
  position: relative;
  & .icon {
    position: absolute;
    top: 8px;
    right: 10px;
  }
`;

const SelectWrap = styled.div`
  ${flexbox('between', 'center')}
`;

const FilterCategory = styled.div`
  ${flexbox('start', 'start')}
  & select {
    ${selectbox('md')};
    cursor: pointer;
    font-weight: 700;
    padding-left: 20px;
  }
`;

const FilterRange = styled.div`
  & select {
    cursor: pointer;
  }
`;
