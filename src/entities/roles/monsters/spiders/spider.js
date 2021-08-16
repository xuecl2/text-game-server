import Monster from '../monster.js'
import { getProxyInstance } from "../../utils/event-utils.js"
import Status from '../../../status/status.js'

export default class Spider extends Monster {
    constructor() {
        this.race = 'insect'
        this.monsterClass = 'spider'
        this.rank = 'normal'
        this.initialStatus = new Status({
            hp: 500,
            physicAtk: 10,
            fireDefRate: 0.8,
        })
    }

    static getInstance() {
        return getProxyInstance(new Spider())
    }
}
