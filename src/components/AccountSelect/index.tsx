import React, { memo, useEffect, useState } from 'react';
import { Select } from 'antd';
import { request } from 'umi';

const Option = Select.Option;

type AccountSelectProps = {
  /** 下拉数据, 一般用于外部传来预回显数据 */

  optionList?: any[];
  /** 默认文字提示 */
  placeholder?: string;
  /** 组件的值 */
  value?: string;
  /** 组件值变化时的回调 */
  onChange?: (val: string, option: any) => void;
};

const AccountSelect: React.FC<AccountSelectProps> = props => {
  const { placeholder, value, optionList } = props;

  const [list, setList] = useState<any[]>([]);

  const selectSearch = async (val: string) => {
    if (val === '') {
      setList([]);
      return;
    }
    const res = await request('/xxxx', {
      method: 'get',
      params: { name: val },
    });
    if (res.code === 0) {
      setList(res.data);
    }
  };

  const selectChange = (val: string, option: any) => {
    if (props.onChange) props.onChange(val, option);
  };

  useEffect(() => {
    if (optionList) {
      setList(optionList);
    }
  }, [optionList]);
  return (
    <Select
      value={value}
      placeholder={placeholder}
      showSearch
      optionFilterProp="children"
      onSearch={selectSearch}
      onChange={selectChange}
      allowClear
    >
      {list.map((item: any) => {
        return (
          <Option value={item.accountId} key={item.accountId} other={`${item.name}${item.phone}`}>
            {item.name} {item.phone}
          </Option>
        );
      })}
    </Select>
  );
};

export default memo(AccountSelect);
