import { armies } from "../global/global.js"

const moduleCode = '003'

export function getArmyInfo(req) {
    const army = armies.get(req.id)
    if(!army || !army.mainHero) return utils.getBusFailureRsp(moduleCode + '001', '不存在的军团')
    return utils.getSuccessRsp(new armyInfo(destiny))
}
