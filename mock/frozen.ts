import { Request, Response } from 'express';
export default {
  // 支持值为 Object 和 Array
  'GET /business/order/freeze_allot/list': {
    code: 0,
    message: '请求成功',
    data: {
      total: 0,
      list: [
        {
          orderId: 'zwyrt',
          channel: 'ssazfcl',
          applyFreezeAmount: 38,
          receiveAccountList: [
            '李大锤\n13419878934',
            '李大锤\n13419878934',
            '李大锤\n13419878934',
            '李大锤\n13419878934',
          ],
          orderState: '待收款',
          createTime: 'ywuvgt',
          showApplyReceive: true,
          realFreezeAmount: 100,
        },
        {
          orderId: 'zwyrt11',
          channel: 'ssazfcl',
          applyFreezeAmount: 38,
          receiveAccountList: [
            '李大锤\n13419878934',
            '李大锤\n13419878934',
            '李大锤\n13419878934',
            '李大锤\n13419878934',
          ],
          orderState: '非待收款',
          createTime: 'ywuvgt',
        },
      ],
    },
  },
  'GET /business/order/freeze_allot/freeze_log': {
    code: 0,
    message: '请求成功',
    data: {
      accountName: 'mfamczqh',
      receiverId: 'rvegljli',
      receiverInfo: 'aidlgzs',
      applyFreezeAmount: 23,
      remainFreezeAmount: 43,
      receivedAmount: 36,
      refundedAmount: 94,
      freezeLogList: [
        {
          id: 'thofkrxaf',
          receiver: 'tndrejw',
          applyFreezeAmount: 40,
          actualFreezeAmount: 74,
          splitedAmount: 98,
          refundedAmount: 58,
          orderState: 'weywzip',
          createTime: 'qrhrd',
        },
        {
          id: 'qjbuxtdyhy',
          receiver: 'kxsyw',
          applyFreezeAmount: 93,
          actualFreezeAmount: 7,
          splitedAmount: 53,
          refundedAmount: 75,
          orderState: 'fwdqkaf',
          createTime: 'cwyvcr',
        },
        {
          id: 'gpzgte',
          receiver: 'rdsyz',
          applyFreezeAmount: 63,
          actualFreezeAmount: 77,
          splitedAmount: 51,
          refundedAmount: 35,
          orderState: 'sefcuwbq',
          createTime: 'lthfbmhog',
        },
        {
          id: 'euuwhaqonb',
          receiver: 'fydnqcmea',
          applyFreezeAmount: 84,
          actualFreezeAmount: 84,
          splitedAmount: 6,
          refundedAmount: 76,
          orderState: 'lsqndrui',
          createTime: 'crzukged',
        },
        {
          id: 'kjfvvvff',
          receiver: 'frzygcsckg',
          applyFreezeAmount: 34,
          actualFreezeAmount: 40,
          splitedAmount: 38,
          refundedAmount: 95,
          orderState: 'fkjula',
          createTime: 'hjlrrln',
        },
        {
          id: 'bocraxqo',
          receiver: 'ilfvs',
          applyFreezeAmount: 43,
          actualFreezeAmount: 75,
          splitedAmount: 24,
          refundedAmount: 2,
          orderState: 'kbcjvnf',
          createTime: 'gwdcnktco',
        },
        {
          id: 'juzebtfq',
          receiver: 'qkczrv',
          applyFreezeAmount: 12,
          actualFreezeAmount: 64,
          splitedAmount: 78,
          refundedAmount: 76,
          orderState: 'zlfqpyne',
          createTime: 'bxhodhgtf',
        },
      ],
    },
  },
  'GET /business/order/freeze_allot/refund/apply': {
    code: 0,
    message: '请求成功',
    data: {},
  },
  'GET /business/order/freeze_allot/params/init': {
    code: 0,
    message: '请求成功',
    data: {
      stateList: [
        {
          code: 69,
          desc: 'kzunwfm',
        },
        {
          code: 50,
          desc: 'jqvpzyhu',
        },
        {
          code: 47,
          desc: 'jchzyc',
        },
        {
          code: 4,
          desc: 'fuqfzsimjs',
        },
        {
          code: 70,
          desc: 'lryrdjgnfs',
        },
        {
          code: 34,
          desc: 'xfhfo',
        },
        {
          code: 41,
          desc: 'bfusuqel',
        },
        {
          code: 29,
          desc: 'obbesruaso',
        },
        {
          code: 40,
          desc: 'ijrigioxt',
        },
      ],
    },
  },
  'POST /business/order/freeze_allot/receive/apply': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: {
        receiveOrderId: 'liieqweqptfv',
        amount: 2900,
      },
    });
  },
  'GET /business/order/freeze_allot/apply/result': (req: Request, res: Response) => {
    res.send({
      code: 0,
      message: '请求成功',
      data: {
        result: true,
        receive: '安居客商户',
      },
    });
  },
};
