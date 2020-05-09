import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import moment from 'moment';
import { DatePickerProps } from 'antd/lib/date-picker/interface';

interface IWeekPicker {
  value: moment.Moment | undefined;
  onChange: DatePickerProps['onChange'];
  className?: string;
}

const WeekPicker: React.FC<IWeekPicker> = ({ value, onChange, ...props }) => {
  const endTime = value
    ? value
        .clone()
        .endOf('week')
        .format('YYYY-MM-DD')
    : null;

  /**
   * Custom datepicker format to standardize our datepicker looks.
   * Please note that the space is intended
   */
  const format = ` YYYY-MM-DD[  ~  ${endTime}]`;
  const placeholder = `   开始日期    ~    结束日期`;

  const _onChange = React.useCallback((date: moment.Moment | null, dateString: string) => {
    if (date && onChange) {
      onChange(date.day(1), dateString);
    }

    if (onChange) {
      onChange(date, dateString);
    }
  }, []);

  return <StyledWeekPicker placeholder={placeholder} value={value} onChange={_onChange} format={format} {...props} />;
};

const StyledWeekPicker = styled(DatePicker.WeekPicker)`
  &&& {
    width: 332px;
    &.has-error span > input {
      border-color: red;
    }
    span > input {
      padding: 0 13px;
    }
    span > i {
      margin-right: 1px;
    }
  }
`;

export default WeekPicker;
