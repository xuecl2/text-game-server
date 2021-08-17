import { areaInfoApi } from '../apis/area-api.js'
import { map } from '../global/map.js'
import utils from '../utils/service-utils.js' 

const moduleCode = '002'

export function getCurrentArea(req, army) {
    const coordinate = army.area.coordinate
    const area = map.getArea(coordinate)
    if(!area) return utils.getBusFailureRsp(moduleCode + '001', '不存在的坐标')
    return utils.getSuccessRsp(new areaInfoApi(area))
}

export function moveTo(req, army) {
    const direction = req.direction
    const area = army.area
    if(!area) return utils.getBusFailureRsp(moduleCode + '001', '不存在的坐标')
    const destiny = area.moveTo(army, direction)
    if(!destiny) return utils.getBusFailureRsp(moduleCode + '002', '移动失败，不正确的方向！')
    return utils.getSuccessRsp(new areaInfoApi(destiny))
}
