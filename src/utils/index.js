export const getTotalData = (dataSet) => {
  const total = { click: 0, cost: 0, convValue: 0, cvr: 0, roas: 0, imp: 0, conv: 0 };
  dataSet.forEach((item, index) => {
    total.click += item.click;
    total.cost += item.cost;
    total.convValue += item.convValue;
    total.cvr += item.cvr;
    total.roas += item.roas;
    total.imp += item.imp;
    total.conv += item.conv;
  });

  return total;
};

// export const filterAdvData = (start, end) => {};

export const getParseComma = (data, div) => {
  const parseData = new Intl.NumberFormat('ko-KR', { maximumSignificantDigits: 3 }).format(div ? data / div : data);
  return parseData;
};
