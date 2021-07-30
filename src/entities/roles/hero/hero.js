import Role from '../role'
import heroClass from '../../classes/heroClass.js'
import { getRandomElement } from '../../../utils/random-utils'
import { getProxyInstance } from '../../../utils/event-utils'

export default class Hero extends Role {
    gender = 'male'
    heroClass = null
    equipments = new Map()
    rare = 'R'
    constructor(heroClassName, gender) {
        this.heroClass = heroClass.getClassInstance(heroClassName)
        if(!gender) gender = getRandomElement(['male', 'female'])
        this.gender = gender
    }

    static getHeroInstance(heroClassName, gender) {
        return getProxyInstance(new Hero(heroClassName, gender))
    }
}