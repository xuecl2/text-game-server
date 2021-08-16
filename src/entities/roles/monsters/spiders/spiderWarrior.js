import Monster from '../monster.js'
import { getProxyInstance } from "../../utils/event-utils.js"
import Status from '../../../status/status.js'

export default class SpiderWarrior extends Monster {
    constructor() {
        this.race = 'insect'
        this.monsterClass = 'spider'
        this.rank = 'elite'
        this.initialStatus = new Status({
            hp: 3000,
            physicAtk: 100,
            fireDefRate: 0.8,
            physicDef: 50,
        })
    }

    static getSpiderInstance() {
        return getProxyInstance(new SpiderWarrior())
    }
}
