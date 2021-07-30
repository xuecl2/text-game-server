export default class Witch {
    name = '魔女'
    avaliableLv = '1'
    previousClass = null
    nextClasses = null
    classStage = 1
    desc = '魔女的魔力远超一般的魔术师，其中的强者足以毁灭世界'
    growth = new Status()
    constructor() {
        this.growth.hp = 20
        this.growth.mp = 50
        this.growth.physicAtk = 2
        this.growth.magicAtk = 15
        this.growth.physicDef = 2
        this.growth.magicDef = 15
    }
}