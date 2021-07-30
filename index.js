import webSocket from 'ws'
import router from './routes/index.js'
import utils from './src/utils/service-utils.js'
import { wsPort } from './config/config.js'

const { Server: WebSocketServer } = webSocket
const wss = new WebSocketServer({ port: wsPort })
const moduleCode = '000'
// code: 001- 没有对应服务

wss.on('connection', ws => {
    ws.on('message', message => {
        try{
            if(message === 'HeartBeat') {
                ws.send('HeartBeat')
                return
            }
            console.log('请求报文：' + message)
            const req = JSON.parse(message)
            const tradecode = req?.head?.tradecode
            const servlet = router[tradecode]
            if(!servlet){
                ws.send(utils.getBusFailureRsp(moduleCode + '001', tradecode + '没有对应的服务'))
                return
            }
            let rsp = servlet(req.body, ws)
            const defaultRspHeader = {
                uuid: req.head.uuid,
                timeStamp: new Date().getTime(),
                tradecode: tradecode,
            }
            rsp.head = {...defaultRspHeader, ...rsp.head}
            rsp.body = rsp.body ?? {}
            console.log('响应报文: ' + JSON.stringify(rsp))
            ws.send(JSON.stringify(rsp))
        }catch(err){
            ws.send(JSON.stringify(utils.getUnknowTecFailureRsp()))
            console.error(err)
        }
    })
})
console.log('your application is running on port ' + wsPort)
