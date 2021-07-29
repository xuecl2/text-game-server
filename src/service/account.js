import { armies, armyNames, sessions } from "../global/global.js"
import { v1 as uuid } from 'uuid'

const moduleCode = '001'

export function login(req, ws) {
    const name = req.body.name
    const passwd = req.body.passwd
    if(!name || !passwd) return utils.getBusFailureRsp(moduleCode + '001', '用户名或密码不能为空！')
    if(!armies.get(armyNames.get(name)) || armies.get(armyNames.get(name)).passwd !== passwd) return utils.getBusFailureRsp(moduleCode + '002', '用户名或密码错误！')
    if(name && armies.get(armyNames.get(name)).passwd) {
        const userId = armyNames.get(name)
        const sessionId = uuid()
        sessions.set(sessionId, userId)
        armies.get(userId).ws = ws
        return utils.getSuccessRsp()
    }
}

export function regist() {

}
