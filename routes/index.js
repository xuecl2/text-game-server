import { sessions, armies } from '../src/global/global.js'
import { login, regist } from '../src/service/account.js'
import { getCurrentArea, moveTo } from '../src/service/area.js'

export default {
  login,
  regist,
  'get-current-area': getServlet(getCurrentArea), 
  'move-to': getServlet(moveTo),
}

function getServlet(func) {
  return (sessionId, req, ws) => {
    const army = armies.get(sessions.get(sessionId))
    return funcreq, army, ws)
  }
}

