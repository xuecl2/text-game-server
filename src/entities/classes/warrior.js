import Berserker from './berserker'
import Knight from './knight'
import Status from '../status/status'

export default class Warrior {
    name = '战士'
    avaliableLv = '1'
    previousClass = null
    nextClasses = new Set(Berserker, Knight)
    classStage = 1
    desc = '强壮的战士，可以使用盾牌保护队友，也可以重击敌人'
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
        this.growth.hp = 50
        this.growth.mp = 10
        this.growth.physicAtk = 10
        this.growth.magicAtk = 2
        this.growth.physicDef = 10
        this.growth.magicDef = 2
    }
}

