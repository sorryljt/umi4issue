import { Request, Response } from 'express';

export default {
  '/777': {
    code: 0,
    message: 'oxaxttnsw',
    data: {},
  },
  '/business/account/info/init': {
    code: 0,
    message: 'oxaxttnsw',
    data: {
      accountTypeList: [
        {
          code: 1,
          desc: '个人',
        },
        {
          code: 2,
          desc: '企业',
        },
        {
          code: 3,
          desc: '个体工商户',
        },
      ],
      accountStatusList: [
        {
          code: 19,
          desc: 'lehtmrtbgv',
        },
        {
          code: 58,
          desc: 'vyuclukpgc',
        },
        {
          code: 46,
          desc: 'lrcewsirxu',
        },
        {
          code: 84,
          desc: 'tjvnhjwddk',
        },
        {
          code: 28,
          desc: 'ebdmkz',
        },
      ],
      personCertificateTypeList: [
        {
          code: 1,
          desc: '身份证',
        },
      ],
      companyCertificateTypeList: [
        {
          code: 2,
          desc: '统一社会信用代码证',
        },
        {
          code: 3,
          desc: '营业执照',
        },
      ],
      channelList: [
        {
          code: 62,
          desc: '爱房',
        },
        {
          code: 43,
          desc: 'ozusuuz',
        },
        {
          code: 11,
          desc: 'coreappya',
        },
      ],
    },
  },

  '/business/account/info/echo': {
    code: 0,
    message: '请求成功',
    data: {
      accountType: 3,
      accountTypeText: 'rmlpqvps',
      channelId: 15,
      channelText: 'bugnsslpb',
      personAccountInfo: {
        id: 97,
        name: 'pvulvwj',
        identityType: 21,
        identityTypeText: 'jvpxroypxx',
        identityNo: 'esmqdf',
        phone: 'hfkuot',
        province: 'clhwn',
        provinceText: 'zgiewvkagf',
        city: 'haokre',
        cityText: 'smfus',
        area: 'oecafq',
        areaText: 'griniuwkg',
        address: 'piabnhyi',
        frontPic: {
          id: 76,
          type: 100,
          url: 'bbdih',
        },
        backPic: {
          id: 44,
          type: 'kxcldliwvz',
          url: 'mddlxzbat',
        },
      },
      companyAccountInfo: {
        id: 94,
        name: 'qfgpdzb',
        shortName: 'ivavjdyc',
        identityType: 21,
        identityTypeText: 'mozmmfgbmh',
        identityNo: 'rucqvgumj',
        permitNo: 'lzhuviyf',
        province: 'puwgoyc',
        provinceText: 'wnjgvc',
        city: 'cvesaajy',
        cityText: 'jpyijbdnj',
        area: 'fzcxsav',
        areaText: 'mymis',
        address: 'mdukvku',
        identityPic: {
          id: 53,
          type: 17,
          url: 'jbpxv',
        },
        openPermitPic: {
          id: 'gaufxodoo',
          typr: 'vvcgdparv',
          url: 'xyfzsbxgm',
        },
        manager: {
          id: 95,
          name: 'ruiijccifx',
          certificateType: 13,
          certificateTypeText: 'lfspn',
          certificateNumber: 'evkgzoyo',
          phone: 'ebikixmcf',
          email: 'duhwuwcjw',
          frontPic: {
            id: 'zmoby',
            type: 'majeradocu',
            url: 'igosomto',
          },
          backPic: {
            id: 'hfmdwa',
            type: 'biosvimc',
            url: 'uuyaabiloi',
          },
        },
        isLegal: 97,
        legalPerson: {
          id: 18,
          name: true,
          certificateType: 61,
          certificateTypeText: 'fmycehp',
          certificateNumber: 'tdjtq',
          phone: 'efnbbctur',
          email: 'mlnitksxem',
          frontPic: {
            id: 54,
            type: 90,
            url: 'cvaazoctqi',
          },
          backPic: {
            id: 65,
            type: 12,
            url: 'ydkmewx',
          },
        },
      },
      bankCardList: [
        {
          id: 'mfoqxxgex',
          cardType: '1',
          cardNo: 'vvehypp',
          cardName: '建设银行',
          bankLogo:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
      ],
    },
  },

  '/business/account/info/detail': {
    code: 0,
    message: 'oxaxttnsw',
    data: {
      accountStatus: 1,
      mainAccountInfo: {
        personAccountInfo: {
          id: 64,
          channelId: 'mzcwi',
          channelText: 'mzcwi',
          type: 40,
          name: 'atvtt',
          identityType: 50,
          identityNo: 'iggfvjkte',
          phone: 'fhypnj',
          province: 'fgoyzgzq',
          city: 'szcbybu',
          area: 'rggjih',
          address: 'zokqomrtn',
          frontPic: 'xjqoy',
          backPic: 'pauxmjr',
          bankcard: {
            id: 81,
            account: 'mstqvzwe',
            cardNo: 'dobxuqhfo',
            cardName: 'rjcepda',
            bankId: 'gzwcfzs',
            phone: 'ngjrifx',
          },
        },
        companyAccountInfo: {
          id: 19,
          channelId: 'tytwg',
          type: 7,
          name: 'qhstfeid',
          shortName: 'eknwnwlxbd',
          identityType: 91,
          identityNo: 'ypiohoqgeo',
          permitNo: 'cqbhuhbxv',
          province: 'igwhqk',
          city: 'llgrcbb',
          area: 'gxolsktjso',
          address: 'jqwxqi',
          identityPic: 'mcvvfrhzyq',
          openPermitPic: 'ircdqyjdrr',
          bankcard: {
            id: 32,
            account: 'cghkfqa',
            cardNo: 'duazg',
            cardName: 'tohssqbp',
            bankId: 'wtgpdkjfd',
            phone: 'dyuqh',
          },
          manager: {
            id: 33,
            name: 'fqicqqjcw',
            certificateType: 48,
            certificateNumber: 'nnlqjk',
            phone: 'ekypnu',
            email: 'hokzltbbc',
            frontPic: 'wdgioxdbco',
            backPic: 'jpaxb',
          },
          isLegal: 84,
          legalPerson: {
            id: 0,
            name: 'rjzatexagn',
            certificateType: 'cowbbzoru',
            certificateNumber: 'ojuxfonzk',
            phone: 'xunostzk',
            email: 'qvjczwh',
            frontPic: 'jsqvgo',
            backPic: 'wxwrvga',
          },
        },
        accountType: 7,
        accountTypeText: 'ujubmopc',
        channelId: 56,
        channelText: 'eaypkuklju',
      },
      subAccountList: [
        {
          id: 'hlcaoysub',
          subType: 39,
          state: 1,
          createTime: 'hkospiog',
          availableBalance: 93,
          withdrawableBalance: 8,
          freezeBalance: 0.0,
        },
      ],
    },
  },

  '/business/account/province/list': {
    code: 0,
    message: 'oxaxttnsw',
    data: [
      {
        code: 1,
        desc: 'fbfmwxhwfw',
      },
      {
        code: 2,
        desc: 'lswndp',
      },
    ],
  },

  '/business/account/city/list': {
    code: 0,
    message: 'oxaxttnsw',
    data: [
      {
        code: 1,
        desc: 'zxsuczw',
      },
      {
        code: 2,
        desc: 'bgfmvdw',
      },
      {
        code: 3,
        desc: 'llbmq',
      },
    ],
  },

  '/business/account/area/list': {
    code: 0,
    message: 'oxaxttnsw',
    data: [
      {
        code: 1,
        desc: 'zxsuczw',
      },
      {
        code: 2,
        desc: 'bgfmvdw',
      },
      {
        code: 3,
        desc: 'llbmq',
      },

      {
        code: 4,
        desc: 'llbmq',
      },
    ],
    '/business/account/info/list': {
      code: 0,
      message: '请求成功',
      data: {
        total: 1,
        list: [
          {
            id: 44,
            channel: 'xgctlsmn',
            identity: 'kbqvjfj',
            name: 'engnibgvrm',
            subAccountCount: 30,
            createTime: 'esuzwo',
            state: 'cpoqqk',
          },
          {
            id: 40,
            channel: 'vilkyhahf',
            identity: 'kbnwrpcdxy',
            name: 'kpojjh',
            subAccountCount: 62,
            createTime: 'fhduqa',
            state: 'soogjyz',
          },
          {
            id: 68,
            channel: 'qvhuzea',
            identity: 'zxlfcbcxyc',
            name: 'gkfejdcpz',
            subAccountCount: 22,
            createTime: 'jednysbbn',
            state: 'abpyo',
          },
        ],
      },
    },
  },
  '/business/account/info/list': {
    code: 0,
    message: '请求成功',
    data: {
      total: 1,
      list: [
        {
          id: 44,
          channel: 'xgctlsmn',
          identity: 'kbqvjfj',
          name: 'engnibgvrm',
          subAccountCount: 30,
          createTime: 'esuzwo',
          state: 'cpoqqk',
        },
        {
          id: 40,
          channel: 'vilkyhahf',
          identity: 'kbnwrpcdxy',
          name: 'kpojjh',
          subAccountCount: 62,
          createTime: 'fhduqa',
          state: 'soogjyz',
        },
        {
          id: 68,
          channel: 'qvhuzea',
          identity: 'zxlfcbcxyc',
          name: 'gkfejdcpz',
          subAccountCount: 22,
          createTime: 'jednysbbn',
          state: 'abpyo',
        },
      ],
    },
  },

  '/business/account/status/update': {
    code: 0,
    message: 'oxaxttnsw',
    data: {},
  },
  '/business/account/company/save': {
    code: 4300,
    message: 'oxaxttnsw',
    data: {},
  },
  '/business/account/person/save': {
    code: 4300,
    message: 'oxaxttnsw',
    data: {},
  },
  '/business/account/bank/list': {
    code: 0,
    message: '成功',
    data: [
      {
        logo: 'https://pic7.58cdn.com.cn/nowater/fangfe/n_v2180aaa53b32241dc87ddeef06e5aa6e1.png',
        accountName: '张一零',
        bankName: '广发银行',
        bankCardNo: '1234567891234',
        identityNo: '1458639389696491525',
        phone: '1456061144908202096',
      },
      {
        logo: 'https://pic8.58cdn.com.cn/nowater/fangfe/n_v2e06a2e584aaa4cfc81e77232a1a21b0a.png',
        accountName: '张一零',
        bankName: '平安银行',
        bankCardNo: '15000101159748',
        identityNo: '1458358011851472997',
        phone: '1456061144908202096',
      },
      {
        logo: 'https://pic8.58cdn.com.cn/nowater/fangfe/n_v29603dde11e894b149b0d7ac69cee8c10.png',
        accountName: '张一零',
        bankName: '招商银行',
        bankCardNo: '6214830183695863',
        identityNo: '1458341419373592597',
        phone: '1456061144908202096',
      },
      {
        logo: 'https://pic8.58cdn.com.cn/nowater/fangfe/n_v28521f339b93e46949104b77796c0ffc4.png',
        accountName: '张一零',
        bankName: '中国银行',
        bankCardNo: '1225368455896',
        identityNo: '1458332586026762316',
        phone: '1456061144908202096',
      },
    ],
  },
  'GET /common/cardBin': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: {
        bankId: 'String',
        bankName: '建设银行',
        bankIcon: 'String',
        cardType: 'String',
        accountSupport: 37,
      },
    });
  },
  'GET /common/bank/bankList/v2': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: [
        {
          bankId: '1',
          bankName: '建设银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          bankId: '2',
          bankName: '中国银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          bankId: '3',
          bankName: '工商银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          bankId: '4',
          bankName: '农业银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          bankId: '5',
          bankName: '交通银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          bankId: '6',
          bankName: '民生银行',
          bankIcon:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
      ],
    });
  },
  'POST /business/account/sub/cancel': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: {},
    });
  },
  'GET /business/account/bankCard/getSubAccountBankCardList': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: [
        {
          account: '利益后',
          cardNo: '121',
          cardName: '建设银行',
          bankLogo:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
        },
        {
          cardNo: '3213123',
          cardName: '中国银行',
          bankLogo:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
          account: '利益后',
        },
        {
          cardNo: 'Strin3123123g',
          cardName: '中国农业银行',
          bankLogo:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
          account: '利益后',
        },
        {
          cardNo: '656456',
          cardName: '宁波银行',
          bankLogo:
            'https://pic4.58cdn.com.cn/nowater/frs/n_v2d5004b26a5634ea6a17dba20e06d5351.png',
          account: '利益后',
        },
      ],
    });
  },
};
