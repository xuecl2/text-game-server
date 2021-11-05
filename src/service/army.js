import { armies } from "../global/global.js"
import utils from '../utils/service-utils.js' 
import { armyInfoApi } from '../apis/army-api.js'

const moduleCode = '003'

export function getArmyInfo(req) {
    if(!req.id) return utils.getBusFailureRsp(moduleCode + '001', '军团id不能为空!')
    const army = armies.get(req.id)
    if(!army?.mainHero) return utils.getBusFailureRsp(moduleCode + '002', '不存在的军团')
    return utils.getSuccessRsp(new armyInfoApi(army))
}
