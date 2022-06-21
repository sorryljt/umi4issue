import { generateUUID, formatEmptyStr, splitString } from '../utils';

describe('utils 方法单元测试', () => {
  test('测试generateUUID方法', () => {
    expect(typeof generateUUID()).toEqual('string');
  });
  it('测试formatEmptyStr方法', () => {
    expect(formatEmptyStr(0)).toEqual(0);
    expect(formatEmptyStr('')).toEqual('--');
    expect(formatEmptyStr()).toEqual('--');
    expect(formatEmptyStr(null)).toEqual('--');
    expect(formatEmptyStr(undefined)).toEqual('--');
    expect(formatEmptyStr('10000')).toEqual('10000');
  });
  test('测试splitString方法', () => {
    expect(splitString('abcdefg', 10)).toEqual('abcdefg');
    expect(splitString('abcdefg', 3)).toEqual('abc...');
    expect(splitString(1234, 3)).toEqual('非字符串');
  });
});
