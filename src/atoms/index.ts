import { atom } from 'recoil';
import { DATA_ADV_TREND, CATEGORY } from '../types/constants';

export const advTrendData = atom({
  key: 'advTrendData',
  default: DATA_ADV_TREND,
});

export const selectByCategories = atom({
  key: 'selectByCategories',
  default: CATEGORY,
});

export const selectBySubCategories = atom({
  key: 'selectBySubCategories',
  default: CATEGORY.slice(1),
});

export const valueAsChartLineOne = atom({
  key: 'valueAsChartLineOne',
  default: CATEGORY[0].value,
});

export const valueAsChartLineTwo = atom({
  key: 'valueAsChartLineTwo',
  default: CATEGORY[1].value,
});

export const startDateAtom = atom({
  key: 'startDate',
  default: new Date(DATA_ADV_TREND.report.daily[0].date),
});

export const endDateAtom = atom({
  key: 'endDate',
  default: new Date(),
});

export const summaryAtom = atom({
  key: 'summary',
  default: { imp: 0, click: 0, cost: 0, convValue: 0, cvr: 0, roas: 0, conv: 0 },
});
