import { request } from 'umi';

export function generateUUID() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export const formatEmptyStr = (str: string | number) => {
  if (!str && str !== 0) {
    return '--';
  }
  return str;
};

export const ELKLog = (
  response: any,
  options: any,
  logType: string = 'info',
  url: string = '',
  content: any = '房金融商家后台',
  user?: any,
) => {
  if (!(response.url === 'https://housefinancefrontend.58.com/log')) {
    try {
      request('https://housefinancefrontend.58.com/log', {
        method: 'post',
        prefix: '',
        data: {
          requestData: options,
          responseData: response,
          logType,
          serviceId: 'hbg_fangfe_node_finance',
          uri: url,
          userId: user?.name,
          content,
        },
      })
        .then(res => {
          // res && console.log('elk日志接口异常: ', res);
        })
        .catch(err => {
          console.error(err, 'elk日志接口报错');
        });
    } catch (error) {
      console.log('elk日志接口报错', error);
    }
  }
  // return response;
};

export const validatorAmount = (text: string) => {
  return (_: any, value: any) => {
    if (/^\d{1,9}([.]{1}[0-9]{1,2})?$/.test(value)) {
      if (value > 0) {
        return Promise.resolve();
      }
      return Promise.reject(`${text}必须大于0`);
    }
    return Promise.reject(`金额输入整数位最多9位，小数点最多2位`);
  };
};

export const uploadConfig: any = {
  authType: 1,
  token: 'b3117daa67531e4cedce616f20bbfd51',
  isInsideUpload: true,
  path: '',
};

export const splitString = (str: any, len: number) => {
  if (typeof str !== 'string') {
    return '非字符串';
  }
  const length = str.length;
  if (length > len) {
    return str.slice(0, len) + '...';
  }
  return str;
};
