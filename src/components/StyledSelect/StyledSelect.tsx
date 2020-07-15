import React, { SFC } from 'react';
import { Select } from 'antd';
import style from './StyledSelect.module.scss';

interface StyledSelectProps {
  defaultValue?: string;
  onChange?: (v: any) => void;
  options: Array<string>;
  placeholder?: string;
}

const { Option } = Select;
const StyledSelect: SFC<StyledSelectProps> = ({
  defaultValue,
  onChange,
  options,
  placeholder,
}) => (
  <Select
    defaultValue={defaultValue}
    onSelect={onChange}
    className={style.selectStyle}
    placeholder={placeholder || 'Select your options...'}
  >
    {options.map((option) => (
      <Option value={option} key={option}>
        {option}
      </Option>
    ))}
  </Select>
);

export default StyledSelect;
