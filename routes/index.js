import { sessions, armies } from '../src/global/global.js'
import { login, regist } from '../src/service/account.js'
import { getCurrentArea, moveTo } from '../src/service/area.js'

export default {
  login,
  regist,
  get_current_area: getServlet(getCurrentArea), 
  move_to: getServlet(moveTo),
}

function getServlet(func) {
  return (sessionId, req, ws) => {
    const army = armies.get(sessions.get(sessionId))
    return func(army, req, ws)
  }
}

