import Monster from './monster'
import { getProxyInstance } from "../../utils/event-utils.js"
import Status from '../../status/status.js'

export default class Spider extends Monster {
    constructor() {
        this.race = 'insect'
        this.monsterClass = 'spider'
        this.rank = 'normal'
        this.initialStatus = new Status({
            hp: 50,
            physicAtk: 10,
            fireDef: 0.8,
        })
    }

    static getSpiderInstance() {
        return getProxyInstance(new Spider())
    }
}