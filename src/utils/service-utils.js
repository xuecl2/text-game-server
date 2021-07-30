export default {
    getSuccessRsp,
    getBusFailureRsp,
    getUnknowTecFailureRsp,
    getTecFailureRsp,
}

const TEC_ERR_FLAG = 'T'
const BUSI_ERR_FLAG = 'B'
const SUCCESS_CODE = '000000'
const UNKNOW_TEC_ERR_CODE = 'T999999'
const UNKNOW_TEC_ERR_MSG = '未知错误'

// 001: 请求字段校验错误

// code说明: 信息类型(1位) + 模块(3位) + 序号(3位)

function getSuccessRsp(body){
    return {
        head: {
            rspCode: SUCCESS_CODE, 
            resultMessage: '交易成功'
        },
        body: body,
    }
}

function getBusFailureRsp(code, msg, body) {
    return {
        head: {
            rspCode: BUSI_ERR_FLAG + code,
            resultMessage: msg,
        },
        body: body,
    }   
}

function getUnknowTecFailureRsp(code, msg, body) {
    return {
        head: {
            rspCode: UNKNOW_TEC_ERR_CODE,
            resultMessage: UNKNOW_TEC_ERR_MSG,
        },
        body: body,
    }   
}

function getTecFailureRsp(code, msg, body) {
    return {
        head: {
            rspCode: TEC_ERR_FLAG + code,
            resultMessage: msg,
        },
        body: body,
    }   
}

