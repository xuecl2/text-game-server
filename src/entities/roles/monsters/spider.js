import Monster from './monster'
import { getProxyInstance } from "../../utils/event-utils.js"
import Status from '../../status/status.js'

export default class Spider extends Monster {
    constructor() {
        this.race = 'insect'
        this.monsterClass = 'spider'
        this.initialStatus = 
        this.elementDamageRate = {
            fire: 1.2,
            ice: 1,
            thunder: 1,
            wind: 1
        }
    }

    static getSpiderInstance() {
        return getProxyInstance(new Spider())
    }
}