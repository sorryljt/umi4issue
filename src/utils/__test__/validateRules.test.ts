import {
  pdfFile,
  tifFile,
  videoFile,
  numberPoint,
  IDCardEncrypt,
  mobileEncrypt,
} from '../validateRules';

describe('utils单测>正则规则校验', () => {
  it('校验是否为pdf文件', () => {
    expect(pdfFile('aaa.pdf')).toEqual(true);
    expect(pdfFile('aaa.doc')).toEqual(false);
    expect(pdfFile('aaa.PDF')).toEqual(false);
    expect(pdfFile('')).toEqual(false);
  });
  it('校验是否为tif文件', () => {
    expect(tifFile('aaa.tif')).toEqual(true);
    expect(tifFile('aaa.tiff')).toEqual(true);
    expect(tifFile('aaa.pdf')).toEqual(false);
    expect(tifFile('')).toEqual(false);
  });
  it('校验是否为视频文件', () => {
    expect(videoFile('aaa.mp4')).toEqual(true);
    expect(videoFile('aaa.mpeg')).toEqual(true);
    expect(videoFile('aaa.avi')).toEqual(true);
    expect(videoFile('aaa.wmv')).toEqual(true);
    expect(videoFile('aaa.mov')).toEqual(true);
    expect(videoFile('aaa.3gp')).toEqual(true);
    expect(videoFile('aaa.pdf')).toEqual(false);
    expect(videoFile('aaa')).toEqual(false);
  });
  it('过滤空格（只允许数字小数点）', () => {
    expect(numberPoint('122.44  ')).toEqual('122.44');
    expect(numberPoint('  1 22 .44')).toEqual('122.44');
    expect(numberPoint('测 试')).toEqual('');
    expect(numberPoint('abc')).toEqual('');
  });
  it('身份证脱敏', () => {
    expect(IDCardEncrypt('13777733773')).toEqual('137777********3773');
    expect(IDCardEncrypt('110726198809090998')).toEqual('110726********0998');
    expect(IDCardEncrypt('')).toEqual('');
  });
  it('手机号脱敏', () => {
    expect(mobileEncrypt('13777733773')).toEqual('137****3773');
    expect(mobileEncrypt('110726198809090998')).toEqual('110****0998');
    expect(mobileEncrypt('')).toEqual('');
  });
});
