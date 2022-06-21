export default {
  // 正浮点数
  number: /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,
  // 电话号码
  phone: /^1[34578]\d{9}$/,
  // 验证零和非零开头的数字 编号
  id: /^[A-Za-z0-9]+$/,
  // 验证银行开户账户
  bankCard: /^\d{14,20}$/,
  // 利率 12.123 小数点后最多3位
  rate: /^(?:[1-9]\d*(\.\d{1,3})?|0\.\d{1,3})$/,
  // 验证ip地址格式
  ip: /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,
  // 去除两侧空格
  trim: /(^\s*)|(\s*$)/g,
  // 身份证号
  idCard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
  // 邮箱
  email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  // 验证非负整数
  nonNegative: /^\d+$/,
  // 验证正整数
  positiveInteger: /(^[1-9]\d*$)/,
  // 非负数,小数点最多保留两位
  nonNegativeDecimal: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
  // url最后一个/后的内容
  urlLastPart: /\/([^/]*)$/,
};

export const pdfFile = function(data: string) {
  return /\.pdf/.test(data);
};
export const tifFile = function(data: string) {
  return /\.tif|\.tiff/.test(data);
};

export const videoFile = function(data: string) {
  return /\.mpeg|\.avi|\.wmv|\.mov|\.3gp|\.mp4/i.test(data);
};

// 只允许输入数字和小数点
export const numberPoint = function(data: string) {
  return data.replace(/[^\d.]/g, '');
};

export const IDCardEncrypt = function(data: string) {
  return (data || '').replace(/^(.{6})(?:\d+)(.{4})$/, '$1********$2');
};
export const mobileEncrypt = function(data: string) {
  return (data || '').replace(/^(\d{3})\d*(\d{4})$/, '$1****$2');
};
