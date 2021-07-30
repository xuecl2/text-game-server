import Warrior from './warrior.js'
import Archer from './archer.js'
import Maga from './maga.js'
import Witch from './witch.js'

export default class HeroClass {
    name = ''
    avaliableLv = ''
    previousClass = null
    nextClassed = new Set()
    classStage = 1
    desc = ''
    growth = null
    classSkill = {}

    static getClassInstance(className) {
        switch (className) {
            case 'Warrior':
                return new Warrior()
                break;
            case 'Archer':
                return new Archer()
                break;
            case 'Maga':
                return new Maga()
                break;
            case 'Witch':
                return new Witch()
                break;
            default:
                return new Warrior()
                break;
        }
    }
}