import { getProxyInstance } from "../../utils/event-utils.js"
import { map } from "../../global/map.js"

export default class Army {
    account = ''
    passwd = ''
    name = ''
    mainHero = null
    heros = new Set()
    bag = new Set()
    alias = null
    battleTeam = new Set()
    gold = 0
    armyRank = 'F'
    magicStone = 0
    npcs = new Set()
    quests = new Set()
    openedDungeons = new Set()
    currentDungeon = null
    area = null
    msgQueue = []
    constructor(account, passwd) {
        this.account = account
        this.passwd = passwd
        map[0][0].addArmy(this)
    }

    hireHero(hero) {
        this.heros.add(hero)
    }

    setBattle(hero) {
        if(!this.heros.has(hero)) throw new Error('佣兵不属于军团！')
        this.battleTeam.add(hero)
    }

    static getArmyInstance(account, passwd) {
        return getProxyInstance(new Army(account, passwd))
    }
}
