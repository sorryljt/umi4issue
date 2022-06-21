import { Request, Response } from 'express';

export default {
  'GET /business/account_log/info/list': (req: Request, res: Response) => {
    res.send({
      "code": 0,
      "message": "请求成功",
      "data": {
        "total": 5,
        "list": [
          {
            "id": 29,
            "linkOpponent": "cnvtbx",
            "tradeAmount": "uxuzvdnwfj",
            "moveAccountMark": "mqepjrg",
            "orderBusinessType": 26,
            "tradeFinishTime": "xvbtzo",
            "linkOrderId": "jkiayona",
            "remark": "qnexdqstqu"
          },
          {
            "id": 88,
            "linkOpponent": "uvrpz",
            "tradeAmount": "ldwvgtga",
            "moveAccountMark": "jbwljwlrxr",
            "orderBusinessType": 42,
            "tradeFinishTime": "pzvyzgkg",
            "linkOrderId": "hvccykxpq",
            "remark": "shlatqq"
          },
          {
            "id": 9,
            "linkOpponent": "rqmjxkqzj",
            "tradeAmount": "ofjmcvppf",
            "moveAccountMark": "jeubdhlv",
            "orderBusinessType": 11,
            "tradeFinishTime": "tygjatdp",
            "linkOrderId": "alpfntgo",
            "remark": "xfdhxbf"
          },
          {
            "id": 67,
            "linkOpponent": "bugsul",
            "tradeAmount": "bvvly",
            "moveAccountMark": "fuekppo",
            "orderBusinessType": 67,
            "tradeFinishTime": "gwwkwtlzp",
            "linkOrderId": "xgkrnelz",
            "remark": "ubqvd"
          },
          {
            "id": 600,
            "linkOpponent": "yzqtkweak",
            "tradeAmount": "iwubhjal",
            "moveAccountMark": "svcmhyo",
            "orderBusinessType": 28,
            "tradeFinishTime": "ahyokiedz",
            "linkOrderId": "qfwjpwif",
            "remark": "ctins"
          }
        ]
      }
    })
  },
  'GET /business/account_log/info/init': (req: Request, res: Response) => {
    res.send({
      "code": 0,
      "message": "请求成功",
      "data": {
        "businessTypeList": [
          {
            "code": 16,
            "desc": "ahychuxsdk"
          },
          {
            "code": 26,
            "desc": "jbabwnaqb"
          },
          {
            "code": 40,
            "desc": "dtaao"
          }
        ]
      }
    }
    )
  }
}