import { thousandBitSeparator } from '../dataDeal';

describe('关于utils>dataDeal文件下工具函数的单元测试', () => {
  it('测试thousandBitSeparator方法，千分符格式化方法', () => {
    expect(thousandBitSeparator(200000)).toEqual('200,000.00');
    expect(thousandBitSeparator(0)).toEqual('0.00');
    expect(thousandBitSeparator(null)).toEqual('--');
    expect(thousandBitSeparator(undefined)).toEqual('--');
  });
});
