import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { advTrendData, endDateAtom, startDateAtom, summaryAtom } from '../atoms';
import { getTotalData } from '../utils';

const useAdvData = () => {
  const [advTrend, setAdvTrend] = useRecoilState(advTrendData);
  const [summary, setSummary] = useRecoilState(summaryAtom);
  const startDate = useRecoilValue(startDateAtom);
  const endDate = useRecoilValue(endDateAtom);

  useEffect(() => {
    setSummary(getTotalData(advTrend.report.daily));
    setAdvTrend({
      report: { daily: [] },
    });
  }, [startDate, endDate]);

  //   useEffect(() => {
  //     setSummary(getTotalData(advTrend.report.daily));
  //   }, [startDate, endDate]);

  return { advTrend, summary };
};

export default useAdvData;
