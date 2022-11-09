import { useRecoilState } from 'recoil';
import { startDateAtom, endDateAtom } from '../atoms';

const useDatpicker = () => {
  const [startDate, setStartDate] = useRecoilState(startDateAtom);
  const [endDate, setEndDate] = useRecoilState(endDateAtom);

  const ondDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return { startDate, endDate, ondDateChange };
};

export default useDatpicker;
