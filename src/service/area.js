import { areaInfoApi } from '../apis/area-api.js'
import { map } from '../global/map.js'
import utils from '../utils/service-utils.js' 
import { armies, armyNames, sessions } from "../global/global.js"

const moduleCode = '002'

getAreaInfo(sessionId) {
    const coordinate = sessions // todo
    const area = map.getArea(coordinate)
    if(!area) return utils.getBusFailureRsp(moduleCode + '001', '不存在的坐标')
    return utils.getSuccessRsp(new areaInfoApi(map.getArea(coordinate)))
}

moveTO(sessionId, direction) {
    const area = map.getArea(coordinate)
    if(!area) return utils.getBusFailureRsp(moduleCode + '001', '不存在的坐标')
    return utils.getSuccessRsp(new areaInfoApi(map.getArea(coordinate)))
}