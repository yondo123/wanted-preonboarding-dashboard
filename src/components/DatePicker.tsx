import Datepicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { flexbox } from '../styles/mixins/flexbox';
import { text } from '../styles/mixins/fontStyle';
import useDatpicker from '../hooks/useDatepicker';

function DatePicker(): React.ReactElement {
  const { startDate, endDate, ondDateChange } = useDatpicker();

  return (
    <DatepickerWrap>
      <Datepicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        onChange={ondDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </DatepickerWrap>
  );
}

export default DatePicker;

const DatepickerWrap = styled.div`
  ${flexbox('start', 'center')}
  ${text('md')}
  cursor: pointer;

  & .react-datepicker__input-container {
    & input {
      width: 270px;
    }
  }
`;
