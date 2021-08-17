import { sessions, armies } from '../src/global/global.js'
import { login, regist } from '../src/service/account.js'
import { getCurrentArea, moveTo } from '../src/service/area.js'
import { getArmyInfo } from '../src/service/army.js'

export default {
  login,
  regist,
  'get-current-area': getServlet(getCurrentArea), 
  'move-to': getServlet(moveTo),
  'get-army-info': getServlet(getArmyInfo),
}

function getServlet(func) {
  return (sessionId, req, ws) => {
    const army = armies.get(sessions.get(sessionId))
    return func(req, army, ws)
  }
}

