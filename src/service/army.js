import { armies } from "../global/global.js"
import utils from '../utils/service-utils.js' 
import { armyInfoApi } from '../apis/army-api.js'

const moduleCode = '003'

export function getArmyInfo(req) {
    const army = armies.get(req.id)
    if(!army || !army.mainHero) return utils.getBusFailureRsp(moduleCode + '001', '不存在的军团')
    return utils.getSuccessRsp(new armyInfoApi(army))
}
