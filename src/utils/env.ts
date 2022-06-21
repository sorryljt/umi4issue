// @ts-nocheck
/**
 * 1、云平台测试环境对于 开发环境
 * 2、云平台沙箱环境对于 测试环境
 */
const mapObj = {
  local: '', // 本地开发走proxy代理 // //waccount.58v5.cn
  offline: '//waccount.58v5.cn', 
  sandbox: '//waccounttest.58v5.cn', 
  online: '//anjubao.anjuke.com/waccount',
};

export const getHost = () => {
  const { env = 'local' } = window;
  console.log('🚀 ~ file: env.ts ~ line 13 ~ getHost ~ env', env);
  const domain = mapObj[env];
  console.log('🚀 ~ file: env.ts ~ line 16 ~ getHost ~ domain', domain);
  if (env === 'local') {
    return ''
  }
  return `${location.protocol}${domain}`;
};
export const host = getHost();