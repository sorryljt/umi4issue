import { Request, Response } from 'express';

export default {
  'GET /business/order/freeze_allot/params/init': (req: Request, res: Response) => {
    res.send({
      "code": 0,
      "message": "请求成功",
      "data": {
        "stateList": [
          {
            "code": 84,
            "desc": "jmrhqss"
          },
          {
            "code": 61,
            "desc": "tuqvkt"
          },
          {
            "code": 99,
            "desc": "lrfcfboahl"
          },
          {
            "code": 12,
            "desc": "wykodkn"
          },
          {
            "code": 42,
            "desc": "izxhxu"
          },
          {
            "code": 38,
            "desc": "jsykmbxzc"
          },
          {
            "code": 11,
            "desc": "ddownqrih"
          },
          {
            "code": 28,
            "desc": "jdrhjch"
          },
          {
            "code": 93,
            "desc": "lwwjaj"
          },
          {
            "code": 41,
            "desc": "fpadjdtcx"
          }
        ],
        "maxSplit": 2
      }
    })
  }
}
