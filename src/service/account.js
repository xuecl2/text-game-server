import { armies, armyNames, sessions } from "../global/global.js"
import { v4 as uuid } from 'uuid'
import Army from "../entities/army/army.js"
import utils from '../utils/service-utils.js' 
import { registApi } from "../apis/account-api.js"

const moduleCode = '001'
// code 001-字段校验失败
// code 002-用户名或密码错误

export function login(sessionId, req, ws) {
    const account = req.account
    const passwd = req.passwd
    if(!account || !passwd) return utils.getBusFailureRsp(moduleCode + '001', '账号或密码不能为空！')
    if(!armies.get(armyNames.get(account)) || armies.get(armyNames.get(account)).passwd !== passwd) return utils.getBusFailureRsp(moduleCode + '002', '用户名或密码错误！')
    if(account && armies.get(armyNames.get(account)).passwd) {
        const userId = armyNames.get(account)
        const sessionId = uuid()
        const army = armies.get(userId)
        sessions.set(sessionId, userId)
        army.ws = ws
        return utils.getSuccessRsp(new registApi(sessionId, army))
    }
}

export function regist(sessionId1, req, ws) {
    const account = req.account
    const passwd = req.passwd
    if(!account) return utils.getBusFailureRsp(moduleCode + '001', '账号不能为空')
    if(!passwd) return utils.getBusFailureRsp(moduleCode + '001', '密码不能为空')
    if(armyNames.get(account)) return utils.getBusFailureRsp(moduleCode + '003', '账号已被注册，请重新输入！')
    const army = Army.getArmyInstance(account, passwd)
    armyNames.set(account, army.id)
    armies.set(army.id, army)
    army.ws = ws
    const sessionId = uuid()
    sessions.set(sessionId, army.id)
    return utils.getSuccessRsp(new registApi(sessionId, army))
}
