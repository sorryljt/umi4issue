import { getHost } from '../env';

describe('关于utils>env文件工具方法的单元测试', () => {
  it('关于getHost的单元测试，用于判断当前请求前缀', () => {
    (window as any).env = 'local';
    expect(getHost()).toEqual('');

    (window as any).env = 'offline';
    expect(getHost()).toEqual('http://waccount.58v5.cn');

    (window as any).env = 'sandbox';
    expect(getHost()).toEqual('http://waccounttest.58v5.cn');

    (window as any).env = 'online';
    expect(getHost()).toEqual('http://anjubao.anjuke.com/waccount');
  });
});
