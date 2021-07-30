import { armies, armyNames, sessions } from "../global/global.js"
import { v1 as uuid } from 'uuid'
import Army from "../entities/army/army.js"
import Hero from "../entities/roles/hero/hero.js"

const moduleCode = '001'

export function login(req, ws) {
    const name = req.name
    const passwd = req.passwd
    if(!name || !passwd) return utils.getBusFailureRsp(moduleCode + '001', '用户名或密码不能为空！')
    if(!armies.get(armyNames.get(name)) || armies.get(armyNames.get(name)).passwd !== passwd) return utils.getBusFailureRsp(moduleCode + '002', '用户名或密码错误！')
    if(name && armies.get(armyNames.get(name)).passwd) {
        const userId = armyNames.get(name)
        const sessionId = uuid()
        const army = armies.get(userId)
        sessions.set(sessionId, userId)
        army.ws = ws
        return utils.getSuccessRsp(JSON.stringify({sessionId, army}))
    }
}

export function regist(req, ws) {
    const className = req.className 
    const gender = req.gender
    const name = req.name
    const passwd = req.passwd
    if(!className) return utils.getBusFailureRsp(moduleCode + '001', '职业不能为空')
    if(!gender) return utils.getBusFailureRsp(moduleCode + '001', '性别不能为空')
    if(!name) return utils.getBusFailureRsp(moduleCode + '001', '姓名不能为空')
    if(!passwd) return utils.getBusFailureRsp(moduleCode + '001', '密码不能为空')
    const hero = Hero.getHeroInstance(className, gender)
    const army = Army.getArmyInstance(name, passwd, hero)
    army.ws = ws
    const sessionId = uuid()
    sessions.set(sessionId, userId)
    return utils.getSuccessRsp(JSON.stringify({sessionId, army}))
}
