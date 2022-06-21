export default {
  // 支持值为 Object 和 Array
  'GET /order/list': {
    code: 0,
    message: '请求成功',
    data: {
      items: [
        {
          orderId: 'wmzhq',
          channel: 'cbthxissyd',
          fundFlow: 'skargmeo',
          financeOrg: 'vpgvrzpl',
          receiveAccount: 'cfxqt',
          payAccount: 'vyxgqui',
          applyEnsureAmount: 98,
          department: 30,
          orderState: 'ziziywdgbm',
          createTime: 'czida',
        },
        {
          orderId: 'evvcdui',
          channel: 'lmgyubwlhj',
          fundFlow: 'rxpjsmvh',
          financeOrg: 'kiskpn',
          receiveAccount: 'jetyiflu',
          payAccount: 'krbrtd',
          applyEnsureAmount: 63,
          department: 82,
          orderState: 'owkuyr',
          createTime: 'wnuzrw',
        },
        {
          orderId: 'fuzovr',
          channel: 'dyxvhccas',
          fundFlow: 'ljiqp',
          financeOrg: 'bwklbilt',
          receiveAccount: 'sacjjvlc',
          payAccount: 'oqwgdzk',
          applyEnsureAmount: 10,
          department: 48,
          orderState: 'gnllcz',
          createTime: 'qqjqespfr',
        },
        {
          orderId: 'ofsitm',
          channel: 'eloip',
          fundFlow: 'jofhmika',
          financeOrg: 'yuxzipyxqy',
          receiveAccount: 'gwynz',
          payAccount: 'folhotdr',
          applyEnsureAmount: 33,
          department: 87,
          orderState: 'wgdyx',
          createTime: 'rjwxcwjowk',
        },
        {
          orderId: 'erojqdyjb',
          channel: 'gnxfgbel',
          fundFlow: 'dhthgmbu',
          financeOrg: 'gvrtpjumw',
          receiveAccount: 'runti',
          payAccount: 'mdpejbvja',
          applyEnsureAmount: 0,
          department: 51,
          orderState: 'vgatwrelq',
          createTime: 'aghpemo',
        },
        {
          orderId: 'vgrmwdjkkw',
          channel: 'ydhferha',
          fundFlow: 'xqfxfak',
          financeOrg: 'gevtvgohog',
          receiveAccount: 'fstzkegbql',
          payAccount: 'djuzu',
          applyEnsureAmount: 85,
          department: 31,
          orderState: 'mjhfao',
          createTime: 'lrnphu',
        },
        {
          orderId: 'hhzqgfr',
          channel: 'gkjqepceua',
          fundFlow: 'wauzracfrd',
          financeOrg: 'jwqxqhj',
          receiveAccount: 'cksovthtwg',
          payAccount: 'ikcbhyfzu',
          applyEnsureAmount: 71,
          department: 19,
          orderState: 'nyudpkd',
          createTime: 'urdpvf',
        },
        {
          orderId: 'zzgflnxgu',
          channel: 'dgqwr',
          fundFlow: 'beydhfh',
          financeOrg: 'mdhaq',
          receiveAccount: 'stttwlz',
          payAccount: 'cvwyb',
          applyEnsureAmount: 85,
          department: 77,
          orderState: 'mdniom',
          createTime: 'uxedo',
        },
      ],
      total: 8,
    },
  },
  'GET /account/vague/search': {
    code: 0,
    message: '请求成功',
    data: {
      accountList: [
        {
          accountId: '1',
          name: '重庆满溢融资担保有限公司',
          phone: '17767226765',
        },
        {
          accountId: '2',
          name: '五八小贷',
          phone: '17767226765',
        },
      ],
    },
  },
  'POST /order/creation/submit': {
    code: 0,
    message: '请求成功',
    data: {
      orderId: '12345',
      applyEnsureAmount: 74,
      createTime: '2021-10-22',
      failReason: '失败能有啥原因啊，就哪里跌倒在那里躺一会儿呗',
    },
  },

  'GET /order/baseinfo': {
    code: 0,
    message: '请求成功',
    data: {
      id: '12345',
      channel: '渠道',
      receiveAccount: '五八小贷',
      payAccount: '重庆担保',
      applyEnsureAmount: 74,
      leftEnsureAmount: 41,
    },
  },

  'POST /order/revoke/submit': {
    code: 0,
    message: '请求成功',
  },

  'GET /business/order/creation/init': {
    code: 0,
    message: '请求成功',
    data: {
      channelList: [
        {
          code: 1,
          value: '渠道1',
        },
        {
          code: 2,
          value: '渠道2',
        },
        {
          code: 3,
          value: '渠道3',
        },
      ],
      orderTypeList: [
        {
          code: 1,
          value: '类型1',
        },
        {
          code: 2,
          value: '类型2',
        },
      ],
    },
  },
  'GET /business/order/params/init': {
    code: 0,
    message: '请求成功',
    data: {
      orderState: [
        {
          code: 1,
          value: '状态1',
        },
        {
          code: 2,
          value: '状态2',
        },
      ],
    },
  },
  'GET /business/account/info/init': {
    code: 0,
    message: '请求成功',
    data: {
      accountTypeList: [
        {
          code: 7,
          desc: 'tesyg',
        },
        {
          code: 91,
          desc: 'wlomzfhcbz',
        },
        {
          code: 0,
          desc: 'quitpjvsnj',
        },
        {
          code: 59,
          desc: 'hrzjyuqa',
        },
        {
          code: 93,
          desc: 'gfsmwkybky',
        },
      ],
      accountStatusList: [
        {
          code: 92,
          desc: 'sonzivzfy',
        },
        {
          code: 17,
          desc: 'nguhcw',
        },
        {
          code: 35,
          desc: 'kynhxxennf',
        },
        {
          code: 51,
          desc: 'qrfkgy',
        },
        {
          code: 64,
          desc: 'lmumnaif',
        },
        {
          code: 46,
          desc: 'sgmcyn',
        },
      ],
      personCertificateTypeList: [
        {
          code: 36,
          desc: 'sozhle',
        },
        {
          code: 13,
          desc: 'zczov',
        },
      ],
      companyCertificateTypeList: [
        {
          code: 69,
          desc: 'voexlxrpmo',
        },
      ],
      channelList: [
        {
          code: 36,
          desc: 'oiteum',
        },
        {
          code: 76,
          desc: 'fauqbangev',
        },
        {
          code: 3,
          desc: 'tjbld',
        },
        {
          code: 94,
          desc: 'rmcqgy',
        },
        {
          code: 84,
          desc: 'zfmnobljo',
        },
        {
          code: 74,
          desc: 'jmdutre',
        },
        {
          code: 68,
          desc: 'nqktjw',
        },
        {
          code: 63,
          desc: 'midme',
        },
      ],
    },
  },

  // // GET 可忽略
  // '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => {
  //   // 添加跨域请求头
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.end('ok');
  // },
};
