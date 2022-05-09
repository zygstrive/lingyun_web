import request from '@/utils/request'

const api = {
    queryChcnbLouDou: '/chnlBusiness/queryChcnbLouDou', // 渠道协同 上
    queryChcnbChanNeng: '/chnlBusiness/queryChcnbChanNeng', // 渠道协同 下
    queryAllChnlView: '/chnlBusiness/queryAllChnlView', // 全渠道 上
    queryAllChnlQST: '/chnlBusiness/queryAllChnlQST', // 全渠道 下
    queryIntChnlView: '/chnlBusiness/queryIntChnlView', // 线上运营 上
    queryIntChnlFenLei: '/chnlBusiness/queryIntChnlFenLei', // 线上运营 下
    queryCallChnlView: '/chnlBusiness/queryCallChnlView', // 外呼 上
    queryCallChnlTop: '/chnlBusiness/queryCallChnlTop', // 外呼 下
    queryQSTbyBusinessType: '/keyBusiness/queryQSTbyBusinessType', // 重点策略运营透视柱状图
    querybyBusinessType: '/keyBusiness/querybyBusinessType', // 重点策略运营透视
    queryStrategy: '/strategy/queryType0', // 全策略一级
    queryStrategyqueryType1: '/strategy/queryType1', // 全策略二级
    queryStrategyType2: '/strategy/queryType2', // // 全策略三级
    queryStrategyPolicyList: '/strategy/policyList', // // 全策略列表
    queryNetWorkBusinessType: '/netWork/queryNetWorkBusinessType',  //全网经营
    queryNetWorkTwoByBusinessType: '/netWork/queryNetWorkTwoByBusinessType', //全网经营
    querybyBusinessTypeNetWork: '/netWork/querybyBusinessType', //全网经营


    citybyBusinessType:'/cityBusiness/querybyBusinessType',
    cityQSTbyBusinessType:'/cityBusiness/queryQSTbyBusinessType'

}

export default api

export function queryChcnbLouDou (parameter) {
    return request({
        url: api.queryChcnbLouDou,
        method: 'post',
        data: parameter
    })
}

export function queryChcnbChanNeng (parameter) {
    return request({
        url: api.queryChcnbChanNeng,
        method: 'post',
        data: parameter
    })
}

export function queryAllChnlView (parameter) {
    return request({
        url: api.queryAllChnlView,
        method: 'post',
        data: parameter
    })
}

export function queryAllChnlQST (parameter) {
    return request({
        url: api.queryAllChnlQST,
        method: 'post',
        data: parameter
    })
}

export function queryIntChnlView (parameter) {
    return request({
        url: api.queryIntChnlView,
        method: 'post',
        data: parameter
    })
}

export function queryIntChnlFenLei (parameter) {
    return request({
        url: api.queryIntChnlFenLei,
        method: 'post',
        data: parameter
    })
}

export function queryCallChnlView (parameter) {
    return request({
        url: api.queryCallChnlView,
        method: 'post',
        data: parameter
    })
}

export function queryCallChnlTop (parameter) {
    return request({
        url: api.queryCallChnlTop,
        method: 'post',
        data: parameter
    })
}
export function querybyBusinessType (parameter) {
  return request({
    url: api.querybyBusinessType,
    method: 'post',
    data: parameter
  })
}

export function queryQSTbyBusinessType (parameter) {
  return request({
    url: api.queryQSTbyBusinessType,
    method: 'post',
    data: parameter
  })
}
export function queryStrategy (parameter) {
  return request({
    url: api.queryStrategy,
    method: 'post',
    data: parameter
  })
}

export function queryStrategyType2 (parameter) {
  return request({
    url: api.queryStrategyType2,
    method: 'post',
    data: parameter
  })
}

export function queryStrategyOperation (parameter) {
  return request({
    url: api.queryStrategyPolicyList,
    method: 'post',
    data: parameter
  })
}

export function queryStrategyType (parameter) {
  return request({
    url: api.queryStrategyqueryType1,
    method: 'post',
    data: parameter
  })
}

//全地市
export function citybyBusinessType (parameter) {
  return request({
    url: api.citybyBusinessType,
    method: 'post',
    data: parameter
  })
}
export function cityQSTbyBusinessType (parameter) {
  return request({
    url: api.cityQSTbyBusinessType,
    method: 'post',
    data: parameter
  })
}

export function network(parameter) {
  return request({
    url:api.queryNetWorkBusinessType,
    method: 'post',
    data: parameter
  })
}

export function queryNetWorkBusinessType(parameter){
  return request({
    url:api.queryNetWorkTwoByBusinessType,
    method: 'post',
    data: parameter
  })
}

export function querybyBusinessTypeNetWork(parameter) {
  return request({
    url:api.querybyBusinessTypeNetWork,
    method: 'post',
    data: parameter
  })
}


