import Monster from '../monster'
import { getProxyInstance } from "../../utils/event-utils.js"
import Status from '../../../status/status.js'

export default class SpiderWarrior extends Monster {
    constructor() {
        this.race = 'insect'
        this.monsterClass = 'spider'
        this.rank = 'elite'
        this.initialStatus = new Status({
            hp: 250,
            physicAtk: 10,
            fireDefRate: 0.8,
        })
    }

    static getSpiderInstance() {
        return getProxyInstance(new SpiderWarrior())
    }
}