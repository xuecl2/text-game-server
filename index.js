import webSocket from 'ws'
import router from './routes/index.js'
import utils from './src/utils/service-utils.js'
import { wsPort } from './config/config.js'

const { Server: WebSocketServer } = webSocket
const wss = new WebSocketServer({ port: wsPort })
const moduleCode = '000'

wss.on('connection', ws => {
    ws.on('message', message => {
        try{
            console.log('请求报文：' + message)
            if(message === 'HeartBeat') {
                ws.send('HeartBeat')
                return
            }
            const req = JSON.parse(message)
            const tradecode = req?.head?.tradecode
            const servlet = router[tradecode]
            if(!servlet){
                ws.send(utils.getFailureRsp(moduleCode + '001', tradecode + '没有对应的服务'))
                return
            }
            let rsp = servlet(req, ws)
            const defaultRspHeader = {
                uuid: req.uuid,
                timeStamp: new Date().getTime(),
                tradecode: tradecode,
            }
            rsp.head = {...defaultRspHeader, ...rsp.head}
            rsp.body = rsp.body ?? {}
            ws.send(JSON.stringify(rsp))
        }catch(err){
            console.error(err)
        }
    })
})
console.log('your application is running on port ' + wsPort)
