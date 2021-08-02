export class moveToApi {
    constructor(area) {
        this.sessionid = sessionid
        this.army = {}
        this.army.id = army.id
        this.army.account = army.account
        this.army.passwd = army.passwd
        this.army.heros = [...army.heros].map(entry => entry[1].id)
        this.army.alias = [...army.alias].map(army => army.id)
        this.army.battleTeam = [...army.battleTeam].map(army => army.id)
        this.army.gold = army.gold
        this.army.armyRank = army.armyRank
        this.army.magicStone = army.magicStone
        this.army.openedDungeons = [...army.openedDungeons].map(dungeon => dungeon.id)
        this.army.currentDungeon = army.currentDungeon
        this.army.msgQueue = army.msgQueue
    }
}
