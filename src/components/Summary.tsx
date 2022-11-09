import styled from 'styled-components';
import useAdvData from '../hooks/useAdvData';
import { flexbox } from '../styles/mixins/flexbox';
import { text, textColor } from '../styles/mixins/fontStyle';
import { getParseComma } from '../utils';

function Summary(): React.ReactElement {
  const { summary } = useAdvData();

  return (
    <SummaryList>
      <SummaryItem>
        <div className="value">
          <strong className="title">ROAS</strong>
          <p className="index">{summary.roas}</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
      <SummaryItem>
        <div className="value">
          <strong className="title">광고비</strong>
          <p className="index">{getParseComma(summary.cost, 10000)} 만원</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
      <SummaryItem className="last-line">
        <div className="value">
          <strong className="title">노출수</strong>
          <p className="index">{getParseComma(summary.imp, 10000)}만 회</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
      <SummaryItem className="bottom">
        <div className="value">
          <strong className="title">클릭수</strong>
          <p className="index">{getParseComma(summary.click, 10000)}만 회</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
      <SummaryItem className="bottom">
        <div className="value">
          <strong className="title">전환 수</strong>
          <p className="index">{getParseComma(summary.convValue)} 회</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
      <SummaryItem className="last-line bottom">
        <div className="value">
          <strong className="title">매출</strong>
          <p className="index">697%</p>
        </div>
        <div className="range">
          <span>18%</span>
        </div>
      </SummaryItem>
    </SummaryList>
  );
}

export default Summary;

const SummaryList = styled.ul`
  ${flexbox('start', 'start')}
  flex-wrap: wrap;
`;

const SummaryItem = styled.li`
  width: 280px;
  border: 0.5px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 18px 40px;
  :not(.last-line) {
    margin-right: 32px;
  }

  ${flexbox('between', 'end')}
  &.bottom {
    margin-top: 10px;
  }

  & .title,
  .range {
    ${text('sm')}
    ${textColor('sub')}
  }

  & .index {
    margin-top: 10px;
    ${text('lg')}
    font-weight: 700;
  }
`;
