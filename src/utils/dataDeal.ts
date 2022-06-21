import moment from 'moment';
export const MOMENT_FORMATE = {
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD hh:mm:ss',
};
//时间
/**
 * d 可以是string, long, date, moment
 * 返回string
 */
export function formatDate(d, f = MOMENT_FORMATE.date) {
  if (!moment.isMoment(d)) {
    return d;
  }
  return d.format(f);
}

// 金额千分符
export const thousandBitSeparator = (num: any) => {
  if (!num && num !== 0) {
    return '--';
  }
  const numstr = num.toString();
  const money = Number(numstr).toFixed(2);
  return money.replace(/,/g, '').replace(/\d(?=(?:\d{3})+\b)/g, '$&,');
};
