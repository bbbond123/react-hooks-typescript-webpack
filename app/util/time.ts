import moment, { Moment } from 'moment';

/**
 * @param offset calculate offset with today, if no set it will return current date
 * @return Moment
 */
export const getDate = (offset = 0): Moment => {
  return moment().subtract(offset, 'days');
};

export const formatToStringDate = (unix: number): string => {
  return moment(unix).format('YYYY-MM-DD');
};

export const MOMENT_DATETIME_SECONDS_DAYOFWEEK = 'YYYY-MM-DD HH:mm:ss dddd';
export const MOMENT_DATETIME_SECONDS = 'YYYY-MM-DD HH:mm:ss';
export const MOMENT_DATETIME_WITH_ZERO_SECONDS = 'YYYY-MM-DD HH:mm:00';
export const MOMENT_DATE_WITH_ZERO_TIME = 'YYYY-MM-DD 00:00:00';
export const MOMENT_DATETIME = 'YYYY-MM-DD HH:mm';
export const MOMENT_DATE = 'YYYY-MM-DD';
export const MOMENT_DATETIME_ZERO_TIME = '00:00:00';
export const MOMENT_HHMMSS = 'HH:mm:ss';
export const MOMENT_HHMM = 'HH:mm';

/**
 * use this function, in case in the future requirements change and the
 * specification of 'start of week' changes
 */
export const startOfWeekString = (period: moment.Moment | null | undefined) => {
  return period
    ? period
        .clone()
        .startOf('week')
        .format(MOMENT_DATE)
    : '';
};

/**
 * use this function, in case in the future requirements change and the
 * specification of 'end of week' changes
 */
export const endOfWeekString = (period: moment.Moment | null | undefined) => {
  return period
    ? period
        .clone()
        .endOf('week')
        .format(MOMENT_DATE)
    : '';
};

/** for <WeekPicker/> format */
export const formatWeekPicker = (period: moment.Moment | null | undefined): string => {
  return `[${startOfWeekString(period)} ~ ${endOfWeekString(period)}]`;
};

export const today: string = moment().format('YYYY-MM-DD');

export const startOfPrevWeek: string = moment()
  .startOf('week')
  .add(-1, 'week')
  .format(MOMENT_DATE);

export const endOfPrevWeek: string = moment()
  .endOf('week')
  .add(-1, 'week')
  .format(MOMENT_DATE);

export default moment;
