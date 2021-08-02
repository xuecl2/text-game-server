import { getProxyInstance } from "../../utils/event-utils.js"
import { map } from "../../global/map.js"

export default class Army {
    account = ''
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
    area = map[0][0]
    msgQueue = []
    constructor(account, passwd) {
        this.account = account
        this.passwd = passwd
    }

    static getArmyInstance(account, passwd) {
        return getProxyInstance(new Army(account, passwd))
    }

}
