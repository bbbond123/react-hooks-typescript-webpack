declare const BUILD_NUMBER: string;
declare const NODE_ENV: string;

declare module '*.svg';

declare type BooleanType = 'true' | 'false';

declare type PickByType<T, P> = Pick<T, { [K in keyof T]: T[K] extends P ? K : never }[keyof T]>;

declare type PropertyType<T, K extends keyof T> = Pick<T, K>[K];

declare type Moment = import('moment').Moment;

declare type MomentRangeType = [Moment, Moment];

declare module 'qrcode.react' {
  export default React.Component;
}

declare interface IPaginationResponse<T, Total = {}> {
  begin: number;
  count: number;
  end: number;
  index: number;
  pageCount: number;
  size: number;
  total?: Total;
  list: T[];
}


declare type Optional<T> = { [P in keyof T]?: T[P] };
