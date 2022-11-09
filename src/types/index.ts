export type Category = {
  name: string;
  value: string;
};

export type AdvTrend = {
  readonly imp: number;
  readonly click: number; // 클릭수
  readonly cost: number; // 매출
  readonly conv: number;
  readonly convValue: number; // 전환수
  readonly ctr: number;
  readonly cvr: number; // 전환율
  readonly cpc: number;
  readonly cpa: number;
  readonly roas: number; // roas
  readonly date: string;
};
