import Wizard from './wizard'
import Warlock from './warlock'
import Status from '../status/status'

class Maga {
    name = '魔术师'
    avaliableLv = '1'
    previousClass = null
    nextClasses = new Set(Wizard, Warlock)
    classStage = 1
    desc = '自身很脆弱，但可以使用魔力保护队友和攻击敌人'
    growth = new Status()
    constructor() {
        this.growth.hp = 20
        this.growth.mp = 40
        this.growth.physicAtk = 2
        this.growth.magicAtk = 15
        this.growth.physicDef = 2
        this.growth.magicDef = 15
    }
}