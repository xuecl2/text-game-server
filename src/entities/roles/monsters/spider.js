import Monster from './monster'

class Spider extends Monster {
    constructor() {
        this.race = 'worm'
        this.monsterClass = 'spider'
        this.elementDamageRate = {
            fire: 1.2,
            ice: 1,
            thunder: 1,
            wind: 1
        }
    }
}