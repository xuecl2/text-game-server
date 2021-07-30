import { getProxyInstance } from "../../utils/event-utils.js"

export default class Army {
    id = ''
    name = ''
    passWd = ''
    heros = new Map()
    bag = new Set()
    alias = new Set()
    battleTeam = new Set()
    gold = 0
    armyRank = 'F'
    magicStone = 0
    npcs = new Set()
    quests = new Set()
    teamInvitation = new Set()
    openedDungeons = new Set()
    currentDungeons = null
    battleLog = ''
    tipsLog = ''
    constructor(name, passWd, hero) {
        this.name = name
        this.passWd = passWd
        this.heros.set(hero.id, hero)
        this.battleTeam.add(hero)
    }

    static getArmyInstance(name, passWd, hero) {
        return getProxyInstance(new Army(name, passWd, hero))
    }

}
