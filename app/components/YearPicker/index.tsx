import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker/interface';

interface IYearPickerProps extends DatePickerProps {
  setFieldValue: (fieldId: string, value: Moment | undefined) => void;
  fieldId?: string;
}

const YearPicker: React.FC<IYearPickerProps> = (props: IYearPickerProps) => {
  const { fieldId, setFieldValue, value } = props;
  const [isDatePickerPanelOpen, setDatePickerPanel] = useState<boolean>(false);

  return (
    <DatePicker
      mode="year"
      format="YYYY"
      placeholder="请选择年份"
      value={value}
      open={isDatePickerPanelOpen}
      onChange={(d) => setFieldValue('year', d || undefined)}
      onOpenChange={(status) => setDatePickerPanel(status)}
      onPanelChange={(value) => {
        setFieldValue(fieldId || 'year', moment(value));
        setDatePickerPanel(false);
      }}
    />
  );
};

export default React.memo(YearPicker);
