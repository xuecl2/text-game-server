import { getProxyInstance } from "../../utils/event-utils.js"

export default class Army {
    id = ''
    name = ''
    passwd = ''
    heros = new Map()
    bag = new Set()
    alias = new Set()
    battleTeam = new Set()
    gold = 0
    armyRank = 'F'
    magicStone = 0
    npcs = new Set()
    quests = new Set()
    openedDungeons = new Set()
    currentDungeon = null
    msgQueue = []
    constructor(name, passwd, hero) {
        this.name = name
        this.passwd = passwd
        this.heros.set(hero.id, hero)
        this.battleTeam.add(hero)
    }

    static getArmyInstance(name, passwd, hero) {
        return getProxyInstance(new Army(name, passwd, hero))
    }

}
