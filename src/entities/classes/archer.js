// import Ranger from './ranger'
// import Hunter from './knight'
import Status from '../status/status.js'

export default class Warrior {
    name = '弓箭手'
    avaliableLv = '1'
    previousClass = null
    // nextClasses = new Set(Ranger, Hunter)
    classStage = 1
    desc = '使用弓箭的能手，消耗箭矢造成大量伤害'
    growth = new Status()
    classSkill = {
        1: null,
        30: null,
        60: null,
        90: null,
        100: null,
        120: null,
        150: null,
        180: null,
        200: null,
    }
    constructor() {
        this.growth.hp = 30
        this.growth.mp = 10
        this.growth.physicAtk = 10
        this.growth.magicAtk = 2
        this.growth.physicDef = 10
        this.growth.magicDef = 2
    }
}

